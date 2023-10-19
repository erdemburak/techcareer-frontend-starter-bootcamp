import axios from 'axios';
import React, { useEffect, useState } from 'react'

function UseEffectOdev7() {

    const [suppliers, setsuppliers] = useState([]);

    useEffect(() => {
        loadSuppliers();
    }, [])

    const loadSuppliers = () => {
        axios.get('https://northwind.vercel.app/api/suppliers')
            .then(res => {
                setsuppliers(res.data);
            })
    }

    const deleteSupplier = (id) => {

        var result = window.confirm("Want to delete?");
        if (result) {

            axios.delete('https://northwind.vercel.app/api/suppliers/' + id)
                .then(res => {
                    loadSuppliers();
                })
        }
    }

    return (<>
        <div style={{ padding: '2%' }}>
            <h1>Suppliers Length: {suppliers.length}</h1>

            <table className='w3-table w3-striped w3-bordered w3-hoverable'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Company Name</th>
                        <th>Contact Name</th>
                        <th>Contact Title</th>
                        <th>Country</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        suppliers && suppliers.map(item => {
                            return <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.companyName}</td>
                                <td>{item.contactName}</td>
                                <td>{item.contactTitle}</td>
                                <td>{item.address.country}</td>
                                <td><button onClick={() => deleteSupplier(item.id)}>Delete</button></td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    </>
    )
}

export default UseEffectOdev7