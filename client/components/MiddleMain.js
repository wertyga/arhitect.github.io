import '../styles/MiddleMain.sass';
import { dataProjects } from '../../data/dataProjects';
import dataNews from '../../data/dataNews';

import ProjectMain from './ProjectMain';
import NewsMain from './News/NewsMain';
import Footer from './Footer';

import FlipMove from 'react-flip-move';
import { Link } from 'react-router-dom';

const style = {
    header: {
        paddingTop: (window.innerHeight / window.innerWidth > 1.3) ? window.innerHeight * 0.5 + 'px' : window.innerHeight * 0.8 + 'px',

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

const MiddleMain = createReactClass ({
    render() {
        return (
            <div className="header2">
                <FlipMove appearAnimation="fade" >
                    <div className="bgImage" style={style.header}></div>
                    <section className="middleMain" >
                        <div className="container">
                            <div className="row">
                                <div className="col-md-4 col-md-offset-1">
                                    <h3>Избранные проекты</h3>
                                </div>
                            </div>
                            <div className="row">

                                <div className="col-md-11 col-md-offset-1">
                                    {dataProjects.map(function(project, i) {
                                        if(i > 2) return;

                                        return (<ProjectMain
                                        key={project.id}
                                        id={project.id}
                                        image={project.image}
                                        date={project.date}
                                        header={project.header}
                                        city={project.city}
                                        description={project.description}
                                        />)
                                    })}

                                </div>

                            </div>
                            {dataProjects.length > 3 &&
                            <div className="row">
                                <div className="col-md-3 col-md-offset-1"><Link to="/portfolio">
                                    <i className="fa fa-angle-left"></i>
                                    <i className="fa fa-angle-left"></i>
                                    В портфолио
                                </Link></div>
                            </div>
                            }

                            <div className="row">
                                <div className="col-md-10 col-md-offset-1">
                                    <h3 style={{ marginTop: '70px' }}>Свежие новости</h3>
                                </div>
                            </div>

                            <div className="row">
                                <div className="newsContainer clearfix">
                                    {dataNews.map((news, i) => {
                                        if(i > 2) return;
                                        if(i > 0) {
                                            return (<div className="col-md-3 col-sm-4 col-md-offset-1" key={news.id}>
                                                <NewsMain
                                                    id={news.id}
                                                    date={news.date}
                                                    text={news.text}
                                                    header={news.header}
                                                    link
                                                />
                                            </div>)
                                        }
                                        return (<div className="col-md-3 col-sm-4 col-md-offset-1" key={news.id}>
                                            <NewsMain
                                                id={news.id}
                                                date={news.date}
                                                text={news.text}
                                                header={news.header}
                                                link
                                            />
                                            {dataNews.length > 3 && (
                                                <Link to="/news"><i className="fa fa-angle-left"></i><i className="fa fa-angle-left"></i>Больше новостей</Link>
                                            )}
                                        </div>)
                                    })}
                                </div>

                            </div>

                        </div>
                    </section>

                    <Footer />

                </FlipMove>
            </div>

        );
    }
});

export default MiddleMain;