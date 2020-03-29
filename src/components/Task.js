import React from 'react'
import { DELETE_EVENT } from '../actions/index'

import { Col, Card, Button } from 'react-bootstrap';

const Task = ({ event, dispatch }) => {
  const id = event.id

  const handleDelte = () => {
    const result = window.confirm('このイベントを削除しますか？')
    if (result) dispatch({
      type: DELETE_EVENT, id
    })
  }

  return (
    <Col xs={6} md={6} style={{ paddingTop: '2rem' }}>
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
}

export default Task;
