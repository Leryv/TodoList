import React from 'react';
import { Card } from 'antd';
import CreateModal from '../Todo/Modal/CreateModal';
import TableComponent from '../Todo/TableComponent';
function App() {
  return (
    <div className="App">
    <React.StrictMode>
        <Card title = "Todo list" style={{marginTop: 50}}>
          <CreateModal />
          <TableComponent />
        </Card>
    </React.StrictMode>


    </div>
  );
}

export default App;
