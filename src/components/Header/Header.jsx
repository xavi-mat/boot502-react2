import app from '../../assets/apps.svg';
import TextButton from '../TextButton/TextButton';

const Header = (props) => {
  const leftButton = props.leftButtons.map(
    (name, key) => (<TextButton key={key} name={name} classSect="header" />)
  );
  const rightButton = props.rightButtons.map(
    (name, key) => (<TextButton key={key} name={name} classSect="header" />)
  );

  return (
    <header>
      <div>
        {leftButton}
      </div>
      <div className="header-right">
        {rightButton}
        <a href="/" className="appsButtonContainer">
          <img src={app} alt="Guggle aps" className="appsButton" />
        </a>
        <a href="/" className="loginButton">Sain in</a>
      </div>
    </header>
  );
};

export default Header;