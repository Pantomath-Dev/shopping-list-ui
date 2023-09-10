import React from 'react'

import { useRouter } from 'next/router'

import styles from '../styles/ShoppingList.module.css';
import { ShoppingListItem } from '../interfaces';
import axios from 'axios';

type Props = {
  data: ShoppingListItem
}

const ListItem = ({ data }: Props) => {
  const router = useRouter();

  const handleEditClick = () => {
    const dataQueryParam = encodeURIComponent(JSON.stringify(data));

    router.push(`/edit-item?data=${dataQueryParam}`);
  };

  const handleRemoveClick = async () => {
    try {
      
      const apiKey = 'THISISTHEONLYVALIDAPIKEYFORTHISAPI';

      const config = {
        headers: {
          'api_key': apiKey,
        },
      };

      await axios.delete(`http://localhost:5000/shopping-list-items/${data.id}`, config);

      router.reload();

    } catch (error) {
      console.error('Error removing item:', error);
    }
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
          <button className={styles.button} onClick={handleRemoveClick}>Remove</button>
        </div>
      </div>
    </div>
  );
}

export default ListItem
