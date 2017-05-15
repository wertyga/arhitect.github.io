const AboutOne = createReactClass({
    render() {
        return (
            <div className="row AboutOne">
                <div className="col-md-offset-1 col-md-3">
                        <img src={this.props.img} alt={this.props.name}/>
                </div>
                   <div className="col-md-5 col-md-offset-1">
                        <div className="descrBlock">
                            <h5>{this.props.role}</h5>
                            <h2>{this.props.name}</h2>
                            <div className="col-md-8 no-padding">
                                <p className="p">{this.props.text}</p>
                            </div>

                            <p >{this.props.email}</p>
                        </div>
                   </div>

            </div>
        );
    }
});

export default AboutOne;