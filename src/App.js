import {Component} from 'react'
import Sidebar from './components/Sidebar'
import Sliders from './components/Sliders'

import './App.css'

class App extends Component {
  render() {
    return (
      <>
        <div className="app-container">
          <Sidebar />
          <Sliders />
        </div>
      </>
    )
  }
}
export default App
