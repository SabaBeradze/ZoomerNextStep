import {useEffect, useState} from 'react'
import dt from "./data.json"
import './App.css'

function App() {
  let [data,setData]=useState([]);
  useEffect(()=>{
      setData(dt.data);
  })
    function  sortბy(value){
      if(value==="ByNameAsc"){
          setData(data.sort((a,b)=>a.text.localName(b.text)));
      }
        if(value==="ByNameDsc"){
            setData(data.sort((a,b)=>b.text.localName(a.text)));
        }
  //to do
    }
    function blabla(){
      //arafers ar aktebs
    }
    function  saba(){

    }
  return (
    <>
      <select>
          <option value={"ByNameAsc"}><p>სახელით(ა-ჰ)</p> </option>
          <option value={"ByNameDsc"}><p>სახელით(ჰ-ა)</p> </option>

          <option value={"ByPriceAsc"}><p>ფასით  მაღლისკენ</p></option>
          <option value={"ByPriceDsc"}><p>ფასით დაბლისკენ</p> </option>

      </select>
    </>
  );
}

export default App
