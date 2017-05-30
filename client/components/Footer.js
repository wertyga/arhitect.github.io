import '../styles/Footer.sass';

import { Link } from 'react-router-dom';
import MediaQuery from 'react-responsive';
import { connect } from 'react-redux';

import { sendMail } from '../actions/actions';

const style = {
    form: {
        display: 'block'
    },
    fields: {
        marginBottom: '5px',
        width: '100%'
    }
};

const Footer = createReactClass ({

    getInitialState() {
        return {
            name: '',
            email: '',
            message: '',
            sendmail: false,
            error: {
                email: ''
            }

        }
    },

    componentDidMount() {
        this.setState({ error: {} })
    },

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
        if(e.target.name === 'email') { this.setState({error: { email: '' }}); }
    },

    sendEmailFunc(sendObj) {
        return fetch('/send-email', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                from: sendObj.email,
                to: 'wertyga18@gmail.com',
                subject: 'E-mail from Architect-site',
                message: sendObj.message || 'No message'

            })
        });
    },

    fetchEmail(sendObj) {
        this.props.sendMail(sendObj).then(res => {
            if(res === false) {
                this.setState({
                    error: {
                        email: 'Enter an E-mail',
                    }
                });
            } else {
                this.setState({
                    sendmail: true
                });
            };
        });
    },

    onSubmit(e) {
        let sendObj = this.state;
        let emailReg = /^[a-zA-Z0-9.!#$%&’*+/=?^_{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if(!sendObj.email || !emailReg.test(sendObj.email)) {
            this.setState({
                error: {
                    email: 'Enter an E-mail',
                }
            });
            return;
        };

        this.sendEmailFunc(sendObj).then(res => {
           if(!res.ok) {
               this.setState({
                   error: {
                       global: 'E-mail not sent, Sorry!'
                   }
               });
           } else {
               this.fetchEmail(sendObj);
           };
        })
    },

    socialClick() {
        this.setState({
            redirect: true
        })
    },

    backClick() {
        this.setState({
            name: '',
            email: '',
            message: '',
            sendmail: false,
            error: {
                email: '',
                global: ''
            }
        });
    },


    render() {

        const mail = (
            <div id="mail">
                <div className="modal">
                     { this.state.error.global && <p>{this.state.error.global}</p> }
                     { this.props.mailData && ( <p>Mail has been send from {this.props.mailData ? this.props.mailData.email : ''}</p> ) }
                    <div onClick={this.backClick}>OK</div>
                </div>
            </div>
        );

        return (
            <footer className="Footer">
                {(this.props.mailData && this.state.sendmail) && mail}
                {this.state.error.global && mail}
                <div className="container">

                    <div className="row">
                        <div className="col-md-4 col-md-offset-1">
                            <h4>Связаться:</h4>
                            <div className="phoneMail inline">
                                <tel>Тел.: (+495) 770 00 00</tel>
                                <p>E-mail: wertyga18@gmail.com</p>
                            </div>
                            <div className="address inline">
                                <p>ул. Арбат, 1</p>
                                <p>Москва, Россия</p>
                            </div>

                        </div>
                        <div className="col-md-5 col-md-offset-1">
                            <h4>Написать:</h4>

                            <MediaQuery maxWidth={448}>
                                <div className="form" style={style.form}>
                                    <div className="namePhone" style={style.fields}>
                                        <input type="text" name="name"  placeholder="Имя..." value={this.state.name} onChange={this.onChange}/>
                                        <input type="email" name="email"  placeholder="E-mail..." value={this.state.email} onChange={this.onChange}/>
                                        {this.state.error.email && <p>{this.state.error.email}</p>}
                                    </div>
                                    <div className="area" style={style.fields}>
                                        <textarea type="text" name="message"  placeholder="Сообщение..." value={this.state.message} onChange={this.onChange}/>
                                    </div>
                                </div>
                            </MediaQuery>
                            <MediaQuery minWidth={449}>
                                <div className="form" >
                                    <div className="namePhone">
                                        <input type="text" name="name"  placeholder="Имя..." value={this.state.name} onChange={this.onChange}/>
                                        <input type="email" name="email"  placeholder="E-mail..."  value={this.state.email} onChange={this.onChange}/>
                                    </div>
                                    <div className="area">
                                        <textarea type="text" name="message" placeholder="Сообщение..." value={this.state.message} onChange={this.onChange}/>
                                    </div>
                                </div>
                                {this.state.error.email && <p style={{ color: 'red' }}>{this.state.error.email}</p>}
                            </MediaQuery>

                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-5 col-md-offset-6">
                            <div className="icons">
                                <Link to="/social"><i className="fa fa-vk" ></i></Link>
                                <Link to="/social"><i className="fa fa-facebook"></i></Link>
                                <Link to="/social"><i className="fa fa-twitter"></i></Link>
                            </div>
                            <div className="submit">
                                <button onClick={this.onSubmit}>Отправить</button>
                            </div>

                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-4 col-md-offset-1">
                            <div className="copyright">
                                <p>© 2023 Архитектурная компания «Микеланджело».
                                    Сайт создан на wertyga.com</p>
                            </div>
                        </div>
                    </div>

                </div>
            </footer>
        );
    }
});

function mapStateToProps(state) {
    return {
        mailData: state.projects.sendMail
    }
};

export default connect(mapStateToProps, { sendMail })(Footer);