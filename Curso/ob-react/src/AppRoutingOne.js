import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

import HomePage from './pages/home/HomePage';
import NotFoundPage from './pages/404/NotFoundPage';
import AboutPage from './pages/about-faqs/AboutPage';
import ProfilePage from './pages/profile/ProfilePage';
import TasksPage from './pages/tasks/TasksPage';
import TaskDetailPage from './pages/tasks/TaskDetailPage';

function AppRoutingOne() {
  return (
    <div className="App">
      <Router>
        <div>
          <aside>
            <Link to="/"> | HOME | </Link>
            <Link to="/about"> | ABOUT | </Link>
            <Link to="/faqs"> | FAQS | </Link>
            <Link to="/una404"> | Not Existing Route | </Link>
          </aside>

          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/faqs" element={<AboutPage />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/tasks" element={<TasksPage />} />
              <Route path="/task/:id" element={<TaskDetailPage />} />

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
