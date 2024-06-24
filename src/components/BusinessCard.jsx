/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import About from "./About"
import Header from "./Header"
import Footer from "./Footer"
//import defaultPhoto from "../assets/pexels-akaluidi-4296296.jpg"
//Images from Pexel.com original image names can be found in the file names in imageHelper.js file
import images from "./imageHelper.js"

const BusinessCard = (
    {name='Jornathan Smithsonian', 
     jobTitle='Frontend Developer', 
     website='weareallawesomeespJS.com',
     photo=null,
     theme='dark',
     linkedin=true}) => {

    //Some default lorem ipsum pasages for the About section    
    const interests = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
    const about = "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. "

    //Available themes and their styling to be added as Tailwind classes
    const themes = {
        dark: 'bg-gray-900 text-gray-100',
        light:'bg-gray-100 text-gray-900'
    }

    return (
        <div className='bgCardbase bg-gray-800 mx-auto mb-4 p-16'>
            <div className={`bgCard mx-auto text-gray-100 rounded-lg ${themes[theme]}`}>
                <div className="image-container mx-auto rounded-t-lg">
                    <img src={photo? photo : images[Math.floor(Math.random() * images.length)]} alt="Headshot Image of..." className="center-cropped" />
                </div>
                <Header name={name} jobTitle={jobTitle} website={website} linkedin={linkedin}/>
                <About interests={interests} about={about}/>
                <Footer theme={theme} linkedin={linkedin}/>
            </div>
        </div>
    )
}

export default BusinessCard
