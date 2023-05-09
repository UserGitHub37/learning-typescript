import { FC, MouseEvent, ChangeEvent, useState, DragEvent, useRef } from 'react';

const EventsExamle: FC = () => {
  const [value, setValue] = useState<string>('');
  const [isDrag, setIsDrag] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }

  const clickHandler = (e: MouseEvent<HTMLButtonElement>) => {
    // console.log(value); // вывод значения управляемого инпута
    console.log(inputRef.current?.value); // вывод значения неуправляемого инпута
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
    <>
      <input type="text" value={value} onChange={changeHandler} placeholder="Управляемый инпут"/>
      <input type="text" ref={inputRef} placeholder="Неуправляемый инпут" style={{marginLeft: 5}}/>
      <button onClick={clickHandler} style={{marginLeft: 5}}>Вывести содержимое инпута в консоль</button>
      <div style={{display: 'flex', alignItems: 'center', margin: '5px 0'}}>
        <div onDrag={dragHandler} draggable style={{width: 75, height: 75, background: isDrag ? 'green' : 'orange', textAlign: 'center'}}>
          Drag this square to the right square
        </div>
        <div
          onDrop={dropHandler}
          onDragLeave={leaveHandler}
          onDragOver={dragWithPreventHandler}
          style={{width: 100, height: 100, background: isDrag ? 'blue' : 'red', marginLeft: 25}}>
        </div>
      </div>
    </>
  );
};

export default EventsExamle;
