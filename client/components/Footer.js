import '../styles/Footer.sass';

import { Link } from 'react-router-dom';
import MediaQuery from 'react-responsive';

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
            message: ''
        }
    },

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    },

    onSubmit(e) {
        console.log(this.state)
    },

    socialClick() {
        this.setState({
            redirect: true
        })
    },


    render() {
        return (
            <footer className="Footer">
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
                                        <input type="text" name="email"  placeholder="E-mail..." value={this.state.email} onChange={this.onChange}/>
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
                                        <input type="text" name="email"  placeholder="E-mail..." value={this.state.email} onChange={this.onChange}/>
                                    </div>
                                    <div className="area">
                                        <textarea type="text" name="message"  placeholder="Сообщение..." value={this.state.message} onChange={this.onChange}/>
                                    </div>
                                </div>
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

export default Footer;