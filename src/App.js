

// function Square({value,onSquareClick}) {

//   return (
//     <button className='square' onClick={onSquareClick}>{value}</button>
//   )
// }

// function Board() {
//   const [xisNext,setXIsNext] = useState(true)
//   const [squares, setsquares] = useState(Array(9).fill(null));

//   function handleClick(i) {

//     if (squares[i] || calculateWinners(squares)) {
//       return;
//     }

//     if (xisNext) {
//       nextSquare[i] = 'X';
//     } else {
//       nextSquare[i] = "O";
//     }

//     const nextSquare = squares.slice();
//     nextSquare[i] = "X";
//     setsquares(nextSquare);
//     setXIsNext(!xisNext);
//   }

//   function calculateWinners(squares) {
//     const lines = [
//       [0, 1, 2],
//       [3, 4, 5],
//       [6, 7, 8],
//       [0, 3, 6],
//       [1, 4, 7],
//       [2, 5, 8],
//       [0, 4, 8],
//       [2, 4, 6]
//     ];

//     for (let i = 0; i < lines.length; i++) {
//       const [a,b,c] = lines[i];
//       if (squares[a] && squares[b]=== squares[b] && squares[a] === squares[c]) {
//         return squares[a];
//       }
      
//     }
//     return null;
//   }

//   return (
//     <>
//     <div className='board-row'>
//       <Square value={squares[0]} onSquareClick={() => handleClick(0)}/>
//       <Square value={squares[1]} onSquareClick={() => handleClick(1)}/>
//       <Square value={squares[2]} onSquareClick={() => handleClick(2)}/>
//     </div>
//     <div className='board-row'> 
//       <Square value={squares[3]} onSquareClick={() => handleClick(3)}/>
//       <Square value={squares[4]} onSquareClick={() => handleClick(4)}/>
//       <Square value={squares[5]} onSquareClick={() => handleClick(5)}/>
//     </div>
//     <div className='board-row'>
//       <Square value={squares[6]} onSquareClick={() => handleClick(6)}/>
//       <Square value={squares[7]} onSquareClick={() => handleClick(7)}/>
//       <Square value={squares[8]} onSquareClick={() => handleClick(8)}/>
//     </div>
//     </>
//   );
// }

// import './App.css';
import { useState } from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

function App() {
  const itemList = [
    {
        id: 1,
        checked: false,
        item: "One half pound bag of Cocoa Covered Almonds Unsalted"
    },
    {
        id: 2,
        checked: false,
        item: "Item 2"
    },
    {
        id: 3,
        checked: false,
        item: "Item 3"
    }
];

const handleCheckBox = (id) => {

  const items = listItems.map((entry) => entry.id === id ? { ...entry, checked: !entry.checked} : entry)
  setListItems(items)
  localStorage.setItem('List', JSON.stringify(items))
  // console.log(`key: ${id}`)
}

const handleDelete = (id) => {
  const items = listItems.filter((entry) => entry.id !== id);
  setListItems(items);
  localStorage.setItem('List', JSON.stringify(items));
  // console.log(`Delete! ${id}`);
}
  
const [listItems,setListItems] = useState(itemList);

  return (
    <div className="App">

      <Header title="Lists"/>
      <Content listItems = {listItems} handleCheck={handleCheckBox} handleDelete={handleDelete}/>
      
      <Footer length={listItems.length} />
    </div>
  );
}

export default App;
