import FlipMove from 'react-flip-move';

const style = {
   icon: {
       fontSize: '30vw',
       color: 'lightgrey',
       display: 'table-cell',
       verticalAlign: 'middle',
       zIndex: '111'

   },
    div: {
        backgroundColor: 'rgba(43, 43, 43, 1)',
        height: '100vh',
        width: '100%',
        display: 'table',
        textAlign: 'center',
        verticalAlign: 'middle'

    },
    header: {
        fontSize: '10vw',
        color: '#957B5F',
        margin: 0,
        verticalAlign: 'middle',
        display: 'table-cell',
        zIndex: '0',
        position: 'absolute',
        width: '100%',
        top: '40vh',
        left: '0vw'
    },
    wertyga: {
        width: '45%',
    }
};

const SocialPage = createReactClass ({
    render() {
        return (
            <FlipMove appearAnimation='fade'>
                <div style={style.div}>
                    <h1 style={style.header}>Social Page</h1>
                </div>
            </FlipMove>

        );
    }
});

export default SocialPage;