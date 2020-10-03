import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import Context from '../Context'

const styles = {
  li: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0.5rem 1rem',
    border: '1px solid #ccc',
    borderRadius: '4px',
    marginBottom: '.5rem' 
  },
  input: {
    marginRight: '1rem'
  }
}

function TodoItem({item, index, onChange}) {
  const {removeTodo} = useContext(Context)
  const classes = []

  if (item.completed) {
    classes.push('done')
  }

  return (
    <li style={styles.li}>
      <span className={classes.join(' ')}>
        <input 
          style={styles.input}
          checked={item.completed}
          type="checkbox" 
          onChange={() => onChange(item.id)}
        />
        <strong>{index+1}</strong>
        &nbsp;
        {item.title}
      </span>
      <button className="rm" onClick={removeTodo.bind(null, item.id)}>&times;</button>      
    </li>
  )
}

TodoItem.propTypes = {
  item: PropTypes.object.isRequired,
  index: PropTypes.number,
  onChange: PropTypes.func.isRequired
}

export default TodoItem