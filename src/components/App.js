import React, { useState, useReducer } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Card, Form, Button, Row, Col } from 'react-bootstrap';
import Nav from './Nav'
import reducer from '../reducers'
import '../styleSheet/Task.css'

const App = () => {
  const [state, dispatch] = useReducer(reducer, [])
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const handleCreate = e => {
    e.preventDefault();
    dispatch({
      type: 'CREATE_EVENT',
      title,
      body
    })
    setTitle('')
    setBody('')
  }

  const unCreatable = title === '' || body === ''

  return (
    <>
      <Nav />
      <Container style={{ paddingTop: "2rem" }}>
        <Card style={{ width: '100%' }}>
          <Card.Body>
            <Form>
              <Form.Group controlId="TitleInput">
                <Form.Label>タスク-タイトル</Form.Label>
                <Form.Control type="text" value={title} placeholder="タイトルを入力してください。" onChange={e => { setTitle(e.target.value) }}></Form.Control>
              </Form.Group>
              <Form.Group controlId="BodyInput">
                <Form.Label>内容</Form.Label>
                <Form.Control as="textarea" value={body} rows="3" placeholder="内容を入力してください。" onChange={e => {
                  setBody(e.target.value)
                }}></Form.Control>
              </Form.Group>
              <div className="button-area">
                <Button type="submit" variant="outline-primary" size="md" style={{ width: '100%' }} onClick={handleCreate} disabled={unCreatable}>Primary</Button>
              </div>
            </Form>
          </Card.Body>
        </Card>
        <Row>
          {
            state.map((event, index) => {

              const id = event.id

              const handleDelte = () => {
                const result = window.confirm('このイベントを削除しますか？')
                if (result) dispatch({
                  type: 'DELETE_EVENT', id
                })
              }

              return (
                <Col xs={6} md={6} style={{ paddingTop: '1rem' }} key={index}>
                  <Card>
                    <Card.Header>
                      {event.title}
                    </Card.Header>
                    <Card.Body>
                      <Card.Text>タスク内容：
                        {event.body}</Card.Text>
                    </Card.Body>
                    <Card.Footer variant="flush">
                      <div className="task-bt-space">
                        タスクNo. {id}
                      </div>
                      <Button variant="outline-danger" size="sm" onClick={handleDelte}>削除</Button>{' '}
                    </Card.Footer>
                  </Card>
                </Col>
              )
            })
          }
        </Row>
      </Container>
    </>
  );
}

export default App;
