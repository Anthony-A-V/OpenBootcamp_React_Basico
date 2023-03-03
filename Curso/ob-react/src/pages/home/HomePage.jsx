import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = ({ logged }) => {
  const navigate = useNavigate();

  const navigateProps = (path) => {
    navigate(
      {
        pathname: path,
        search: '?online=true', // Query Params
      },
      {
        state: {
          online: true,
        },
      },
    );
  };

  const goBack = () => {
    navigate(-1);
  };

  const redirect = () => {
    if (!logged) {
      alert('You must be logged in. Redirecting to login...');
    }
    navigate('/profile');
  };

  const goForward = () => {
    navigate(1);
  };
  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={() => navigateProps('/online-state')}>
        Go To Page with State / Query Params
      </button>
      <button onClick={redirect}>Go To Profile</button>
      {/* <button onClick={goBack}>Go Back</button>
      <button onClick={goForward}>Go Forward</button> */}
    </div>
  );
};

export default HomePage;
