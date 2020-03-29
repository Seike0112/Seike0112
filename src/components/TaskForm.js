import React, { useState, useContext } from 'react'
import { CREATE_EVENT } from '../actions/index'
import AppContext from '../contexts/AppContext'
import toastr from 'toastr'
import 'toastr/build/toastr.min.css'

import { Form, Button } from 'react-bootstrap';

const TaskForm = () => {
  const { dispatch } = useContext(AppContext)
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
    toastr.options = {
      positionClass: 'toast-top-full-width',
      hideDuration: 300,
      timeOut: 3000
    }
    toastr.clear()
    setTimeout(() => toastr.success('タスクを作成しました！'), 100)
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
        <Button type="submit" variant="outline-primary" size="md" style={{ width: '100%' }} onClick={handleCreate} disabled={unCreatable}>タスクを作成する！</Button>
      </div>
    </Form>
  )
}

export default TaskForm
