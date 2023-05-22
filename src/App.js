
import './App.css';
import Header from './Header';
// import Content from './Content';
import Footer from './Footer';
import Content2 from './Content2';
import { useEffect, useState } from 'react';
import AddItem from './AddItem';
import SearchItem from './SearchItem';
import ApiRequest from './ApiRequest';

function App() {

  const API_URL = "http://localhost:3500/items";
  const [items, setItem] = useState([]);
  const [newitem, setnewitem] = useState('')
  const [search, setSearch] = useState('')
  const [fetchError, setFetchError] = useState(null)
  const [isLoading, setIsLoading] = useState(true)



  const addItem = async(item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1
    const addNewItem = { id, checked: false, item }
    const listItems = [...items, addNewItem]
    setItem(listItems)

    const postOption ={
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(addNewItem)
    }
    const result=await ApiRequest(API_URL,postOption)
    if(result)setFetchError(result)
    // localStor(listItems)
  }

  const handleCheck = async(id) => {
    const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item)
    setItem(listItems)

    const myItem=listItems.filter((item)=>item.id===id)
    const updateOption ={
      method:'PATCH',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({checked:myItem[0].checked})
    }
    const reqUrl=`${API_URL}/${id}`
    const result=await ApiRequest(reqUrl,updateOption)
    if(result)setFetchError(result)
    // localStor(listItems)
  }
  const handleDelete = async(id) => {
    const listItems = items.filter((item) => item.id !== id)
    setItem(listItems)

    const deleteOption={method:'DELETE'}
    const reqUrl=`${API_URL}/${id}`
    const result=await ApiRequest(reqUrl,deleteOption)
    if(result)setFetchError(result)
    // localStor(listItems)
  }
  // const localStor = (listItems) => {
  //   localStorage.setItem('todo_list', JSON.stringify(listItems))
  // }
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!newitem) return;
    console.log(newitem);
    addItem(newitem)
    setnewitem("")
  }
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(API_URL)
        if (!response.ok) throw Error("Data Not Recevied")
        const listItems = await response.json()
        setItem(listItems)
        setFetchError(null)
      }
      catch (error) {
        setFetchError(error.Message);
      } finally {
        setIsLoading(false)
      }
    }
    setTimeout(() => {
      (async () => await fetchItems())()
    }, 2000);

  }, [])


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
        <main>
          {isLoading && <p>Loading Items...</p>}
          {fetchError && <p>Error :{fetchError}</p>}
          {!isLoading && !fetchError && <Content2
            items={items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase()))}
            handleCheck={handleCheck}
            handleDelete={handleDelete}
          />}
        </main>
        <Footer itemLength={items.length} />
      </header>
    </div>
  );
}

export default App;
