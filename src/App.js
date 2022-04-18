// import logo from './logo.svg';
import './App.css';
import {useState} from "react"

function App() {
 const [arrKeys,setKeys]= useState()
  const [Item, setItem] = useState("")
  const [deleteItem, setDel] = useState("")
  const [listItem, setList] = useState([])
  const [errors,seterror] = useState("")

  let addlist = ()=>{
    Item == ""||Item== " "? seterror("Please Input Data"):setList([...listItem,Item]);seterror("");setItem("")


  }
  let removeItem = ()=>{
    listItem.map((e,i)=>{if(arrKeys == i) {setDel(listItem.splice(i, 1))}})
  }
  let edit = ()=>{
    listItem.map((e,i)=>{if(arrKeys == i) {setItem(listItem.splice(i, 1));}})
  }
  const removeAll = () => {setList([]);};

  return (
    <div className='m-1'>
      <div className="input-group py-3 d-flex justify-content-center">
  <input type="text" className="border border-primary px-2 w-50" value={Item} onChange={e=>setItem(e.target.value)} placeholder="Add List"/>
  <button className="btn btn-outline-primary" onClick={addlist}><i class="fa-solid fa-plus"></i></button>
</div>
<div className='text-end px-3'>
<button className='btn btn-outline-danger' onClick={removeAll}><i class="fa-solid fa-xmark"></i> Clear All</button>
</div>
<p className=''>{errors}</p>
<div className='show_list'>
    {listItem.map((e,i)=>{
      return(
        <div className='row  d-flex border px-3 py-1 m-0 mx-4'>   
  <li className='col-10 fs-4 overflow-auto' key={i}>{e}</li>
<button className=' col-1 btn fs-4 edit' onClick={()=>(setKeys(i),edit())}><i className="fa-solid fa-pen-to-square"></i></button>
<button className=' col-1 btn fs-4 trash' onClick={()=>(setKeys(i),removeItem())}><i className="fa-solid fa-trash-can"></i></button>
  </div>
  )
    })
 }
 </div>
    </div>
  );
}

export default App;

