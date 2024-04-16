

import React, { useState, useEffect } from 'react';
import { maidName } from '../Data/Maid';
import { useNavigate } from 'react-router-dom';
import Backbutton from '../GoBack/Backbutton';
import axios from 'axios';
import { PORT } from '../Api/api';
import { ToastContainer, toast } from 'react-toastify';

function VerfiedUser({ language }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredMaidList, setFilteredMaidList] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    // Set the filtered list to the initial maidName list when the component mounts
    setFilteredMaidList(maidName);
  }, []);

  const handleSubmit = async (index) => {
    localStorage.setItem("maidName", JSON.stringify(maidName[index].name));
    let maidData = JSON.parse(localStorage.getItem("maidName"));
    try {
      let response = await axios.post(`${PORT}/verified`, {
        maidName: maidData
      });
      console.log(response.data.msg);
      toast.success('Data Added');
    } catch (error) {
      if (error.response && error.response.status === 400) {
        console.log("Data already exists");
        toast.warning('Data already exist');
      } else {
        console.log("Error:", error);
        // Handle other types of errors
      }
    }
  };

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
    // Filter the maid list based on the search query
    const filteredMaids = maidName.filter((maid) =>
      maid.name.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setFilteredMaidList(filteredMaids);
  };

  return (
    <>
    
      <div className="purpose-heading">
        <h1>{language === 'english' ? "घर के कर्मचारियों की सूची" : "List of House Workers"}</h1>
      </div>
      <div className="search-container">
        <input
          type="text"
          placeholder={language === 'english' ? 'मेड को नाम से खोजें' : 'Search maid by name'}
          value={searchQuery}
          onChange={handleSearchInputChange}
        />
      </div>
      <div className="purpose-sec m-font">
        {/* {filteredMaidList.length <0 } */}
        {filteredMaidList.map((item, index) => (
          <div onClick={() => handleSubmit(index)} className="purpose-lines" key={index}>
            <p>{language === 'english' ? "नाम" : "Name"} : {item.name}</p>
          </div>
        ))}
      </div>
      <Backbutton />
      <ToastContainer />
    </>
  );
}

export default VerfiedUser;
