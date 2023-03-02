import React from "react";

function Product({id, title, body, userId, tags}){
return(
    <div className="p-40 w-full flex flex-col items-center">
    <div className="text-4xl font-bold">{id}</div>
    <div className="bg-red-500 border bordr-gray border-solid border-2 border-indigo-600 rounded p-4"><span className="font-bold">Title: </span>{title}</div>
    <div className="font-sans hover:font-serif">{body}</div>
    <div><span className="font-bold">UserID: </span>{userId}</div>
    <div><span className="font-bold">Tags: </span>{tags[0]},{tags[1]},{tags[2]}</div>
    </div>
    
)
}
export default Product;
