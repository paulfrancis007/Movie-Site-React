import React from 'react'
import {Bookmark} from 'lucide-react'

const App = () => {
  return (
    <div className='parent'>
      <div className="card">
        <div className="top">
          <img src="https://cdn.vectorstock.com/i/500p/01/10/amazon-logo-vector-46860110.jpg" alt="" />
          <button>Save <Bookmark /></button>
        </div>
        <div className="center">
          <h3>Amazon <span>5 days ago</span></h3>
          <h2>Senior UI/UX Designer</h2>
          <div>
            <h4>Part Time</h4>
            <h4>Senior Level</h4>
          </div>
        </div>
        <div className="bottom">
          <div>
            <div>
              <h3></h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
