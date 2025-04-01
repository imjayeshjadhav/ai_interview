import Agent from '@/components/Agent';
import React from 'react';

const Interview = () => {
  return (
    <>
      <h3>Interview Generation</h3>
      <Agent userName="User" userId="user1" type="generate" />
    </>
  );
};

export default Interview;
