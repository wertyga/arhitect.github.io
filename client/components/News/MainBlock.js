import dataNews from '../../../data/dataNews';
import { Archive } from './Archive';
import Footer from '../Footer';

import { Link } from 'react-router-dom';

import FlipMove from 'react-flip-move';


const style = {
    aloneh2: {
        paddingBottom: '60px'
    }
};

dataNews.sort(function (one, second) {
    let dateOne = one.date.split('/')[0] * one.date.split('/')[1] * one.date.split('/')[2];
    let dateSecond = second.date.split('/')[0] * second.date.split('/')[1] * second.date.split('/')[2];
    if(dateOne > dateSecond) {
        return -1;
    } else {
        return 1
    };

});


const MainBlock = createReactClass ({

    render() {

        const emptyList = (
            <h2 style={style.aloneh2}>В этом месяце нет ностей, прийдте позже или загляните в архив.</h2>
        );

        return (
            <FlipMove appearAnimation="fade">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-md-offset-1">
                            {this.props.monthNews.length > 0 ? this.props.monthNews : emptyList}
                        </div>
                        <div className="col-md-3 col-md-offset-1">
                            <div className="freshContainer">
                                <div className="freshHeader">
                                    <h3>Свежие посты</h3>
                                </div>

                                {dataNews.map((news, i) => {
                                    if(i > 2) return;
                                    return (
                                        <div className="row" key={news.id}>
                                            <div className="freshNew clearfix">
                                                <div className="col-md-5 col-xs-6 img">
                                                    <Link to={'/news/' + news.header}>
                                                        <img src={news.image} alt={news.description}/>
                                                    </Link>
                                                </div>
                                                <div className="col-md-6 col-xs-6">
                                                    <div className="newsDescr">
                                                        <Link to={'/news/' + news.header}>
                                                            <h4>{news.description}</h4>
                                                        </Link>
                                                        <div className="newsLittleDate">
                                                            <span>{news.date.split('/')[0] + '.'}</span>
                                                            <span>{news.date.split('/')[1] + '.'}</span>
                                                            <span>{news.date.split('/')[2]}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> );
                                })}
                                <Archive/>
                            </div>
                        </div>
                    </div>

                </div>
                <Footer />
            </FlipMove>
        );
    }
});

export default MainBlock;