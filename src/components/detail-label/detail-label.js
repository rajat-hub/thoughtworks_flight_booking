import React from 'react';
import './detail-label.css';

export const DetailLabel = (props) => {
  return (
    <>
      {props.isMultiple ? (
        <div className="detail-label">
          <h4 style={{ color: '#008000' }}>{props.mainText}</h4>
          <p>{props.subText}</p>
        </div>
      ) : (
        <div className="detail-label">
          <h4>{props.mainText}</h4>
          <p>{props.subText}</p>
        </div>
      )}
    </>
  );
};
