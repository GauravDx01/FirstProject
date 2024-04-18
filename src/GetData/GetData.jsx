import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { PORT } from '../Api/api';
import './style.css'; // Import your CSS file
import Swal from 'sweetalert2/dist/sweetalert2.js'

function GetData() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${PORT}/getData`);
        setData(response.data.data); // Assuming the server returns an object with a 'data' property containing the array of data
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();

  }, []);

  const handleDelete = async (id) => {
    if (!id) return; // Return early if id is falsy (null, undefined, etc.)
  
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    });
  
    if (!result.isConfirmed) return; // Return early if user cancels the deletion
  
    try {
      const response = await axios.delete(`${PORT}/delUser/${id}`);
      
      // Update state to remove deleted item from the data array
      setData(data.filter(item => item._id !== id));
      
      // Show success message
      await Swal.fire("Deleted!", "Your file has been deleted.", "success");
    } catch (error) {
      console.error('Error deleting data:', error);
    }
  };
  return (
    <div className="data-table-container">
      <h2>Data Table</h2>
      <table className="data-table">
        <thead>
          <tr>
            <th className="entry-type">Entry Type</th>
            <th className="purpose-type">Purpose Type</th>
            <th className="house-details">House Details</th>
            <th className="adhar-image">Adhar Image</th>
            <th className="user-photo">User Photo</th>
            <th className="delete-button">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td className="entry-type">{item.entryType}</td>
              <td className="purpose-type">{item.purposeType}</td>
              <td className="house-details"><b>House No:</b> {item.houseDetails.houseNo} <br /> <br /> <b>Owner:</b>  {item.houseDetails.owner}</td>
              <td className="adhar-image">
                <img src={item.adharImg} alt="Adhar Image" className="adhar-image" />
              </td>
              <td className="user-photo">
                <img src={item.userPhoto} alt="User Photo" className="user-photo" />
              </td>
              <td className="delete-button">
                <button type='button' onClick={() => handleDelete(item._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default GetData;
