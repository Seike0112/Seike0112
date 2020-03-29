import React from 'react'

import { Card } from 'react-bootstrap';
import '../styleSheet/About.css'

const About = () => {
  return (
    <React.Fragment>
      <div className="about">
        <Card>
          <Card.Body>
            <Card.Title className="text-center" style={{ fontWeight: 'bold', fontSize: '2rem' }}>このアプリについて</Card.Title>
            <Card.Subtitle className="mb-2 text-muted text-center">アプリ内容：　タスクアプリ　Ver. 1.0.0</Card.Subtitle>
            <Card.Text>
              作成画面にてタスクの作成と削除ができる簡略的なタスク管理アプリです。
              今後の追加機能としては、タスクのジャンルのセレクトができるようにすることです。
            </Card.Text>
            <Card.Subtitle className="mb-2 text-muted text-center">作成者：　NoA</Card.Subtitle>
            <div className="about-links">
              <Card.Link href="/">ホーム　</Card.Link>
              <span>/</span>
              <Card.Link href="/tasks/new">　タスク作成画面へ！</Card.Link>
            </div>
          </Card.Body>
        </Card>
      </div>
    </ React.Fragment>
  )
}

export default About;