import app from '../../assets/apps.svg';
import TextButton from '../TextButton/TextButton';

const Header = (props) => {
  return (
    <header>
      <div>
        <TextButton name="About Guggle" />
        <TextButton name="Chop" />
      </div>
      <div class="header-right">
        <TextButton name="Gemeil" />
        <TextButton name="Imeiches" />
        <a href="#" class="appsButtonContainer">
          <img src={app} alt="Guggle aps" class="appsButton" />
        </a>
        <a href="#" class="loginButton">Sain in</a>
      </div>
    </header>
  );
};

export default Header;