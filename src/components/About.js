import React from 'react'
import '../App.css'

function About() {
    return (
        <div className='about'>
            <img src='https://i2.wp.com/airlinkflight.org/wp-content/uploads/2019/02/male-placeholder-image.jpeg?ssl=1' className='about-image' style={{width: "200px", height: "200px"}}></img>
            <h3>My name is Jacob VanOpdorp</h3>
            <h4>I'm from Littleton, Colorado</h4>
            <p className='bio'>I love to shoot nature photography, which includes landscapes, wildlife, and even astrophotography. I graduated from Dakota Ridge High School in 2021, and will be attending RMCAD (Rocky Mountain College of Art and Design) for the next four years to expand my education in photography. I love photography because it allows me to freeze a moment in time and allows me to create something unique. As the great Ansel Adams said, "You don't take a photograph, you create it." Lots of people assume that you just take a picture, when in reality you create it by using the different settings in the camera, and further make it unique by making edits. No two photos are the same. There may be photos that are of the same subject, in the same location, or even taken at the same time. But there will always be a difference since the photographers have different intentions or visions. Photography allows me to tell stories and to capture special moments on special days. That is why I love photography.</p>
        </div>
    );
}

export default About