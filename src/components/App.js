import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Card, Form, Button } from 'react-bootstrap';

import Nav from './Nav'

const App = () => {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const handleCreate = () => {

  }

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
                <Button type="submit" variant="outline-primary" size="md" style={{ width: '100%' }} onClick={handleCreate}>Primary</Button>
              </div>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}

export default App;
