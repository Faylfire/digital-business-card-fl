/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { FaEnvelope } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6"; 

const Header = ({name, jobTitle, website, linkedin=true}) => {


    //Styling Logic----------------------------------------------------------------
    //Added to enable a scale up on hover effect
    const hoverLarge = " transform transition-transform duration-200 hover:scale-110"
    //E-mail and linkedin buttons
    let emailStyles = 'bg-gray-200 text-gray-800 rounded-md px-6 py-1 text-sm hover:bg-gray-400 border border-gray-400'
    const linkedinStyles = 'bg-blue-600 text-gray-200 rounded-md px-4 py-1 text-sm hover:bg-blue-700'
    //If linkedin button not needed set e-mail button to take full width of the card
    emailStyles = !linkedin? emailStyles.concat('block w-full') : emailStyles

    return (
        <div className=" mt-6 px-8">
            <h2 className="text-xl font-bold">{name}</h2>
            <p className="text-md text-orange-400">{jobTitle}</p>
            <p className="text-sm mt-2">{website}</p>
            <div className='flex gap-4 justify-between mt-4'>
                <button className={emailStyles.concat(hoverLarge)}><div className='flex justify-center items-center'><FaEnvelope /><span className="mx-2">Email</span></div></button>
                {linkedin? <button className={linkedinStyles.concat(hoverLarge)}><div className='flex justify-center items-center'><FaLinkedin /><span className="mx-2">Linkedin</span></div></button>: <></>}
            </div>
        </div>
    )
}

export default Header