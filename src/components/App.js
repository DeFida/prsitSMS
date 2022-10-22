import { Routes, Route} from 'react-router';
import '../styles/App.css';
import Main from './Main';

import { api } from '../utils/constants'

function App() {

  function login(login, password) {
    return api.login(login, password)
  }

  return (
    <div className="app">
      <Routes>
        <Route path='/' exact element={<Main login={login} />} />
      </Routes>
    </div>
  );
}

export default App;
