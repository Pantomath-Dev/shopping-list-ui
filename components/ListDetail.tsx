import * as React from 'react'

import { ShoppingListItem } from '../interfaces'

type ListDetailProps = {
  item: ShoppingListItem
}

const ListDetail = ({ item: shoppingListItem }: ListDetailProps) => (
  <div>
    <h1>Detail for {shoppingListItem.name}</h1>
    <p>ID: {shoppingListItem.id}</p>
  </div>
)

export default ListDetail
