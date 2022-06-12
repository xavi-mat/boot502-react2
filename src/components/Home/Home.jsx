import guggle from '../../assets/guggle.png';
import search from '../../assets/search.svg';
import micro from '../../assets/micro.svg';
import GreyButton from '../GreyButton/GreyButton';
import TextButton from '../TextButton/TextButton';

const Home = (props) => {
  return (
    <main className="googleContainer">
      <img src={guggle} alt="Guggle" className="logoImg" />

      <div className="inputContainer">
        <img src={search} alt="search" className="search-icon" />
        <input type="text" className="input-search" />
        <img src={micro} alt="Micro" className="micro-icon" />
      </div>

      <div className="search-buttons">
        <GreyButton name="Guggle Search" />
        <GreyButton name="Aim Filin Luki" />
      </div>

      <div className="languages">
        <span>Guggle ofered in:</span>
        <TextButton name="Españó" />
        <TextButton name="valencià" />
        <TextButton name="galego" />
        <TextButton name="euskara" />
      </div>

    </main>
  );
};

export default Home;