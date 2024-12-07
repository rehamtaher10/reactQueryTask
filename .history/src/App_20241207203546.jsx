import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
function App() {
  const [page, setPage] = useState(0);
  const limit = 9;

  const productsFetch = async (page = 0) => {
    const res = await fetch(
      `https://dummyjson.com/products?limit=${limit}&skip=${page * limit}`
    );
    const productRes = await res.json();
    return productRes;
  };

  const { data, isLoading } = useQuery({
    queryKey: ["products", page],
    queryFn: () => productsFetch(page),
  });

  return (
    <>
      <h1>This Is All Cards</h1>

      <div className="pagination">
        <p>{page + 1} / {data?.total && Math.ceil(data?.total / limit)}</p>
      </div>
      <div className="productContainer">
        {isLoading ? (
          <h2>Loading .. !</h2>
        ) : (
          data?.products.map((ele) => (
            <div class="post" key={ele.id}>
              <div>
                <img src={ele.images?.[0]} />
              </div>
              <h2>${ele.title} </h2>
              <p>${ele.price} $</p>
            </div>
          ))
        )}
      </div>
      <div className="buttons">
        <button disabled={page == 0} >Prev Page</button>
        <button disabled={data?.products?.length < limit} onClick={()=>{
          if(data?.products?.length == limit){
            set
          }
        }}>Next Page</button>

      </div>
    </>
  );
}

export default App;
