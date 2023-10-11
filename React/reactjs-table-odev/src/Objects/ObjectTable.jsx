import React from 'react'
import { productsData } from '../Data/productsData'

function ObjectTable() {

    return (<>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <table className='w3-table' style={{ maxWidth: 1100 }}>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Stock</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        productsData.map((product) => {
                            return <tr>
                                <td>{product.id}</td>
                                <td>{product.name}</td>
                                <td>{product.unitsInStock}</td>
                                <td>{product.unitPrice}</td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    </>)
}

export default ObjectTable