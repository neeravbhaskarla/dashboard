import React from 'react'
import Dashboard from './components/Dashboard/Dashboard'
import Topbar from './components/Navbar/Navbar'
import './App.scss'

function App() {
  return (
    <div className='layout-wrapper'>
      <Topbar/>
      <Dashboard/>
    </div>
  )
}

export default App
