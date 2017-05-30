import { Link } from 'react-router-dom';
import MediaQuery from 'react-responsive';

import '../styles/projectMain.sass';

const style = {
    row: {
        display: window.innerWidth < 992 ? 'block' : 'flex',

   },
    img: {
        width: '100%',
        marginBottom: window.innerWidth < 992 ? '40px' : null
    }
};

const ProjectMain = createReactClass ({
    render() {
        return (
            <div>

            <MediaQuery minWidth={993}>
                <div className="row rowProject" style={{display: 'flex'}}>
                    <div className="col-md-6 col-sm-12">
                        <Link to={'/project/' + this.props.id}>
                            <img src={this.props.image} alt={this.props.imgAlt} style={{ width: '100%' }}/>
                        </Link>
                    </div>
                    <div className="col-md-4 col-sm-12">
                        <div className="projectMainRight clearfix" >

                            <span style={style.span}>{this.props.date}</span>

                            <h3>{this.props.header + ','}<br/>{this.props.city}</h3>

                            <p>{this.props.description}</p>
                            <Link to={'/project/' + this.props.id}>Смотреть</Link>

                        </div>
                    </div>
                </div>
            </MediaQuery>

                <MediaQuery maxWidth={992}>
                    <div className="row rowProject">
                        <div className="col-md-6 col-sm-12">
                            <Link to={'/project/' + this.props.id}>
                                <img src={this.props.image} alt={this.props.imgAlt} style={{  width: '100%', marginBottom: '40px' }}/>
                            </Link>
                        </div>
                        <div className="col-md-4 col-sm-12">
                            <div className="projectMainRight clearfix" >

                                <span style={style.span}>{this.props.date}</span>

                                <h3>{this.props.header + ', ' + this.props.city}</h3>

                                <p>{this.props.description}</p>
                                <Link to={'/project/' + this.props.id}>Смотреть</Link>

                            </div>
                        </div>
                    </div>
                </MediaQuery>

            </div>

        );
    }
});
ProjectMain.propTypes = {
    image: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    header: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
}


export default ProjectMain;