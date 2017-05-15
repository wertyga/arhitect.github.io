import FlipMove from 'react-flip-move';


const style = {

    div: {
        backgroundColor: 'rgba(43, 43, 43, 1)',
        height: '100vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center'

    },
    header: {
        fontSize: '10vw',
        color: '#957B5F',
        margin: 0,
        width: '100%'
    }
};

const NotFoundPage = createReactClass ({
    render() {
        return (
            <FlipMove appearAnimation='fade'>
                <div style={style.div}>

                    <h1 style={style.header}>404<br/>PAGE NOT FOUND</h1>

                </div>
            </FlipMove>

        );
    }
});

export default NotFoundPage;