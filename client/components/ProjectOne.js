import { Link } from 'react-router-dom';

import NewsMain from './News/NewsMain';
import Footer from './Footer';
import Slider from './common/Slider';

import '../styles/Project.sass';
import FlipMove from 'react-flip-move';

class ProjectOne extends React.Component {

    render() {
        const style = {
            link: {
                i: {
                    fontSize: '15px'
                }
            },
            slider: {
                height: window.height
            }
        };
        return (
        <FlipMove appearAnimation="fade">
            <div className="Project">
                <div className="container">
                    <div className="row">
                        <div className="col-md-10 col-md-offset-1 col-xs-12" >
                            <Slider
                                imgs={this.props.project.slider}
                            />
                        </div>
                    </div>
                    <div className="description">
                        <div className="row">
                            <div className="col-md-4 col-md-offset-1" >
                                <h3>{this.props.project.city}</h3>
                                <NewsMain
                                    header={this.props.project.header}
                                    date={this.props.project.date}
                                />
                            </div>
                            <div className="col-md-5 col-md-offset-1">
                                <p ref="par">
                                    {this.props.project.description}
                                </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4 col-md-offset-1">
                                <div className="link">
                                    <Link style={style.link} to="/portfolio"><i style={style.link.i} className="fa fa-angle-left"></i><i style={style.link.i} className="fa fa-angle-left"></i> Назад в портфолио</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Footer />

            </div>
        </FlipMove>
        );
    }
};

export default ProjectOne;