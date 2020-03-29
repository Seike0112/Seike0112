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
  const initialState = {
    events: []
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <Nav />
      <div className="taskBg">
        <Container className="taskg" style={{ paddingTop: "3rem" }}>
          <Card style={{ width: '100%' }}>
            <Card.Body>
              <TaskForm />
            </Card.Body>
          </Card>
          <Row>
            {
              state.events.map((event, index) => (<Task key={index} event={event} />))
            }
          </Row>
        </Container>
      </div>
    </AppContext.Provider>
  );
}

export default App;
