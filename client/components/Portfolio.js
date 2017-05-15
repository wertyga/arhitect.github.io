import { dataProjects } from '../../data/dataProjects';
import FlipMove from 'react-flip-move';
import MediaQuery from 'react-responsive';
import { Link } from 'react-router-dom';

import '../styles/Portfolio.sass';

import Footer from './Footer';

const Portfolio = createReactClass ({

    componentDidMount() {
        document.body.scrollTop = 0
    },

    render() {

        const style = {
            wrap: {
                more: {
                    height: '25vw'
                },
                less: {
                    height: '35vw'
                }
            },
            header: {
                fontSize: window.innerWidth < 550 ? '30px' : '80px'
            }
        };

        return (
            <div className="Portfolio">
                <FlipMove appearAnimation="fade">
                <div className="container">
                    <div className="row">
                        <div className="col-md-10 col-md-offset-1">
                            <h3>Проекты</h3>
                        </div>
                    </div>

                    {dataProjects.map((project, i) => { return (
                        <div className="row" key={i}>
                            <div className="col-md-10 col-md-offset-1">
                                <MediaQuery maxWidth={992}>
                                    <div className="itemWrapPortfolio">

                                        <div className="imgWrap" style={style.wrap.less}>
                                            <img src={project.image} alt={project.header}/>
                                        </div>

                                        <MediaQuery maxWidth={550}>
                                            <Link className="blackBack" to={`/project/${project.id}`}><h2 style={{fontSize: '30px'}}>{project.header}</h2></Link>
                                        </MediaQuery>
                                        <MediaQuery minWidth={551}>
                                            <Link className="blackBack" to={`/project/${project.id}`}><h2 style={{fontSize: '80px'}}>{project.header}</h2></Link>
                                        </MediaQuery>

                                    </div>

                                </MediaQuery>
                                <MediaQuery minWidth={993}>
                                    <div className="itemWrapPortfolio">
                                        <div className="imgWrap" style={style.wrap.more}>
                                            <img src={project.image} alt={project.header}/>
                                        </div>

                                        <MediaQuery maxWidth={550}>
                                            <Link className="blackBack" to={`/project/${project.id}`}><h2 style={{fontSize: '30px'}}>{project.header}</h2></Link>
                                        </MediaQuery>
                                        <MediaQuery minWidth={551}>
                                            <Link className="blackBack" to={`/project/${project.id}`}><h2 style={{fontSize: '80px'}}>{project.header}</h2></Link>
                                        </MediaQuery>

                                    </div>
                                </MediaQuery>


                            </div>
                        </div>
                    )})}

                </div>
                </FlipMove>
                <Footer />
            </div>
        );
    }
});

export default Portfolio;