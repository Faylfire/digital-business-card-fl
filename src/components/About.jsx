// eslint-disable-next-line no-unused-vars
import React from 'react';

const About = ({about=null, interests=null}) => {

    const placeholdAbout = 'On a journey to understanding a human create world that is often at odds with our fundamental biology. Often reflective, but that also comes with a possibly unrealistic expectation that others would be equally reflective.'

    const placeholdInterests = 'Data assisted decision making. Open Education and the possibilities of safely developed AI and AGI.'

    return (
        <div className="text-left p-8 my-2">
            <h2 className="text-md font-bold mb-1">About</h2>
            <p className="text-sm">{about? about:placeholdAbout}</p>
            <br />
            <h2 className="text-md font-bold mb-1">Interests</h2>
            <p className="text-sm">{interests? interests:placeholdInterests}</p>
        </div>
    )
}

export default About