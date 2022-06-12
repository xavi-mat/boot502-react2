import app from '../../assets/apps.svg';
import TextButton from '../TextButton/TextButton';

const Header = (props) => {
  return (
    <header>
      <div>
        <TextButton name="About Guggle" />
        <TextButton name="Chop" />
      </div>
      <div className="header-right">
        <TextButton name="Gemeil" />
        <TextButton name="Imeiches" />
        <a href="/" className="appsButtonContainer">
          <img src={app} alt="Guggle aps" className="appsButton" />
        </a>
        <a href="/" className="loginButton">Sain in</a>
      </div>
    </header>
  );
};

export default Header;