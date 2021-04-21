import './App.scss';

import {FaInstagram, FaLinkedin, FaGithub, FaGitlab, FaTwitter, FaFacebook} from 'react-icons/fa'

import Index from './Pages/Index/Index';
import Menu from './Components/Menu/Menu'
import Footer from './Components/Footer/Footer';

const socials = [
  { name:"Linkedin", content: <FaLinkedin></FaLinkedin>, link:"https://www.linkedin.com/in/felicie-amundaray" },
  { name:"Github", content: <FaGithub></FaGithub>, link:"http://github.com/feliamunda" },
  { name:"Gitlab", content: <FaGitlab></FaGitlab>, link:"http://gitlab.com/feliamunda" },
  { name:"Twitter", content: <FaTwitter></FaTwitter>, link:"http://twitter.com/feliamunda" },
  { name:"Facebook", content: <FaFacebook></FaFacebook>, link:"http://facebook.com/feliamunda" },
  { name:"Instagram", content: <FaInstagram></FaInstagram>, link:"http://instagram.com/feliamunda" }
]

const links = [
  { name:"Home", content: "Home", link:"#home" },
  { name:"About", content: "About Me", link:"#about" },
  { name:"Portfolio", content: "Portfolio", link:"#portfolio" },
  { name:"CV", content: "My CV", link:"#cv" }
]
function mapLinks(array, blank=false){
  if (blank)
    return array.map(el => <li className="nav-item d-inline-flex" key= {el.name}><a href={el.link} className="nav-link" target='_blank' rel='noreferrer' >{el.content}</a></li>)
  return array.map(el => <li className="nav-item d-inline-flex" key= {el.name}><a href={el.link} className="nav-link" >{ el.content}</a></li>)
}

function App() {
  return (
    <div className="app">
      <Menu socials={socials} links={links} mapLinks={mapLinks}></Menu>
      <Index></Index>
      <Footer socials={socials} mapLinks={mapLinks}></Footer>
    </div>
  );
}

export default App;
