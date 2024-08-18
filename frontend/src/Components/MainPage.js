import React from 'react';
import { Link } from 'react-router-dom';

const MainPage = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Welcome to the Referral App</h1>
      <div style={{ marginTop: '30px' }}>
        <Link to="/get-referral">
          <button style={{ padding: '10px 20px', marginRight: '20px' }}>Get Referral</button>
        </Link>
        <Link to="/give-referral">
          <button style={{ padding: '10px 20px' }}>Give Referral</button>
        </Link>
      </div>
    </div>
  );
};

export default MainPage;
