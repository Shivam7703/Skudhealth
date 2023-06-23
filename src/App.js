import React, { useState } from 'react';
import './App.css';

function App() {
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    contact: ''
  });
  const [listData, setListData] = useState([]);
  const [editUser, setEditUser] = useState(false);
  const [updateUser, setUpdateUser] = useState('');

  const handleChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editUser) {
      // Update existing user
      const userData = listData;
      Object.assign(userData[updateUser], inputs);
      setListData([...userData]);
      setEditUser(false);
      setInputs({
        name: '',
        email: '',
        contact: ''
      });
    } else {
      // Add new user
      setListData([...listData, inputs]);
      setInputs({
        name: '',
        email: '',
        contact: ''
      });
    }
  };

  const handleDelete = (index) => {
    // Remove user from listData
    const updatedListData = listData.filter((_, i) => i !== index);
    setListData(updatedListData);
  };

  const updateData = (index) => {
    // Set inputs with user data for editing
    const user = listData[index];
    setInputs({
      name: user.name,
      email: user.email,
      contact: user.contact
    });
    setEditUser(true);
    setUpdateUser(index);
  };

  return (
    <div className='bodi' style={{ textAlign: 'center', width: '100vw' }}>
      
        <form onSubmit={handleSubmit}>
          <label>NAME</label>
          <input
            name="name"
            value={inputs.name}
            onChange={handleChange}
            type="text"
            placeholder="Enter your name"
            required
          />
          <label>E-MAIL</label>
          <input
            name="email"
            value={inputs.email}
            onChange={handleChange}
            type="email"
            placeholder="Enter your email"
            required
          />
          <label>CONTACT NO.</label>
          <input
            name="contact"
            value={inputs.contact}
            onChange={handleChange}
            type="number"
            placeholder="Enter your contact no."
            minLength="10"
            required
          />
          <button type="submit">{editUser ? 'UPDATE' : 'ADD'}</button>
        </form>
      <div className='userlist'>
        {listData.map((item, index) => (
          <div className="user" key={index}>
            <img src='https://t4.ftcdn.net/jpg/04/92/30/77/240_F_492307715_NnDCfatajhsm2F9VQJAFsJVTZGlZ1gTF.jpg'
            alt='user profile'/>
            <div className='para'>
            <p>Name: {item.name}</p>
            <p>Email: {item.email}</p>
            <p>Contact No.: {item.contact}</p>
            </div>
            <div className='icons'>
            <img
                src="https://t3.ftcdn.net/jpg/00/81/06/40/240_F_81064055_h25fyhZDj1MeNvlVyePz8pWJm1IrUlr2.jpg"
                alt="Edit Icon"
                onClick={() => updateData(index)}
              />
              <img src="https://t3.ftcdn.net/jpg/02/76/19/96/240_F_276199650_Hs5K3QnXm9ZMBLd3DT44YcdWUIf8GHxO.jpg" 
               alt="Delete Icon"
               onClick={() => handleDelete(index)}
               />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
