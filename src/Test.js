import React from 'react';

const items = [
  { name: 'test1', value: 1 },
  { name: 'test2', value: 2 },
  { name: 'test3', value: 3 },
  { name: 'test4', value: 4 },
  { name: 'test5', value: 5 },
  { name: 'test6', value: 6 },
]

function Item(props) {
  const { name, onClick } = props

  return (
    <li>
      <button onClick={onClick}>{name}</button>
    </li>
  )
}

class Test extends React.Component {
  render() {
    <ul>
      {this.props.items.map(item => (
        <Item key={item.id} onClick={() => this.props.onClick(item.name)} name={item.name} />
      ))}
    </ul>

  }
}