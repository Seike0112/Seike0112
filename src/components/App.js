import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';

import Nav from './Nav'

const App = () => {
  return (
    <>
      <Nav />
      <div className="container">
        <Card>
          <Card.Body>test text</Card.Body>
        </Card>
      </div>
    </>
  );
}

export default App;
