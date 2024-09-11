import React from 'react';
import withSidebar from '../HOC/withSidebar';
import UserTable from '../components/UserTable';

const Dashboard = () => {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <UserTable />
    </div>
  );
};

export default withSidebar(Dashboard);
