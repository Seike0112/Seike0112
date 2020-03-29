
import React from 'react'
import { Link } from 'react-router-dom'

import '../styleSheet/Home.css'
import { Button } from 'react-bootstrap';

const Home = () => {
  return (
    <React.Fragment>
      <div className="bg container-fluid">
        <h1 className="white">HOGEHOGE~APP</h1>
        <p className="at">2020 / 03 / 29  created...</p>
        <p className="my-name">Design By NoA</p>
        <div className="link-btn">
          <Button className="text-center" style={{ width: '20%', fontSize: '1.8rem', borderRadius: '10rem' }} variant="light" size="lg">
            <Link to="/tasks/new">Let's Start!</Link>
          </Button>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Home