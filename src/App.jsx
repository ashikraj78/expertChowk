import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import LanguageSelection from './pages/LanguageSelection';

function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-slate-800 font-bold p-4">
      <h1 className="text-3xl mb-4">hello expert chowk</h1>
      <Link to="/language-selection" className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-opacity-90 transition-colors">
        Select Language
      </Link>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/language-selection" element={<LanguageSelection />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
