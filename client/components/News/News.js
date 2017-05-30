
import { fetchMonthNews } from '../../actions/actions';
import { fetchOneNews } from '../../actions/actions';
import { fetchArchiveMonth } from '../../actions/actions';

import '../../styles/News.sass';
import CircularProgress from 'material-ui/CircularProgress';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import NewsOne from './NewsOne';
import MainBlock from './MainBlock';

import FlipMove from 'react-flip-move';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const style = {
    loader: {
        marginTop: '45vh'
    }
};



const News = createReactClass ({

    componentDidUpdate(prevProps, prevState) {
        let archive = window.location.pathname.slice(1).split('/')[1];

        if (this.props.match.params.id) {
            if(this.props.match.params.id !== prevProps.match.params.id) {
                if(archive == 'archive') {
                    this.onLinkArchive();
                    window.scrollTo(0, 140);
                } else {
                    this.oneNews();
                    window.scrollTo(0, 140);
                };
            }
        };
    },

    oneNews() {
        this.props.fetchOneNews(this.props.match.params.id)
            .then(res => {
                this.setState({ loading: false });
                if(!res) { this.setState({redirect: true})}
            })
            .catch(err => {this.setState({loading: false, redirect: true}) });

    },

    getInitialState() {
        return {
            loading: false,
            redirect: false
        }
    },

    componentDidMount() {
        document.body.scrollTop = 0;
        let archive = window.location.pathname.slice(1).split('/')[1];
        this.setState({ loading: true });

        if(!this.props.match.params.id) {
            this.props.fetchMonthNews(new Date())
                .then(res => this.setState({loading: false}))
                .catch(err => this.setState({loading: false, redirect: true}) );
        } else if(this.props.match.params.id && archive !== 'archive') {
            this.oneNews()
        } else if(this.props.match.params.id && archive == 'archive') {
            this.onLinkArchive();
        };
    },


    onLinkArchive() {
        let month = window.location.pathname.slice(1).split('/');
        month = month[month.length - 1];
        this.props.fetchArchiveMonth(month)
            .then(res =>  this.setState({loading: false}) )
            .catch(err => this.setState({loading: false, redirect: true}) );

    },


    render() {

        let newsCount;
        this.props.news ? newsCount = this.props.news.length > 1 : null;

        const monthNews = (
            this.props.news ? (
            this.props.news.map((news, i) =>
            <FlipMove appearAnimation="fade" key={news.id}>
            <div className="row" >
                 <div className="col-md-12">
                     <NewsOne
                         id={news.header}
                         header={news.description}
                         image={news.image}
                         text={!newsCount ? news.text : null}
                         date={news.date}
                         link={newsCount}
                         itsOne={!newsCount}
                     />
                 </div>
             </div></FlipMove>)
         ) : []
         );

        return (
            <div className="News">
                {this.state.loading ?
                    <MuiThemeProvider>
                        <div style={{ width: '100%', height: '100vh', textAlign: 'center', marginTop: '-200px' }}>
                            <CircularProgress
                                innerStyle={style.loader}
                                color="#957B5F"/>
                        </div>
                    </MuiThemeProvider>: (
                    (!this.state.redirect ? <MainBlock
                        oneNews={this.oneNews}
                        monthNews={monthNews}
                    /> : <Redirect to='/404' />)
                )}
            </div>
        );
    }
});

function mapStateToProps(state) {
    return {
        news: state.projects.news
    }
};

export default connect(mapStateToProps, { fetchMonthNews, fetchOneNews, fetchArchiveMonth })(News);