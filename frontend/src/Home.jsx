import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Home() {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3000/')
        .then(res => console.log(res))
        .catch(err => console.log(err));
    }, [])
    return (
        <div className='d-flex bh-100 bg-primary justify-content align-items-center'>
            <div className='w-50 bg-white rounded p-3'>
                <h2>Contact List</h2>
                <div className='d-flex justify-content-end'>
                    <Link to="/create" className='btn btn-success'>Create +</Link>
                </div>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {data.map((contact, index) => {
                            return <tr key={index}>
                                <td>{contact.ID}</td>
                                <td>{contact.Name}</td>
                                <td>{contact.Email}</td>
                                <td>
                                    <Link to={`/read/${contact.ID}`}className='btn btn-sm btn-info'>Read</Link>
                                    <button className='btn btn-sm btn-primary mx-2'>Edit</button>
                                    <button className='btn btn-sm btn-danger'>Delete</button>
                                </td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Home;