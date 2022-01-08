import './App.css';
import {useState} from 'react';
import data from './data/placesData.json';

function App() {
  const [select,setSelect]=useState(null)
  const toggle=(i)=>{
    if(select===i){
      return setSelect(null)
    }
    setSelect(i)
  }
  return (
    <>
    <div className='container'>
      <div className="accordion">
          {data.map((ele,i) => (
            <div className='item' onClick={()=>toggle(i)}>
              <div className='title'> <h2> {ele.place} </h2> <span className='symbol'>{select===i ? '-':'+'}</span> </div>
              <div className={select===i ? 'desc show':'desc'}> {ele.about}</div>
            </div>

          ))}
        

      </div>
    </div>
    </>
  );
}

export default App;
