import MediaQuery from 'react-responsive';
import './Slider.sass';

const Slider = createReactClass ({
    getInitialState() {
        return {
            value: 0
        }
    },

    onClick(e) {
        let value = this.state.value;
        let count = this.props.imgs.length;
        if(e.target.classList.contains('leftArrow')) {
            value--;
            if(value < 0) {
                setTimeout(() => {
                    this.setState({
                        value: count - 1
                    })
                }, 1000)

            } else {
                this.setState({
                    value: value
                });
            }
        };

        if(e.target.classList.contains('rightArrow')) {
            value++;
            if(value > (count - 1)) {
                this.setState({
                    value: 0
                })
            } else {
                this.setState({
                    value: value
                });
            }
        };
    },

    render() {
        const imgs = this.props.imgs ? this.props.imgs : [];
        return (
            <div>
                <MediaQuery maxWidth={848}>
                    <div className="Slider" style={{ height: '55vw' }}>
                        {imgs.map((img, indx) => <img src={img} alt={indx} key={indx} style={{transition: 'all 1s', opacity: this.state.value == indx ? 1 : 0}}/>)}

                        <div className="leftArrow" onClick={this.onClick}>
                            <i className="fa fa-angle-left" name="name"></i>
                        </div>
                        <div className="rightArrow" onClick={this.onClick}>
                            <i className="fa fa-angle-right" name="name"></i>
                        </div>
                    </div>
                </MediaQuery>
                <MediaQuery minWidth={849}>
                    <div className="Slider" style={{ height: '41vw' }}>
                        {imgs.map((img, indx) => <img src={img} alt={indx} key={indx} style={{transition: 'all 1s', opacity: this.state.value == indx ? 1 : 0}}/>)}

                        <div className="leftArrow" onClick={this.onClick}>
                            <i className="fa fa-angle-left" name="name"></i>
                        </div>
                        <div className="rightArrow" onClick={this.onClick}>
                            <i className="fa fa-angle-right" name="name"></i>
                        </div>
                    </div>
                </MediaQuery>
            </div>



        );
    }
});

export default Slider;


