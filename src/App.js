import './App.css';
const api = {
  key: '2b810a1878c74d39c25cb97d2d29f529',
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {
  return (
    <div className="app">
      <main>
        <div className="searchbox">
          <input
            type='text'
            className='search-bar'
            placeholder='Search ...'
          />
          
        
        </div>  
      </main>
      
    </div>
  );
}

export default App;
