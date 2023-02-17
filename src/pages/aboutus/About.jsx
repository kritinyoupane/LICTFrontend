import React from 'react'
import "../aboutus/About.scss"
import Navbar from '../../Components/navbar/Navbar'
const About = () => {
  return (
    <div className='about'>
      <Navbar/>
        <div className="aboutContainer">
            <div className="content">
                <h1>TextGPT: Finding Question Similarity from reference Database</h1>
                <div className="body">
                <p>We’ve trained a model called ChatGPT which interacts in a conversational way. The dialogue format makes it possible for ChatGPT to answer followup questions, admit its mistakes, challenge incorrect premises, and reject inappropriate requests. ChatGPT is a sibling model to InstructGPT, which is trained to follow an instruction in a prompt and provide a detailed response.</p>
                </div>                
            </div>
            <div className="right">
            <img
                src="https://smartlinks.pt/wp-content/uploads/2022/11/Adobestock_378897598-1024x683.jpg"
                alt=""
                className="itemImg"
              />
            </div>
        </div>
    </div>
  )
}

export default About