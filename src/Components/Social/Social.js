import './Social.scss';

function Social(props) {
  const socials_el=props.mapLinks(props.socials, true)
  return (
    <ul className={props.className}>
      {socials_el}
    </ul>
  );
}

export default Social;
