import { AiOutlineFile } from 'react-icons/ai';
import { FaSearch } from 'react-icons/fa';
import "./About.scss"

const About = () => {
  return (
    <div className ="home">
      <div className="homecontainer">
        <div className="charts">
          <div className="aboutUs">
          <AiOutlineFile className="file" size={200}/>
          <FaSearch className="searching" size={70}/>
            <div className="nav">
            </div>
            <div className="about">
              <div className="title">Q Similarity</div>
              <div className="details">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut nulla tortor. Maecenas elementum odio sed velit maximus eleifend. Vivamus porttitor vestibulum nulla, ac pulvinar dolor consectetur vel. Sed ullamcorper metus nisl, non iaculis orci ultrices a. Fusce bibendum magna ut diam pharetra malesuada. Suspendisse ac lacus velit. Integer eget dui vel magna fringilla mattis. Etiam semper purus vel dolor interdum, ut bibendum tortor varius.Aliquam euismod, lacus ut dapibus dictum, ipsum ex rhoncus sem, sit amet facilisis sapien enim quis velit. Duis id euismod velit, in malesuada justo. Curabitur convallis mi vel augue molestie vestibulum.
              </div>
              <div className="buttons">
                <button className="login-button">Login</button>
                <button className="signin-button">Signin</button>
              </div>
            </div>
          </div>
          <div className="decor">
            <obj1></obj1>
            <obj2></obj2>
            <obj3></obj3>
            <obj4></obj4>
            <obj5></obj5>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About

