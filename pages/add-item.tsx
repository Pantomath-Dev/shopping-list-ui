import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { ShoppingListItem } from '../interfaces';

const AddItemPage = () => {
  const router = useRouter();
  const { data } = router.query;

  const [item, setItem] = useState<ShoppingListItem>({ name: '', price: 0, quantity: 0 });

  useEffect(() => {
    if (data) {
      const decodedData = JSON.parse(decodeURIComponent(data as string));
      setItem(decodedData);
    }
  }, [data]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setItem((prevItem) => ({ ...prevItem, [name]: value }));
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const apiKey = 'THISISTHEONLYVALIDAPIKEYFORTHISAPI';
      const config = {
        headers: {
          'api_key': apiKey,
        },
      };
  
      await axios.post(`http://localhost:5000/shopping-list-items/`, item, config);

      router.push('/');
    } catch (error) {
      console.error('Error updating item:', error);
    }
  };

  return (
    <div>
      <h1>Add Item</h1>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={item.name} onChange={handleInputChange} placeholder="Milk"/>
        </div>
        <div>
          <label htmlFor="price">Price:</label>
          <input type="number" id="price" name="price" value={item.price} onChange={handleInputChange} />
        </div>
        <div>
          <label htmlFor="quantity">Quantity:</label>
          <input type="number" id="quantity" name="quantity" value={item.quantity} onChange={handleInputChange} />
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default AddItemPage;