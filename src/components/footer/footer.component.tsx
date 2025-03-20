import './footer.style.css'
import {FaGithub, FaLinkedin} from "react-icons/fa6";
export const Footer = () => {
  return (
    <div className='footer'>
      <div className='sign'>Created by Dominik Boczkowski (MsAfro12)</div>
      <div className='about'><a>About Me</a></div>
      <div className='socials'>
        <a><FaLinkedin/></a>
        <a><FaGithub/></a>
      </div>
    </div>
  )
}
