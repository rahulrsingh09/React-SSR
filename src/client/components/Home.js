import React from 'react';

const Home = () => {
    return (
        <React.Fragment>
            <div> I am the Home Component </div>
            <button onClick={() => console.log('pressed')}>Click Me</button>
        </React.Fragment>
    )
}

export default Home;