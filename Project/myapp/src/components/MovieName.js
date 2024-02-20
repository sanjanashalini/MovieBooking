import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom for navigation


const ImageGallery = () => {
  return (
    <div>
      {/* Navigation and Search Bar */}
      <div className="header">
        <div className="left-section">
          {/* App Name */}
        
          <h1  className="app-name">
            GrabYourTicket
          </h1>
        </div>
        <div className="middle-section">
          {/* Search Bar */}
          <input type="text" placeholder="Search for movies" className="search-bar" />
        </div>
      </div>
     
      <div className="sliding-image-container">
        <img src="https://assetscdn1.paytm.com/images/catalog/view_item/2476185/1706857499433.jpg?format=webp&imwidth=1024" alt="Sliding Image" className="sliding-image" />
      </div>
      
     <h1>Recommended Movies</h1>
      {/* Image Gallery */}
      <div className="image-container">
        {/* Image 1 */}
        <div className="image-card">
          <Link to="/next-page" className="image-link">
            <img src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC40LzEwICA1SyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00384518-lyklzskwsx-portrait.jpg" alt="Image 1" className="image" />
          </Link>
          <div className="image-details">
            <h2 className="movie-name">Siren</h2>
            <h4 className="movie-rating">Action/Drama</h4>
          </div>
        </div>

        {/* Repeat the structure for other images */}
        {/* Image 2 */}
        <div className="image-card">
          <Link to="/next-page" className="image-link">
            <img src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC4yLzEwICA3LjVLIFZvdGVz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00385185-nshxaznahe-portrait.jpg" alt="Image 2" className="image" />
          </Link>
          <div className="image-details">
          <h2 className="movie-name">Lover</h2>
          <h4 className="movie-rating">Drama/Romance</h4>
          </div>
        </div>

        {/* Repeat the structure for other images */}
        {/* Image 3 */}
        <div className="image-card">
          <Link to="/next-page" className="image-link">
            <img src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-Ny8xMCAgMTguOEsgVm90ZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00359069-jlrtawxgev-portrait.jpg" alt="Image 3" className="image" />
          </Link>
          <div className="image-details">
          <h2 className="movie-name">Lal Salam</h2>
            <h4 className="movie-rating">Action/Drama</h4>
          </div>
        </div>

        {/* Repeat the structure for other images */}
        {/* Image 4 */}
        <div className="image-card">
          <Link to="/next-page" className="image-link">
            <img src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-Ni40LzEwICAxMS41SyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00376328-kzmlzgbkxa-portrait.jpg" alt="Image 4" className="image" />
          </Link>
          <div className="image-details">
          <h2 className="movie-name">Madame Web</h2>
            <h4 className="movie-rating">Action/Drama/Adventures</h4>
          </div>
        </div>

        {/* Repeat the structure for other images */}
        {/* Image 5 */}
        
      </div>
    </div>
  );
};

export default ImageGallery;