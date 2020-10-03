import React from 'react'
import PropTypes from 'prop-types'
import TodoItem from './TodoItem'

const styles = {
  ul: {
    listStyle: 'none',
    margin: 0,
    padding: 0
  }
}

function Tododlist (props) {
  return (
    <ul style={ styles.ul }>
      { props.items.map((todo, index) => {
        return <TodoItem item={todo} key={todo.id} index={index} onChange={props.onToggle} />
      })}
    </ul>
  )
}

Tododlist.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  onToggle: PropTypes.func.isRequired
}

export default Tododlist