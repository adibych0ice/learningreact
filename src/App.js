

import { useState } from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import AddItem from './AddItem';
import SearchItem from './SearchItem';


function App() {
  // const itemList = JSON.parse(localStorage.getItem('List'));
  const [listItems,setListItems] = useState(JSON.parse(localStorage.getItem('List')));
  const [newItem,setNewItem] = useState('');
  const [searchItem, setSearchItem] = useState('');

  const setAndSaveItems = (newEntries) => {
    setListItems(newEntries);
    localStorage.setItem('List', JSON.stringify(newEntries));
  }

  const addItem = (item) => {
    const id = listItems.length ?  listItems[listItems.length - 1].id + 1 : 1
    const newItemEntry = {id, checked: false, item};
    const listNewItems = [...listItems,newItemEntry];
    setAndSaveItems(listNewItems);
  };

  const handleCheckBox = (id) => {

    const items = listItems.map((entry) => entry.id === id ? { ...entry, checked: !entry.checked} : entry)
    setAndSaveItems(items);
    // console.log(`key: ${id}`)
  };

  const handleDelete = (id) => {
    const items = listItems.filter((entry) => entry.id !== id);
    setAndSaveItems(items); 
    // console.log(`Delete! ${id}`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) {
      return;
    }
    // console.log(newItem);
    // console.log('submitted')
    addItem(newItem)
    setNewItem('');
  };
  
  

  return (
    <div className="App">

      <Header title="Lists"/>

      <AddItem newEntry={newItem} setNewEntry={setNewItem} handleSubmit={handleSubmit}/>

      <SearchItem searchItem ={searchItem} setSearchItem={setSearchItem}/>

      <Content listItems = {listItems.filter(entry => ((entry.item).toLowerCase()).includes(searchItem.toLowerCase()))} handleCheck={handleCheckBox} handleDelete={handleDelete}/>
      
      <Footer length={listItems.length} />
    </div>
  );
}

export default App;
