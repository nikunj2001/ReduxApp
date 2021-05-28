import React from 'react'
import {useDispatch} from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
const Form = () => {
    const [name,setName]=React.useState('');
    const [address,setAddress]=React.useState('');
    const dispatch = useDispatch();
    const storeUser=(e)=>{
        e.preventDefault();
       dispatch({
           type:'ADD_USER',payload:{id:uuidv4(),name,address}
       })
       setName('');
       setAddress('')
    }
    return (
        <div>
            <form onSubmit={storeUser} >
                <div className="group">
                    <input type="text" name="" placeholder="Enter name" className='control' id="" value={name} onChange={(e)=>setName(e.target.value)} required />
                </div>
                <div className="group">
                    <input type="text" name="" placeholder="Enter address" className='control' id="" value={address} onChange={(e)=>setAddress(e.target.value)} required />
                </div>
                <div className="group">
                    <input type="submit"  className='btn btn-default' value='Add User' id="" />
                </div>
            </form>
        </div>
    )
}

export default Form
