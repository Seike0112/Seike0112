import React, { useReducer } from 'react';
import reducer from '../reducers'
import AppContext from '../contexts/AppContext'

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Card, Row } from 'react-bootstrap';
import '../styleSheet/Task.css'

import Nav from './Nav'
import TaskForm from './TaskForm'
import Task from './Task'


const App = () => {
  const [state, dispatch] = useReducer(reducer, [])

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <Nav />
      <Container style={{ paddingTop: "3rem" }}>
        <Card style={{ width: '100%' }}>
          <Card.Body>
            <TaskForm />
          </Card.Body>
        </Card>
        <Row>
          {
            state.map((event, index) => (<Task key={index} event={event} />))
          }
        </Row>
      </Container>
    </AppContext.Provider>
  );
}

export default App;
