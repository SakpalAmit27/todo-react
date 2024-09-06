import { useState } from 'react'
import '../src/styles.css'

const App = () => {

  const [newItem , setNewItem] = useState("")



  function handleSubmit(e){
    e.preventDefault();

  }
  
  return (
    <div>
      <form className='new-item-form' onSubmit={handleSubmit}>
        <div className='form-row'>
          <label htmlFor='item'>new item</label>
          <input type="text" id='item' value={newItem} onChange={e => setNewItem(e.target.value)}  />
        </div>

        <button className="btn">Add</button>
      </form>
      <h1 className='header'>Todo</h1>
      <li>
        <label htmlFor="">
          <input type="checkbox"  />
          item 1
        </label>
        <button className='btn btn-danger'>Delete</button>
      </li>

      <li>
        <label htmlFor="">
          <input type="checkbox" />
          item 1
        </label>
        <button className='btn btn-danger'>Delete</button>
      </li>
    </div>

  )
}

export default App
