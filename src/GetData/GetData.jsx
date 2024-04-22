import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { PORT } from '../Api/api';
import './style.css';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import Logout from './Logout';

function GetData() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const perPage = 5; // Display 5 entries per page

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${PORT}/getData?page=${currentPage}&perPage=${perPage}`);
        setData(response.data.data);
        setTotalPages(Math.ceil(response.data.data.length / perPage));
      
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();

  }, [currentPage, perPage]);

  const handleDelete = async (id) => {
    if (!id) return;

    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    });
  
    if (!result.isConfirmed) return;

    try {
      await axios.delete(`${PORT}/delUser/${id}`);
      setData(data.filter(item => item._id !== id));
      await Swal.fire("Deleted!", "Your file has been deleted.", "success");
    } catch (error) {
      console.error('Error deleting data:', error);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Calculate the starting index and ending index of the current page's entries
  const startIndex = (currentPage - 1) * perPage;
  const endIndex = Math.min(startIndex + perPage, data.length);
  const currentPageData = data.slice(startIndex, endIndex);

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
          {currentPageData.map((item, index) => (
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
      <div className="pagination">
        <button className='pagi' onClick={handlePrevPage} style={{ opacity: currentPage === 1 ? '0.5' : '1' }} >&#60; Previous</button>
        <span className='pagi'> {currentPage}</span>
        <button className='pagi' onClick={handleNextPage}  style={{ opacity: currentPage === totalPages? '0.5' : '1' }} >Next &#62;</button>
      </div>
      <Logout/>
    </div>
  );
}

export default GetData;
