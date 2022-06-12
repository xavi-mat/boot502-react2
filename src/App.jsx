import Header from './components/Header/Header';
import Home from './components/Home/Home';

const greyButtons = ['Guggle Search', 'Aim Filin Luki'];
const langButtons = ['Ejpañó', 'valencià', 'galego', 'euskara'];
const leftButtons = ['About', 'GuggleChop'];
const rightButtons = ['Gemeil', 'Imeiches'];

function App() {
  return (
    <>
     <Header leftButtons={leftButtons} rightButtons={rightButtons} />
     <Home greyButtons={greyButtons} langButtons={langButtons} />
    </>
  );
}

export default App;
