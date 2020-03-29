import React, { useState } from 'react'
import { CREATE_EVENT } from '../actions/index'

import { Form, Button } from 'react-bootstrap';

const TaskForm = ({ state, dispatch }) => {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const handleCreate = e => {
    e.preventDefault();
    dispatch({
      type: CREATE_EVENT,
      title,
      body
    })
    setTitle('')
    setBody('')
  }

  const unCreatable = title === '' || body === ''

  return (
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
  )
}

export default TaskForm