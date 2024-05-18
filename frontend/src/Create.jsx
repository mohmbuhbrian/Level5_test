import React from 'react'

function Create() {
    const [values, setValues] = useState({
        name: "",
        email: ""
    })
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3000/contact', values)
        .then(res => {
            console.log(res);
            navigate('/')
        })
        .catch(err => console.log(err))
    }
    return (
        <div className='d-flex bh-100 bg-primary justify-content-cneter align-items-center'>
            <div className='w-50 bg-white rounded p-3'>
                <form onSubmit={handleSubmit}>
                    <h2>Add Contact</h2>
                    <div className='mb-2'>
                        <label htmlFor=''>Name</label>
                        <input type='text' placeholder='Enter Name' className='form-cpntrol' 
                        onChange={e => setValues({...values, name: e.target.value})}/>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor=''>Email</label>
                        <input type='email' placeholder='Enter Email' className='form-ccontrol' 
                        onChange={e => setValues({...values, name: e.target.value})}/>
                    </div>
                    <button className='btn btn-success'>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Create;
