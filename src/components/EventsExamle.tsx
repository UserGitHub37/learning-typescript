import { FC, MouseEvent, ChangeEvent, useState, DragEvent } from 'react';

const EventsExamle: FC = () => {
  const [value, setValue] = useState<string>();
  const [isDrag, setIsDrag] = useState<boolean>(false);

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }

  const clickHandler = (e: MouseEvent<HTMLButtonElement>) => {
    console.log(value);
  }

  const dragHandler = (e: DragEvent<HTMLDivElement>) => {
    console.log('DRAG');
  }

  const dragWithPreventHandler = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDrag(true);
  }

  const leaveHandler = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDrag(false);
  }

  const dropHandler = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDrag(false);
    console.log('DROP');
  }

  return (
    <div>
      <input type="text" onChange={changeHandler} />
      <button onClick={clickHandler}>Вывести содержимое инпута в консоль</button>
      <div onDrag={dragHandler} draggable style={{width: 100, height: 100, background: isDrag ? 'green' :  'red'}}>
        Drag this square to the bottom square
      </div>
      <div
        onDrop={dropHandler}
        onDragLeave={leaveHandler}
        onDragOver={dragWithPreventHandler}
        style={{width: 100, height: 100, background: isDrag ? 'blue' : 'red', marginTop: 15}}>
      </div>
    </div>
  );
};

export default EventsExamle;
