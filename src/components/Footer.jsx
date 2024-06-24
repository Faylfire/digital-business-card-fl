/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';


//twitter, facebook, instagram, linkedin, discord icons from ReactIcons https://react-icons.github.io/react-icons/
import { FaSquareTwitter } from "react-icons/fa6"; //<FaSquareTwitter />
import { FaFacebookSquare } from "react-icons/fa"; //<FaFacebookSquare />
import { FaSquareInstagram } from "react-icons/fa6"; //<FaSquareInstagram />
import { FaLinkedin } from "react-icons/fa6"; //<FaLinkedin />
import { FaDiscord } from "react-icons/fa6"; //<FaDiscord />


const Footer = ({theme='dark', linkedin=true}) => {

    //Tailwind Styles for hover effect making the icons enlarge on hover
    const hoverLarge = "transform transition-transform duration-200 hover:scale-125 cursor-pointer"
    //Styling for available themes
    const themes = {
        dark: 'bg-black',
        light: 'bg-gray-400'
    }

    return (
        <div className={`px-8 py-4 rounded-b-lg ${themes[theme]}`}>
            <div className='flex justify-around text-3xl text-gray-600'>
                <div className={hoverLarge}><a target="_blank" rel='noopener' href="https://x.com/"><FaSquareTwitter /></a></div>
                <div className={hoverLarge}><a target="_blank" rel='noopener' href="https://www.facebook.com/"><FaFacebookSquare /></a></div>
                <div className={hoverLarge}><a target="_blank" rel='noopener' href="https://www.instagram.com/"><FaSquareInstagram /></a></div>
                {linkedin? <></>:<div className={hoverLarge}><a target="_blank" rel='noopener' href="https://www.linkedin.com/"><FaLinkedin /></a></div>}
                <div className={hoverLarge}><a target="_blank" rel='noopener' href="https://discord.com/"><FaDiscord /></a></div>
            </div>
        </div>
    )
}

export default Footer