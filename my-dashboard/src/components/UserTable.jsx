import React from 'react';
import { Table } from 'antd';

const UserTable = () => {
  const dataSource = [
    {
      key: '1',
      name: 'John Brown',
      status: 'Pending',
    },
    {
      key: '2',
      name: 'Jim Green',
      status: 'Completed',
    },
    // Add more data as needed
  ];

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (text) => (
        <span className={`status-${text.toLowerCase()}`}>{text}</span>
      ),
    },
  ];

  return <Table dataSource={dataSource} columns={columns} />;
};

export default UserTable;
