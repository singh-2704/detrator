import react, { useState, useEffect } from 'react';
import { getdata } from './api';
import Product from './Product';



function App() {
  const[dataList, setDataList] = useState([]);
  useEffect(function(){
    const xyz = getdata();
    xyz.then(function(response){
     const d  = response.data.posts;
      console.log(d);
      setDataList(d);
    
    });
     }, []);
     return(
      dataList.map((item)=>{
        return(
          <Product key={item.id} {...item} />
          // <div className=''>
          //   {item.id}
          //   {item.title}
          //   {item.body}
          // </div>
        )
      })
     )
}

export default App;
