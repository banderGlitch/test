import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from 'react-bootstrap/Button';
import CollapsibleTable from './component/TableComp';

function App() {

  return (
    <>
      <CollapsibleTable />
      <Button variant="primary">Primary</Button>

    </>
  )
}

export default App
