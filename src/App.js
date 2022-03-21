import logo from './logo.svg';
import './App.css';

import { Footer, Blog, Possibility, Feature, WHATGPT3, Header} from './containers';
import { CTA, Brand, Navbar } from './components';

function App() {
  return (
    <div className="App">
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WHATGPT3 />
      <Possibility />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
