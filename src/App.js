import GlobalStyle from './components/GlobalStyle';

import Nav from './components/Nav';
import AboutUs from './pages/AboutUs';

const App = () => {
  return (
    <div className='App'>
      <GlobalStyle />
      <Nav />
      <AboutUs />
    </div>
  );
};

export default App;
