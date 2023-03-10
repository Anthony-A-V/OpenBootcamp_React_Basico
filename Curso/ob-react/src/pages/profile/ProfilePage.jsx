import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProfilePage = ({ user }) => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  const goForward = () => {
    navigate(1);
  };
  return (
    <div>
      <h1>Your Profile</h1>
      <button onClick={() => navigate('/tasks')}>Tasks</button>
      <button onClick={goBack}>Go Back</button>
      <button onClick={goForward}>Go Forward</button>
    </div>
  );
};

export default ProfilePage;
