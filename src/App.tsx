import { useEffect, useState } from 'react';
import axios from 'axios';
import Card, { CardVariant } from './components/Card';
import { IUser } from './types/types';
import List from './components/List';
import UserItem from './components/UserItem';

const App = () => {
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  async function fetchUsers() {
    try {
      const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
      setUsers(response.data);
    } catch (e) {
      alert(e);
    }
  }

  return (
    <div>
      <Card onClick={(num) => console.log('click-1', num)} variant={CardVariant.outlined} width='200px' height='200px'>
        <button style={{background: 'lightblue'}}>Кнопка</button>
        <div>Lorem ipsum dolor sit amet.</div>
      </Card>
      <Card onClick={(num) => console.log('click-2', num)} variant={CardVariant.primary} width='200px' height='100px'>
        <div>Lorem ipsum dolor sit amet.</div>
      </Card>
      <List
        items={users}
        renderItem={(user: IUser) => <UserItem key={user.id} user={user}/>}
      />
    </div>
  );
};

export default App;
