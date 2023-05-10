import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Card, { CardVariant } from './components/Card';
import EventsExamle from './components/EventsExamle';
import UsersPage from './components/UserPage';
import UserItemPage from './components/UserItemPage';
import TodosPage from './components/TodosPage';
import TodoItemPage from './components/TodoItemPage';


const App = () => {

  return (
    <BrowserRouter>
      <nav style={{display: 'flex', columnGap: 10}}>
        <Link to='/'>Главная</Link>
        <Link to='users'>Пользователи</Link>
        <Link to='todos'>Список дел</Link>
      </nav>
      <Routes>
        <Route path='/' element={
          <div>
            <EventsExamle />
            <Card onClick={(num) => console.log('click-1', num)} variant={CardVariant.outlined} width='200px' height='200px'>
              <button style={{ background: 'lightblue' }}>Кнопка</button>
              <div>Lorem ipsum dolor sit amet.</div>
            </Card>
            <Card onClick={(num) => console.log('click-2', num)} variant={CardVariant.primary} width='200px' height='100px'>
              <div>Lorem ipsum dolor sit amet.</div>
            </Card>
          </div>
        }/>
        <Route path='/users/' element={<UsersPage/>}/>
        <Route path='/users/:id' element={<UserItemPage/>}/>
        <Route path='/todos' element={<TodosPage/>}/>
        <Route path='/todos/:id' element={<TodoItemPage/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
