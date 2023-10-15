import React from 'react';
import data from '../../utilis/Data';
import './Page.css';

const Class = () => {
  return (
    <div className="framework">
      {data.map((item) => (
        <div key={item.id} className="data-set">
          <a href={item.youtubeLink} target="_blank" rel="noopener noreferrer">
            <div className="slide-images">
              <img src={item.image} alt="Video Thumbnail" />
            </div>
          </a>
          <div className="ordered-list">
            <div className="list-item">
              <div className="item-details">
                <h2>{item.heading}</h2>
                <div className="subheadings">
                  {item.subHeadings.map((subHeading, index) => (
                    <p key={index}>{subHeading}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <a href={item.youtubeLink}>Watch the Video</a>
        </div>
      ))}
    </div>
  );
}

export default Class;
