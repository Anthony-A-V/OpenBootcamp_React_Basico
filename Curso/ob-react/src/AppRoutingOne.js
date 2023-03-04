import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';

import HomePage from './pages/home/HomePage';
import NotFoundPage from './pages/404/NotFoundPage';
import AboutPage from './pages/about-faqs/AboutPage';
import ProfilePage from './pages/profile/ProfilePage';
import TasksPage from './pages/tasks/TasksPage';
import TaskDetailPage from './pages/tasks/TaskDetailPage';
import LoginPage from './pages/auth/LoginPage';
import { useEffect } from 'react';
import StatePage from './pages/home/StatePage';

function AppRoutingOne() {
  let logged = false;
  let taskList = [
    {
      id: 1,
      name: 'Task 1',
      description: 'My first task',
    },
    {
      id: 2,
      name: 'Task 2',
      description: 'My second task',
    },
  ];

  useEffect(() => {
    // eslint-disable-next-line
    logged = localStorage.getItem('credentials');
    console.log('User Logged?', logged);
  }, []);

  return (
    <div className="App">
      <Router>
        <div>
          <aside>
            <Link to="/"> | HOME | </Link>
            <Link to="/about"> | ABOUT | </Link>
            <Link to="/faqs"> | FAQS | </Link>
            <Link to="/task/1"> | Task 1 | </Link>
            <Link to="/task/2"> | Task 2 | </Link>
            <Link to="/any404"> | Not Existing Route | </Link>
            <Link
              onClick={logged && (() => alert('You are logged in. Redirecting to home...'))}
              to="/login"
            >
              | Login |{' '}
            </Link>
          </aside>

          <main>
            <Routes>
              <Route path="/" element={<HomePage logged={logged} />} />
              <Route path="/online-state" element={<StatePage />} />
              <Route
                path="/login"
                element={logged ? <Navigate replace to="/" /> : <LoginPage />}
              ></Route>
              <Route path="/about" element={<AboutPage />} />
              <Route path="/faqs" element={<AboutPage />} />
              <Route
                path="/profile"
                element={logged ? <ProfilePage /> : <Navigate replace to="/login" />}
              />
              <Route path="/tasks" element={<TasksPage />} />
              <Route path="/task/:id" element={<TaskDetailPage taskList={taskList} />} />
              {/* 404 - Page Not Found */}
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>
        </div>
      </Router>
    </div>
  );
}

export default AppRoutingOne;
