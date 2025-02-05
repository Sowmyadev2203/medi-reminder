import React, { useState, useEffect } from 'react';
import { HiOutlinePencilAlt } from 'react-icons/hi';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { getAuth } from 'firebase/auth';
import { app } from "../fbConfig";
import "../profile/style.css"; 
import profileimg from "../assests/profileimg.jpg";

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
  const [showPassword, setShowPassword] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [showWarning, setShowWarning] = useState(false);

  useEffect(() => {
    if (!name || !email || !phoneNo || !age || !blood) {
      setShowWarning(true);
    } else {
      setShowWarning(false);
    }
  }, [name, email, phoneNo, age, blood]);

  const handleSave = () => {
    const updatedDetails = { name, email, age, phoneNo, blood, password: userPassword };
    localStorage.setItem('userDetails', JSON.stringify(updatedDetails));
    setIsEditing(false);
    setShowWarning(false);
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
    <div className="card-container">
      <div className="card">
       
        <div className="card-header">
          <img src={profileimg} alt="Profile" className="profile-image" />
        </div>

       
        <div className="card-body">
          {showWarning && (
            <div className="warning">⚠️ Your profile is incomplete! Please update it.</div>
          )}

          <table>
            <thead>
              <tr>
                <th colSpan={2} className="table-header">User Details</th>
              </tr>
            </thead>
            <tbody className="user-details">
              
              <tr>
                <td>
                  {isEditing ? 'Name' : ''}
                </td>
                <td style={{ textAlign: isEditing ? 'left' : 'center' }}>
                  {isEditing ? (
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="input-style"
                    />
                  ) : (
                    <span>{name || "Not Provided"}</span>
                  )}
                </td>
              </tr>

              {/* Email Field */}
              <tr>
                <td>
                  {isEditing ? 'Email' : ''}
                </td>
                <td style={{ textAlign: isEditing ? 'left' : 'center' }}>
                  {isEditing ? (
                    <input
                      type="text"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="input-style"
                    />
                  ) : (
                    <span>{email || "Not Provided"}</span>
                  )}
                </td>
              </tr>

              {/* Phone No Field */}
              <tr>
                <td>
                  {isEditing ? 'Phone No' : ''}
                </td>
                <td style={{ textAlign: isEditing ? 'left' : 'center' }}>
                  {isEditing ? (
                    <input
                      type="text"
                      value={phoneNo}
                      onChange={(e) => setPhoneNo(e.target.value)}
                      className="input-style"
                    />
                  ) : (
                    <span>{phoneNo || "Not Provided"}</span>
                  )}
                </td>
              </tr>

              {/* Age Field */}
              <tr>
                <td>
                  {isEditing ? 'Age' : ''}
                </td>
                <td style={{ textAlign: isEditing ? 'left' : 'center' }}>
                  {isEditing ? (
                    <input
                      type="text"
                      value={age}
                      onChange={(e) => setAge(e.target.value)}
                      className="input-style"
                    />
                  ) : (
                    <span>{age || "Not Provided"}</span>
                  )}
                </td>
              </tr>

              {/* Blood Group Field */}
              <tr>
                <td>
                  {isEditing ? 'Blood Group' : ''}
                </td>
                <td style={{ textAlign: isEditing ? 'left' : 'center' }}>
                  {isEditing ? (
                    <input
                      type="text"
                      value={blood}
                      onChange={(e) => setBloodgroup(e.target.value)}
                      className="input-style"
                    />
                  ) : (
                    <span>{blood || "Not Provided"}</span>
                  )}
                </td>
              </tr>

              {/* Password Field */}
              <tr>
                <td>
                  {isEditing ? 'Password' : ''}
                </td>
                <td style={{ textAlign: isEditing ? 'left' : 'center' }}>
                  {isEditing ? (
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <input
                        type={showPassword ? 'text' : 'password'}
                        value={userPassword}
                        onChange={(e) => setUserPassword(e.target.value)}
                        className="input-style"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="icon-button"
                      >
                        {showPassword ? <AiOutlineEyeInvisible size={20} /> : <AiOutlineEye size={20} />}
                      </button>
                    </div>
                  ) : (
                    <span>********</span>
                  )}
                </td>
              </tr>

              {/* Save/Cancel buttons when editing */}
              {isEditing && (
                <tr>
                  <td colSpan={2} style={{ textAlign: 'center', paddingTop: '10px' }}>
                    <button className="save-button" type="button" onClick={handleSave}>
                      Save
                    </button>
                    <button type="button" onClick={handleCancel} className="cancel-button">
                      Cancel
                    </button>
                  </td>
                </tr>
              )}
            </tbody>
          </table>

          <div className="edit-icon-container">
            <HiOutlinePencilAlt
              className="edit-icon"
              onClick={() => setIsEditing(true)}
            />
            <div className="edit-text">Edit</div>
          </div>
        </div>
      </div>
    </div>
  );
}
