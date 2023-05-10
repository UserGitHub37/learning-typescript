import { FC, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { IUser } from '../types/types';

type UserItemPageParams = {
  id: string;
}

const UserItemPage: FC = () => {
  const [user, setUser] = useState<IUser | null>(null);
  const params = useParams<UserItemPageParams>();
  const navigate = useNavigate();

  useEffect(() => {
    fetchUser();
  }, []);

  async function fetchUser() {
    try {
      const response = await axios.get<IUser>('https://jsonplaceholder.typicode.com/users/' + params.id);
      setUser(response.data);
    } catch (e) {
      alert(e);
    }
  }

  return (
    <div>
      <button onClick={() => navigate(-1)} style={{margin: '15px 0'}}>Back</button>
      <h1>Страница пользователя {user?.name}</h1>
      <div style={{margin: '15px 0'}}>
        Электропочта: {user?.email}
      </div>
      <div style={{margin: '15px 0'}}>
        Адрес: {user?.address.city} {user?.address.street} {user?.address.zipcode}
      </div>
    </div>
  );
};

export default UserItemPage;
