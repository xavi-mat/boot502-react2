import app from '../../assets/apps.svg';
import TextButton from '../TextButton/TextButton';

const Header = (props) => {
  return (
    <header>
      <div>
        <TextButton name="About Guggle" classSect="header" />
        <TextButton name="Chop" classSect="header" />
      </div>
      <div className="header-right">
        <TextButton name="Gemeil" classSect="header" />
        <TextButton name="Imeiches" classSect="header" />
        <a href="/" className="appsButtonContainer">
          <img src={app} alt="Guggle aps" className="appsButton" />
        </a>
        <a href="/" className="loginButton">Sain in</a>
      </div>
    </header>
  );
};

export default Header;