import { Quotes } from './components/Quotes'
import CreateQuote from './components/CreateQuote'
import { Image } from './components/Image'

function App() {
  return (
    <div className="App">
      <Quotes />
      <Image />
      <CreateQuote />
    </div>
  );
}

export default App;
