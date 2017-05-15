import { Link, NavLink } from 'react-router-dom';
import classnames from 'classnames';

import { Divider } from 'semantic-ui-react';
import FlipMove from 'react-flip-move';
import MediaQery from 'react-responsive';

import '../styles/UpperMenu.sass';

import ModalMenu from './ModalMenu';

const style = {
    container: {
        width: '75%'
    },
    menu: {
        width: '100%',
        zIndex: 50,
        position: 'absolute',
        top: 0
    }
};

const UpperMenu = createReactClass ({
    getInitialState() {
        return {
            modalMenu: false
        }
    },

    onClick() {
        if(!this.state.modalMenu) {
            this.setState({
                modalMenu: true
            })
        } else {
            this.setState({
                modalMenu: false
            })
        }
    },

    closeClick() {
        this.setState({
            modalMenu: false
        });
    },

    animate() {

    },

    render() {
        const higher = (
            <div className="row">
                <div className="col-md-5 col-md-offset-1">
                    <div className={classnames("left-logo", {"text-center": window.innerWidth < 992 && window.innerWidth > 448})}>
                        <span className="logo">AK</span>
                        <Link to="/" className="logo-link">МИКЕЛАНДЖЕЛО</Link>
                    </div>

                </div>
                <div className="col-md-5">
                    <div className="navigate">
                        <NavLink exact className="navLink" to="/" activeClassName="active">Главная</NavLink>
                        <NavLink exact className="navLink" to="/portfolio" activeClassName="active">Портфолио</NavLink>
                        <NavLink exact className="navLink" to="/about" activeClassName="active">О нас</NavLink>
                        <NavLink exact className="navLink" to="/news" activeClassName="active">Новости</NavLink>
                    </div>
                </div>
            </div>
        );
        const lower = (
            <div className="row">
                <div className="col-md-5 col-md-offset-1" ref={(div) => { this.div = div }}>
                    <div className={classnames("left-logo", 'clearfix', {"text-center": window.innerWidth < 992 && window.innerWidth > 448})}>
                        <div className="col-xs-4">
                            <Link to="/"><span className="logo">AK</span></Link>
                        </div>
                        <div className="col-xs-3 text-right col-xs-offset-4" style={{ zIndex: 55 }}>
                            <ModalMenu
                                onClick={this.onClick}
                                state={this.state.modalMenu}
                            />

                        </div>
                    </div>

                    <FlipMove enterAnimation="fade" leaveAnimation="fade">

                    {this.state.modalMenu && (

                        <ul className="toggleMenu">
                            <li>
                                <NavLink exact onClick={this.closeClick} className="navLink" to="/" activeClassName="active">Главная</NavLink>
                            </li>
                            <Divider />


                            <li>
                                <NavLink exact onClick={this.closeClick} className="navLink" to="/portfolio" activeClassName="active">Портфолио</NavLink>
                            </li>

                            <Divider />

                            <li>
                                <NavLink exact onClick={this.closeClick} className="navLink" to="/about" activeClassName="active">О нас</NavLink>
                            </li>

                            <Divider />

                            <li>
                                <NavLink exact onClick={this.closeClick} className="navLink" to="/news" activeClassName="active">Новости</NavLink>
                            </li>
                        </ul>


                    )}

                    </FlipMove>

                </div>
            </div>
        );
        return (
            <div className="header" style={style.header}>
                <div className="container">
                    <MediaQery maxWidth={480}>
                        {lower}
                    </MediaQery>
                    <MediaQery minWidth={481}>
                        {higher}
                    </MediaQery>
                </div>
            </div>
        );
    }
});

export default UpperMenu;