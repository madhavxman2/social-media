import React from 'react';
import './trendCard.css';
import { TrendData } from '../../data/trendData.js';

const TrendCard = () => {
  return (
    <div className='TrendCard'>
      <h3>Trends from you</h3>
      {TrendData.map((trend, id) => (
        <div className="trend" key={id}>
          <span>#{trend.name}</span>
          <span>{trend.shares}k shares</span>
        </div>
      ))}
    </div>
  );
}

export default TrendCard;
