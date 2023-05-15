
import './App.css';
import Header from './Header';
// import Content from './Content';
import Footer from './Footer';
import Content2 from './Content2';
import { useState } from 'react';
import AddItem from './AddItem';
import SearchItem from './SearchItem';

function App() {

  const [items, setItem] = useState(JSON.parse(localStorage.getItem('todo_list')));

  const [newitem, setnewitem] = useState('')
  const [search, setSearch] = useState('')

  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1
    const addNewItem = { id, checked: false, item }
    const listItems = [...items, addNewItem]
    setItem(listItems)
    localStor(listItems)
  }

  const handleCheck = (id) => {
    const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item)
    setItem(listItems)
    localStor(listItems)
  }
  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id)
    setItem(listItems)
    localStor(listItems)
  }
  const localStor = (listItems) => {
    localStorage.setItem('todo_list', JSON.stringify(listItems))
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!newitem) return;
    console.log(newitem);
    addItem(newitem)
    setnewitem("")
  }


  return (
    <div className="App">
      <header className="App-header">
        <Header title="To Do List" />
        {/* <Content /> */}
        <AddItem
          newitem={newitem}
          setnewitem={setnewitem}
          handleSubmit={handleSubmit}
        />
        <SearchItem
          search={search}
          setSearch={setSearch}
        />
        <Content2
          items={items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase()))}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
        <Footer itemLength={items.length} />
      </header>
    </div>
  );
}

export default App;
