import React from 'react';
import DataDisplay from './components/DataDisplay';

const page = () => {

  const initialFilter = 'all';

  return (
    <div>
      <h1 className='text-center'>81 000 čtenářů</h1>
      <div className='em text-center'>Češi, kteří čtou E15</div>
      <DataDisplay initialFilter={initialFilter} />
    </div>
  );
};

export default page;
