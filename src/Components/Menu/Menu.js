import './Menu.scss';

import Social from '../Social/Social'

function Menu(props) {
  const links_el = props.mapLinks(props.links);
  return (
    <nav className="menu navbar navbar-nav navbar-expand-lg sticky-top bg-dark">
      <div className="navbar-nav w-100 justify-content-between ">
        <Social className="social px-5 my-auto d-none d-lg-block" socials={props.socials} mapLinks={props.mapLinks}/>
        <ul className="links px-5 my-auto d-flex d-lg-block justify-content-between">
          {links_el}
        </ul>
      </div>     
    </nav>
  );
}

export default Menu;
