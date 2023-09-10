import * as React from 'react'
import ListItem from './ListItem'
import { ShoppingListItem } from '../interfaces'

type Props = {
  items: ShoppingListItem[]
}

const List = ({ items }: Props) => (
  <ul>
    {items.map((item) => (
      <li key={item.id}>
        <ListItem data={item} />
      </li>
    ))}
  </ul>
)

export default List
