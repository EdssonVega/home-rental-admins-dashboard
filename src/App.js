import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import LoginPage from './presentation/pages/loginPage.jsx';
import HomesListPage from './presentation/pages/homesListPage.jsx';
import HomeDetailPage from './presentation/pages/homeDetailPage.jsx';

function App() {
  return (
    <Router >
      <Routes>
        <Route path = "/" element={<LoginPage />} />
        <Route path='/homes' element={<HomesListPage />}/>
        <Route path='/homes/:id' element={<HomeDetailPage />} />
      </Routes>
    </Router>
    
  );
}

export default App;
