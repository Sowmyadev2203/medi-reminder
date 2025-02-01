import React, { useState, useEffect } from 'react';
import { HiOutlinePencilAlt } from 'react-icons/hi';
import { getAuth,signOut } from 'firebase/auth';
import {app} from "../fbConfig";

export default function Profile() {
  const auth = getAuth(app);
  

 


  const userDetailsString = localStorage.getItem('userDetails');
  const userDetails = userDetailsString ? JSON.parse(userDetailsString) : null;

  
  const initialUserDetails = userDetails || {};

  const [name, setName] = useState(initialUserDetails?.name || '');
  const [email, setEmail] = useState(initialUserDetails?.email || '');
  const [phoneNo, setPhoneNo] = useState(initialUserDetails?.phoneno || '');
  const [age, setAge] = useState(initialUserDetails?.age || '');
  const [blood, setBloodgroup] = useState(initialUserDetails?.blood || '');
  const [userPassword, setUserPassword] = useState(initialUserDetails?.password || '');
  const [isEditing, setIsEditing] = useState(false);

  const handleSave = () => {
    const updatedDetails = {
      name,
      email,
      age,
      phoneNo,
      blood,
      password: userPassword,
    };
    localStorage.setItem('userDetails', JSON.stringify(updatedDetails));
    setIsEditing(false);
  };

  const handleCancel = () => {
    setName(initialUserDetails?.name || '');
    setEmail(initialUserDetails?.email || '');
    setPhoneNo(initialUserDetails?.phoneno || '');
    setAge(initialUserDetails?.age || '');
    setBloodgroup(initialUserDetails?.blood || '');
    setUserPassword(initialUserDetails?.password || '');
    setIsEditing(false);
  };

  return (
    <>
    <div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-evenly',
            alignItems: 'left',
            boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
            padding: '20px',
            margin: '80px 20px 30px 20px',
            width: '30rem',
            borderRadius: '10px',
          }}
        >
          <table>
            <thead>
              <tr>
                <th colSpan={2} style={{ textAlign: 'center', fontSize: '20px', paddingBottom: '10px' }}>
                  User Details
                </th>
              </tr>
            </thead>
            <tbody className='user-details'>
              <tr>
                <td className='tds'>Name:</td>
                <td>
                  {isEditing ? (
                    <input
                      type='text'
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      style={inputStyle}
                    />
                  ) : (
                    name
                  )}
                </td>
              </tr>
              <tr>
                <td className='tds'>Email:</td>
                <td>
                  {isEditing ? (
                    <input
                      type='text'
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      style={inputStyle}
                    />
                  ) : (
                    email
                  )}
                </td>
              </tr>
              <tr>
                <td className='tds'>Phone No:</td>
                <td>
                  {isEditing ? (
                    <input
                      type='text'
                      value={phoneNo}
                      onChange={(e) => setPhoneNo(e.target.value)}
                      style={inputStyle}
                    />
                  ) : (
                    phoneNo
                  )}
                </td>
              </tr>
              <tr>
                <td className='tds'>Age:</td>
                <td>
                  {isEditing ? (
                    <input
                      type='text'
                      value={age}
                      onChange={(e) => setAge(e.target.value)}
                      style={inputStyle}
                    />
                  ) : (
                    age
                  )}
                </td>
              </tr>
              <tr>
                <td className='tds'>Blood Group:</td>
                <td>
                  {isEditing ? (
                    <input
                      type='text'
                      value={blood}
                      onChange={(e) => setBloodgroup(e.target.value)}
                      style={inputStyle}
                    />
                  ) : (
                    blood
                  )}
                </td>
              </tr>
              <tr>
                <td className='tds'>Password:</td>
                <td>
                  {isEditing ? (
                    <input
                      type='password'
                      value={userPassword}
                      onChange={(e) => setUserPassword(e.target.value)}
                      style={inputStyle}
                    />
                  ) : (
                    userPassword
                  )}
                </td>
              </tr>
              {isEditing && (
                <tr>
                  <td colSpan={2} style={{ textAlign: 'center', paddingTop: '10px' }}>
                    <button
                      style={saveButtonStyle}
                      type='button'
                      onClick={handleSave}
                    >
                      Save
                    </button>
                    <button
                      type='button'
                      onClick={handleCancel}
                      style={cancelButtonStyle}
                    >
                      Cancel
                    </button>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-evenly',
              padding: '10px',
              marginTop: '10px',
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                cursor: 'pointer',
              }}
            >
              <HiOutlinePencilAlt
                style={{
                  cursor: 'pointer',
                  color: '#2874f0',
                  width: '30px',
                  height: '30px',
                }}
                onClick={() => setIsEditing(true)}
              />
              <div style={{ fontWeight: 'bolder', fontSize: '12px' }}>Edit</div>
              <br></br>

            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}


const inputStyle = {
  backgroundColor: '#f3f4f6', 
  color: '#333', 
  padding: '8px 12px',
  border: '1px solid #ccc',
  borderRadius: '4px',
  width: '100%', 
  boxSizing: 'border-box', 
};


const saveButtonStyle = {
  backgroundColor: 'black', 
  color: 'white', 
  padding: '10px 20px',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  fontWeight: 'bold',
  transition: 'background-color 0.3s',
  marginRight: '10px',
};



const cancelButtonStyle = {
  backgroundColor: 'black', 
  color: 'white', 
  padding: '10px 20px',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  fontWeight: 'bold',
  transition: 'background-color 0.3s',
};

