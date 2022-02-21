import React from 'react';
import { Card } from 'antd';
import CreateModal from '../Todo/Modal/CreateModal';
import TableComponent from '../Todo/TableComponent';
function App() {
  return (
    <div className="App">
      <Card title = "Todo list" style={{marginTop: 48}}>
        <CreateModal />
        <TableComponent />
      </Card>
    </div>
  );
}

export default App;
