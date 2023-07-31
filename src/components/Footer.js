import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={classes.footer_title}>
      <h1>The Generics</h1>
      <ul>
        <li>
          <img src="https://prasadyash2411.github.io/ecom-website/img/6260efc8fc9a9002669d2f4ad9956cc0.jpg" />
        </li>
        <li>
          <img src="https://prasadyash2411.github.io/ecom-website/img/Spotify%20Logo.png" />
        </li>
        <li>
          <img src="https://prasadyash2411.github.io/ecom-website/img/Facebook%20Logo.png" />
        </li>
      </ul>
    </div>
  );
};

export default Footer;
