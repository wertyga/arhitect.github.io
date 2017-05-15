import '../../styles/NewsMain.sass';

import { Link } from 'react-router-dom';

const NewsMain = createReactClass ({
    render() {

        const date = this.props.date ? this.props.date : '';

        return (
            <div className="NewsMain">
                <h2>{this.props.header}</h2>
                <div className="date">

                        <span>{date.split('/')[0]}</span>/
                        <span>{date.split('/')[1]}</span>/
                        <span>{date.split('/')[2]}</span>

                </div>
                <div className="text-block text-left">
                    {this.props.text && <p className="text-left">{this.props.text.slice(0, 100) + '...'}</p>}
                    {this.props.link && <Link to={`/news/${this.props.header}`}>{!this.props.linkName ? 'Читать' : this.props.linkName}</Link>}
                </div>
            </div>
        );
    }
});

export default NewsMain;