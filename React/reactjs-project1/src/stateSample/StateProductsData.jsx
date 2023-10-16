import React, { useState } from 'react'
import { productsData } from '../data/productsData'

function StateProductsData() {

    const [products, setProducts] = useState(productsData)

    const deleteProduct = (id) => {
        var filteredProducts = products.filter(q => q.id !== id)
        setProducts([...filteredProducts])
    }

    return (<>
        <h1>Length : {products.length}</h1>
        <table className='w3-table w3-striped'>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Unit Price</th>
                    <th>Stock</th>
                    <th>Per Unit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {
                    products.map((product) => {
                        return <tr>
                            <td>{product.id}</td>
                            <td>{product.name}</td>
                            <td>{product.unitPrice}</td>
                            <td>{product.unitsInStock}</td>
                            <td>{product.quantityPerUnit}</td>
                            <button className='w3-button w3-red' onClick={() => deleteProduct(product.id)}>Delete</button>
                        </tr>
                    })
                }
            </tbody>
        </table>



    </>)
}

export default StateProductsData