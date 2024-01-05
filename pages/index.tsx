import React from 'react';
import { AlertBox } from '../src';

const Home: React.FC = () => {
  return (
    <div>
      <h1>Hello Next.js</h1>
      <AlertBox message="This is an alert box!" />
    </div>
  );
};

export default Home;