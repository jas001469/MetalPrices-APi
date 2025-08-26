import React from 'react';

const MetalTile = ({ metal, onClick }) => {
  const isPositive = metal.change >= 0;
  
  return (
    <div className="metal-tile" onClick={onClick}>
      <div className="metal-header">
        <h3>{metal.name}</h3>
        <span className="purity-badge">{metal.purity}</span>
      </div>
      <div className="metal-price">
        ₹{metal.price.toLocaleString('en-IN')}
        <span className="price-unit">/{metal.unit}</span>
      </div>
      <div className={`price-change ${isPositive ? 'positive' : 'negative'}`}>
        <span className="change-icon">
          {isPositive ? '↗' : '↘'}
        </span>
        ₹{Math.abs(metal.change).toFixed(1)} ({isPositive ? '+' : ''}{metal.changePercent.toFixed(2)}%)
      </div>
    </div>
  );
};

export default MetalTile;