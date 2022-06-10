import guggle from '../../assets/guggle.png';
import search from '../../assets/search.svg';
import micro from '../../assets/micro.svg';
import GreyButton from '../GreyButton/GreyButton';

const Home = (props) => {
  return (
    <main className="googleContainer">
      <img src={guggle} alt="Guggle" class="logoImg" />

      <div class="inputContainer">
        <img src={search} alt="search" class="search-icon" />
        <input type="text" class="input-search" />
        <img src={micro} alt="Micro" class="micro-icon" />
      </div>

      <div class="search-buttons">
      <GreyButton name="Guggle Search" />
        <button>Guggle Search</button>
      <GreyButton name="Aim Filin Luki" />
        <button>Aim Filin Luki</button>
      </div>

      <div class="languages">
        <span>Guggle ofered in:</span>
        <a href="#">Españó</a>
        <a href="#">valencià</a>
        <a href="#">galego</a>
        <a href="#">euskara</a>
      </div>

    </main>
  );
};

export default Home;