import {useQuery} from "@tanstack/react-query";
import React,{useState} from "react";
function App() {
  const [page,setPage] =useState(0);
  const limit =10;

  const productsFetch = async(page=0) =>{
    const res = await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${page*limit}`);
    const productsRes=await res.json;
  }

  return (
    <>
    
    </>
  )
}

export default App
