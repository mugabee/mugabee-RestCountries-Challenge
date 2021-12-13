import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import SignUp from './pages/Signup';
import Index from './pages/Index';
import RequiredAuth from './components/RequiredAuth';
import Planning from './pages/Planning';
import Visited from './pages/Visited';
import Layout from './layouts/Layout';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />

          <Route
            element={
              <RequiredAuth>
                <Layout />
              </RequiredAuth>
            }
          >
            <Route path="/" element={<Index />} />
            <Route path="/planning" element={<Planning />} />
            <Route path="/visited" element={<Visited />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
