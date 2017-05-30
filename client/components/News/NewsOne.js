import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';

const socialLinks = (



            <div className="socialLinks clearfix">

                    <div className="col-md-8 col-xs-12 no-margin no-padding">
                        <div className="leftLinksSocial">
                            <Link to="/social"><div className="facebook"><i className="fa fa-facebook"></i><p>поделиться в Facebook</p></div></Link>
                            <Link to="/social"><div className="twitter"><i className="fa fa-twitter"></i><p>поделиться в Twitter</p></div></Link>
                        </div>
                    </div>

                    <div className="col-md-4 col-xs-12 no-margin no-padding">
                        <div className="rightLinksSocial">
                            <div>
                                <Link to="/social"><div className="in"><i className="fa fa-instagram"></i></div></Link>
                                <Link to="/social"><div className="pinterest"><i className="fa fa-pinterest-p"></i></div></Link>
                                <Link to="/social"><div className="googlePlus"><i className="fa fa-google-plus"></i></div></Link>
                            </div>
                            <div>
                                <Link to="/social" className="heart"><i className="fa fa-heart"></i></Link>
                            </div>

                        </div>
                </div>

            </div>


);

const NewsOne = createReactClass ({

    componentDidUpdate() {
        ReactDOM.findDOMNode(this).scrollTop = 0
    },

    getInitialState() {
        return {
            loading: true
        }
    },

    render() {
        return (
            <div className="newsOne">
                <h2>{this.props.header}</h2>
                    <div className="newsDate">
                        <span>{this.props.date.split('/')[0] + '.'}</span>
                        <span>{this.props.date.split('/')[1] + '.'}</span>
                        <span>{this.props.date.split('/')[2]}</span>
                    </div>
                {this.props.text && <div className="newsText">{this.props.text}</div>}
                <div className="newsImageWrap">
                    <img src={this.props.image} alt={this.props.header}/>
                </div>
                <div className="newsLink">
                    {this.props.link && <Link to={'/news/' + this.props.id}>Читать дальше</Link>}
                </div>
                {this.props.itsOne && socialLinks}
            </div>
        );
    }
});

export default NewsOne;
