import React from 'react';
import './App.css';
import logo from './logo1.png';
import { useState } from 'react';

const ImageUploader = () => {
  const [image, setImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const handleDeleteImage = () => {
    setImage(null);
  };

  return (
    <div className="ImageUploaderContainer">
      <input className="ImageUploaderInput" type="file" accept="image/*" onChange={handleImageChange} />
      {image && (
        <div className="ImageUploaderPreview">
          <button className="DeleteButton" onClick={handleDeleteImage}>X</button>
          <img src={image} alt="Uploaded Preview" />
        </div>
      )}
    </div>
  );
};



const ExpenseCategorization = () => {
  return (
    <div className="container">
      {/* Header */}
      <header className="header">
      <img src={logo} alt="Logo" style={{ width: '10%', height: '70px' }}/>
        <div className="logo">Sort and Save - your Expense, your Way!</div>
        <div className="menu">Menu</div>
      </header>
      {/* Title */}
      <h1 className="title">Expense Categorization</h1>

      {/* Input Section */}
      <div className="input-section">
        <button className="upload-button">
          <span className="button-text">Upload Bill Image</span>
          <ImageUploader/>
        </button>
        <div className="text-box">
          <input type="text" placeholder="Enter expense description..." />
          <button className='upload-button'>Categorize</button>
          {/*<span className="microphone">🎤</span>*/}
        </div>
      </div>

      {/* Output Section */}
      <h2 className="output-title">Categorized Expenses</h2>
      <div className="expense-cards">
        <div className="expense-card">
          <div className="category-icon">🍔</div>
          <div className="category-name">Food</div>
          <div className="amount">$250</div>
          <div className="details-link">See Details</div>
        </div>
        <div className="expense-card">
          <div className="category-icon">✈️</div>
          <div className="category-name">Travel</div>
          <div className="amount">$150</div>
          <div className="details-link">See Details</div>
        </div>
        <div className="expense-card">
          <div className="category-icon">💡</div>
          <div className="category-name">Utilities</div>
          <div className="amount">$100</div>
          <div className="details-link">See Details</div>
        </div>
      </div>
  
      {/* Footer 
      <footer className="footer">
        //<div className="footer-link">Home</div>
        <div className="footer-link">History</div>
        <div className="footer-link">Settings</div>
        <div className="footer-link">Help</div>
      </footer>
 
    */}   
    </div>
  );
};

export default ExpenseCategorization;
