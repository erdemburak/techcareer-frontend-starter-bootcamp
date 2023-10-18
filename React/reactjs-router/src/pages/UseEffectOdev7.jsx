import axios from 'axios';
import React, { useEffect, useState } from 'react'

function UseEffectOdev7() {

    const [customers, setcustomers] = useState([]);

    useEffect(() => {
        axios.get('https://northwind.vercel.app/api/suppliers')
            .then(res => {
                setcustomers(res.data)
            })
    }, [])

    return (<>
        <div style={{ padding: '2%' }}>

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
                        customers && customers.map(item => {
                            return <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.companyName}</td>
                                <td>{item.contactName}</td>
                                <td>{item.contactTitle}</td>
                                <td>{item.address.country}</td>
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