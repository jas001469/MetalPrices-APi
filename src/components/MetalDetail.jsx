import React from 'react';

const MetalDetail = ({ metal, onBack }) => {
  const isPositive = metal.change >= 0;
  
  // Simple chart simulation using divs
  const Chart = ({ data }) => {
    const maxPrice = Math.max(...data.map(d => d.price));
    const minPrice = Math.min(...data.map(d => d.price));
    const range = maxPrice - minPrice;
    
    return (
      <div className="price-chart">
        <div className="chart-title">7-Day Price Trend</div>
        <div className="chart-container">
          {data.map((point, index) => {
            const height = range > 0 ? ((point.price - minPrice) / range) * 100 : 50;
            return (
              <div key={index} className="chart-bar-container">
                <div 
                  className="chart-bar" 
                  style={{ height: `${height}%` }}
                ></div>
                <div className="chart-label">{point.date.split('-')[2]}</div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div className="metal-detail">
      <button className="back-button" onClick={onBack}>
        ← Back to List
      </button>
      
      <div className="detail-header">
        <h2>{metal.name} Price</h2>
        <span className="purity-badge large">{metal.purity}</span>
      </div>
      
      <div className="price-display">
        <div className="current-price">
          ₹{metal.price.toLocaleString('en-IN')}
          <span className="price-unit">/{metal.unit}</span>
        </div>
        <div className={`price-change large ${isPositive ? 'positive' : 'negative'}`}>
          <span className="change-icon">
            {isPositive ? '↗' : '↘'}
          </span>
          ₹{Math.abs(metal.change).toFixed(1)} ({isPositive ? '+' : ''}{metal.changePercent.toFixed(2)}%)
        </div>
      </div>
      
      <div className="detail-section">
        <h3>Price History</h3>
        <Chart data={metal.history} />
      </div>
      
      <div className="detail-section">
        <h3>Market Information</h3>
        <div className="info-grid">
          <div className="info-item">
            <span className="info-label">Opening Price:</span>
            <span className="info-value">
              ₹{(metal.price - metal.change).toLocaleString('en-IN')}
            </span>
          </div>
          <div className="info-item">
            <span className="info-label">Closing Price:</span>
            <span className="info-value">
              ₹{metal.price.toLocaleString('en-IN')}
            </span>
          </div>
          <div className="info-item">
            <span className="info-label">24H High:</span>
            <span className="info-value">
              ₹{(metal.price + Math.abs(metal.change) * 2).toLocaleString('en-IN')}
            </span>
          </div>
          <div className="info-item">
            <span className="info-label">24H Low:</span>
            <span className="info-value">
              ₹{(metal.price - Math.abs(metal.change) * 2).toLocaleString('en-IN')}
            </span>
          </div>
        </div>
      </div>
      
      <div className="detail-section">
        <h3>Projected Prices</h3>
        <div className="projection-cards">
          <div className="projection-card">
            <h4>7-Day Forecast</h4>
            <div className={`projection-price ${isPositive ? 'positive' : 'negative'}`}>
              ₹{(metal.price * (1 + (metal.changePercent / 100) * 7)).toFixed(1)}
            </div>
          </div>
          <div className="projection-card">
            <h4>30-Day Forecast</h4>
            <div className={`projection-price ${isPositive ? 'positive' : 'negative'}`}>
              ₹{(metal.price * (1 + (metal.changePercent / 100) * 30)).toFixed(1)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MetalDetail;