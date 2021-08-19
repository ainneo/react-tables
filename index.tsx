import React from 'react';
import { render } from 'react-dom';
import Table from './Table';
import data from './data';
import './style.css';

const App = () => {
  return (
    <div>
      <Table columns={data.columns} rows={data.rows} />
    </div>
  );
};

render(<App />, document.getElementById('root'));
