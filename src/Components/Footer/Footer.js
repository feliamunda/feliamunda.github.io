import './Footer.scss'

import Social from '../Social/Social'

function Footer(props) {
    return (
      <footer id="footer" className="container-fluid bg-dark text-light">
        <div className="row text-center">
          <div className="col-12 col-sm-6">
          <Social className="social p-0 my-auto d-lg-none" socials={props.socials} mapLinks={props.mapLinks}/>
          </div>
          <div className="col-12 col-sm-6 text-sm-end justify-content-center d-flex flex-column">
            <em className="d-block">Ing.Felicie Amundaray</em>
            <phone className="d-block"><a href="tel:+584142450223">+58 414-2450223</a></phone>
          </div>
        </div>
      </footer>
    );
  }
  
export default Footer;