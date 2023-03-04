import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import NotFoundPage from './pages/404/NotFoundPage';
import LoginPage from './pages/auth/LoginPage';
import DashBoardPage from './pages/dashboard/DashBoardPage';

function AppRoutingOne() {
  // TODO Change to value from sessionStorage (or something dinamic)
  let loggedIn = false;

  return (
    <div>
      <Router>
        {/* Routes */}
        <Routes>
          {/* Redirecctions to protect our routes */}
          <Route
            path="/"
            element={loggedIn ? <Navigate to="/dashboard" /> : <Navigate to="/login" />}
          ></Route>

          {/* Login Route */}
          <Route path="/login" element={<LoginPage />} />
          {/* DashBoard Route */}
          <Route
            path="/dashboard"
            element={loggedIn ? <DashBoardPage /> : <Navigate to="/login" />}
          ></Route>

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default AppRoutingOne;
