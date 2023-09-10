import Layout from '../components/Layout'
import List from '../components/List'
import { ShoppingListItem } from '../interfaces'
import { GetStaticProps } from 'next'
import axios from 'axios';


type Props = {
  items: ShoppingListItem[]
}

const IndexPage = ({ items }: Props) => (
  <Layout title="Shopping List App">
    <h1>Shopping list</h1>
    <p>
      Your shopping list.
    </p>
    <List items={items} />
  </Layout>
)

export const getStaticProps: GetStaticProps = async () => {
  try {

    const apiKey = 'THISISTHEONLYVALIDAPIKEYFORTHISAPI'; // Replace with your API key
    const config = {
      headers: {
        'api_key': apiKey,
      },
    };

    const response = await axios.get('http://localhost:5000/shopping-list-items', config);

    const items: ShoppingListItem[] = response.data;

    return { props: { items } };
  } catch (error) {
    console.error('Error fetching data:', error);

    return { props: { items: [] } };
  }
};

export default IndexPage;
