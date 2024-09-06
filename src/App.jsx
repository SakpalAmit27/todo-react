import '../src/styles.css'

const App = () => {
  return (
    <div>
      <form className='new-item-form'>
        <div className='form-row'>
          <label>new item</label>
          <input type="text" id='item' />
        </div>
      </form>
    </div>
  )
}

export default App
