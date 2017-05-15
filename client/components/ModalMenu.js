import '../styles/ModalMenu.sass';

import classnames from 'classnames';

const ModalMenu = createReactClass ({
    render() {
        return (
            <div className="ModalMenu" onClick={this.props.onClick}>
                <span className={classnames("firstSpan", { 'close':  this.props.state})}></span>
                <span className={classnames("secondtSpan", { 'close':  this.props.state})}></span>
                <span className={classnames("thirdSpan", { 'close':  this.props.state})}></span>
            </div>
        );
    }
});

export default ModalMenu;