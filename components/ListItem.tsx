import React from 'react'

import { useRouter } from 'next/router'

import styles from '../styles/ShoppingList.module.css';
import { ShoppingListItem } from '../interfaces';

type Props = {
  data: ShoppingListItem
}

const ListItem = ({ data }: Props) => {
  const router = useRouter();

  const handleEditClick = () => {
    router.push(`/edit-item?id=${data.id}`);
  };

  return (
    <div>
      <div className={styles.box}>
        <div>
          <h3>{data.name}</h3>
          <p>Price: {data.price}</p>
          <p>Quantity: {data.quantity}</p>
        </div>
        <div>
          <button className={styles.button} onClick={handleEditClick}>Edit</button>
          <button className={styles.button}>Remove</button>
        </div>
      </div>
    </div>
  );
}

export default ListItem
