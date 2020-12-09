import './App.css';
import Header from './Components/Header/Header';
import MainContent from './Components/MainContent/MainContent';
import Controls from './Components/Controls/Controls';

function App() {
  return (
    <div class="movie-page">
      <Header />
      <Controls />
      <MainContent />
    </div>
  );
}

export default App;
