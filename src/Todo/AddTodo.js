import React, { useState } from 'react'
import PropTypes from 'prop-types'

function AdTodo({onCreate}) {
  const [value, setValue] = useState('')

  function submitHandler(event) {
    event.preventDefault()
    
    if (value.trim()) {
      onCreate(value)
      setValue('')
    }
  }

  return (
    <form style={{marginBottom:'1rem'}} onSubmit={submitHandler}>
      <input value={value} onChange={event => setValue(event.target.value)} />
      <button type="submit">Ad todo</button>
    </form>
  )
}

AdTodo.propTypes = {
  onCreate: PropTypes.func.isRequired
}

export default AdTodo