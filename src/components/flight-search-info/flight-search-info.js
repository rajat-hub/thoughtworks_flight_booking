import React from 'react';
import './flight-search-info.css';
import flightIcon from './flightIcon.svg';

export const FlightSearchInfo = (props) => {
  const { origin, destination, date } = props.criteria;
  console.log('from flightsserach info' + props.isDeparture);
  return (
    <React.Fragment>
      {props.isDeparture ? (
        <img src={flightIcon} alt="Flight icon" style={{ float: 'left' }} />
      ) : (
        <img
          src={flightIcon}
          alt="Flight icon"
          style={{ transform: 'rotate(-180deg)', float: 'left' }}
        />
      )}
      <section className="flight-search-info">
        {/* {props.isDeparture ? (
        <img src={flightIcon} alt="Flight icon" />
      ) : (
        <img
          src={flightIcon}
          alt="Flight icon"
          style={{ transform: 'rotate(-180deg)' }}
        />
      )} */}

        <h3>{`${origin} to ${destination}`}</h3>
        <p>
          {props.count} flights found, {date}
        </p>
      </section>
    </React.Fragment>
  );
};
