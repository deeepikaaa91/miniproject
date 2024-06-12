import React from 'react'
function practice() {
  const productList = [
    {
      name: "One Plus 8T",
      price: 40000,
      color: "red",
      brand: "One Plus"
    },
    {
      name: "Real Me 16",
      price: 30000,
      color: "blue",
      brand: "Reamme"

    },
    {
      name: "Iphone 14 pro max",
      price: 10000,
      color: "silver",
      brand: "Apple"
    }
  ]
  
  return (
    <div>
      <table>
        <thead>
          <th>S no.</th>
          <th>Product Name</th>
          <th>Product Price</th>
          <th>Color</th>
          <th>Brand</th>
        </thead>
        <tbody>
        {productList.map((item, index)=> 
          <tr>
            <td>{index+1}</td>
            <td>{item.name}</td>
            <td>{item.price.toLocaleString()}</td>
            <td>{item.color}</td>
            <td>{item.brand}</td>
          </tr>
        )}
        </tbody>
      </table>
    </div>
  )
}

export default practice