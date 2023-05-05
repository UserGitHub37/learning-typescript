import React from 'react';
import Card, { CardVariant } from './components/Card';

const App = () => {
  return (
    <div>
      <Card onClick={(num) => console.log('click-1', num)} variant={CardVariant.outlined} width='200px' height='200px'>
        <button style={{background: 'lightblue'}}>Кнопка</button>
        <div>Lorem ipsum dolor sit amet.</div>
      </Card>
      <Card onClick={(num) => console.log('click-2', num)} variant={CardVariant.primary} width='200px' height='100px'>
        <div>Lorem ipsum dolor sit amet.</div>
      </Card>
    </div>
  );
};

export default App;
