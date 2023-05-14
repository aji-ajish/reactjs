
import './App.css';
import Header from './Header';
// import Content from './Content';
import Footer from './Footer';
import Content2 from './Content2';
import { useState } from 'react';
import AddItem from './AddItem';

function App() {

  const [items, setItem] = useState([
    {
      id: 1,
      checked: true,
      item: 'Practice Code'
    },
    {
      id: 2,
      checked: false,
      item: 'Learning Code'
    },
    {
      id: 3,
      checked: true,
      item: 'Play Game'
    },
    {
      id: 4,
      checked: false,
      item: 'develop Play'
    }
  ]);
  const handleCheck = (id) => {
    const listitem = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item)
    setItem(listitem)
    localStorage.setItem('todo_list', JSON.stringify(listitem))
  }
  const handleDelete = (id) => {
    const listitem = items.filter((item) => item.id !== id)
    setItem(listitem)
    localStorage.setItem('todo_list', JSON.stringify(listitem))
  }


  return (
    <div className="App">
      <header className="App-header">
        <Header title="To Do List" />
        {/* <Content /> */}
        <AddItem />
        <Content2
          items={items}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
        <Footer itemLength={items.length} />
      </header>
    </div>
  );
}

export default App;
