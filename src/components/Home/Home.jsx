import guggle from '../../assets/guggle.png';
import GreyButton from '../GreyButton/GreyButton';
import TextButton from '../TextButton/TextButton';
import SearchBlock from '../SearchBlock/SearchBlock';

const Home = (props) => {
  const greyButton = props.greyButtons.map(
    (name, key) => (<GreyButton key={key} name={name} />)
  );
  const langButton = props.langButtons.map(
    (name, key) => (<TextButton key={key} name={name} classSect="lang" />)
  );

  return (
    <main className="googleContainer">
      <img src={guggle} alt="Guggle" className="logoImg" />

      <SearchBlock />

      <div className="search-buttons">
        {greyButton}
      </div>

      <div className="languages">
        <span>Guggle ofered in:</span>
        {langButton}
      </div>

    </main>
  );
};

export default Home;