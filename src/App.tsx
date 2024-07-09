import { useState } from 'react';
import './App.css';
import Header from './Component/Header';
import SearchWord from './Page/SearchWord';
import Random from './Page/Random';

function App() {
  const [page, setpage] = useState<string>('searchWord')
  return (
    <div className="App">
      <Header setpage={setpage} />
      {page === 'searchWord' && <SearchWord />}
      {page === 'random' && <Random />}
    </div>
  );
}

export default App;
