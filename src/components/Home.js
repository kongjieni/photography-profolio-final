import React from 'react';
import './Home.css'
import CardContainer from './CardContainer'

const Home = () => {
    return (
        <>
            <div className="home-container">
                <video src='../video/final.mp4' autoPlay loop muted></video>
                <h1>Memories starts here</h1>
            </div>
            <CardContainer />
        </>
    );
}

export default Home;