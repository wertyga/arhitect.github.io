import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import ProjectOne from './ProjectOne';
import CircularProgress from 'material-ui/CircularProgress'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { fetchProject } from '../actions/actions';

const style = {
    loader: {
        marginTop: '45vh'
    }
};

class Project extends React.Component {

    constructor() {
        super();
        this.state = {
            redirect: false,
            loading: false
        }
    };

    componentDidMount() {
        document.body.scrollTop = 0;
        this.setState({loading: true});
         if(this.props.match.params.id) {
             this.props.fetchProject(this.props.match.params.id)
                 .then(res => this.setState({ loading: false }) )
                 .catch(err => this.setState({ loading: false, redirect: true }));
         }
     };
    render() {
        return (
              <div>
                    {this.state.loading ?
                    <MuiThemeProvider>
                        <div style={{ width: '100%', height: '100vh', textAlign: 'center' }}>
                            <CircularProgress
                            innerStyle={style.loader}
                            color="#957B5F"/>
                         </div>
                    </MuiThemeProvider>: (
     (!this.state.redirect ? <ProjectOne project={this.props.project}/> : <Redirect to='/404' />)
)}
              </div>
        );
    }
};

//
function mapStateToProps(state) {
    return {
        project: state.projects
    }
};

export default connect(mapStateToProps, { fetchProject })(Project);