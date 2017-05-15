
import { Link, Route } from 'react-router-dom';


import Project from './Project';
import UpperMenu from './UpperMenu';
import NotFoundPage from './NotFoundPage';



import Portfolio from './Portfolio';
import About from './About';
import News from './News/News';
import MiddleMain from './MiddleMain';
import SocialPage from './SocialPage';


import '../styles/App.sass';



const style = {
    appBar: {
        width: '65%',
        margin: '0 auto',
        boxShadow: 'none',
        backgroundColor: 'transparent',
        fontWeight: 'bold',
        marginTop: '40px'

    },
    link: {
        fontWeight: '600',
        color: '#957B5F',
        marginLeft: '20px',
        fontSize: '22px',
        letterSpacing: '1.5px'
    },
    right: {
        marginRight: '20px',
        marginTop: '16px'
    },
    header: {
        backgroundColor: 'transparent',
        position: 'absolute',
        width: '80%',
        top: 0,
        textAlign: 'center',
        boxShadow: 'none',
        paddingTop: '40px',
        zIndex: 100
    },
    title: {
        width: '30%'
    }
};

const ActiveLink = ({ to, label, exactActive }) => (
    <Route path={to} exact={exactActive} children={ ({ match }) => (
        <Link to={to} className={match ? 'item active' : 'item'}>{label}</Link>
    ) }/>
);



 const App = createReactClass ({

     componentDidMount() {
         document.body.scrollTop = 0
     },

    render() {
        return (
            <div>

                {(window.location.pathname !== '/social' && window.location.pathname !== '/404') ? <UpperMenu /> : null}

                <Route exact path="/" component={MiddleMain}/>
                <Route exact path="/404"  component={NotFoundPage}/>
                <Route exact path="/social" render={() => ( <SocialPage /> )}/>
                <Route exact path="/portfolio" component={Portfolio}/>
                <Route exact path="/about" component={About}/>
                <Route exact path="/news/:id" component={News}/>
                <Route exact path="/news/archive/:id" component={News}/>
                <Route exact path="/news" component={News}/>
                <Route exact path="/project/:id" component={Project}/>


            </div>






        );
    }
});
export default App

