import React, { useContext } from 'react'
import { DELETE_EVENT } from '../actions/index'
import AppContext from '../contexts/AppContext'
import toastr from 'toastr'

import { Col, Card, Button } from 'react-bootstrap';

const Task = ({ event }) => {
  const { dispatch } = useContext(AppContext)
  const id = event.id

  const handleDelte = () => {
    const result = window.confirm('このイベントを削除しますか？')
    if (result) dispatch({
      type: DELETE_EVENT, id
    })
    toastr.options = {
      positionClass: 'toast-top-full-width',
      hideDuration: 300,
      timeOut: 4000
    }
    toastr.clear()
    setTimeout(() => toastr.error('タスクを削除しました！'), 100)
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
