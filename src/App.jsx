import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import MetalTile from './components/MetalTile';
import MetalDetail from './components/MetalDetail';
import LoadingSpinner from './components/LoadingSpinner';
import { fetchMetalPrices, getMetalHistory } from './services/metalApi';
import './styles/App.css';

function App() {
  const [metals, setMetals] = useState([]);
  const [selectedMetal, setSelectedMetal] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadMetalData = async () => {
      try {
        setLoading(true);
        const metalData = await fetchMetalPrices();
        setMetals(metalData);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    loadMetalData();
  }, []);

  const handleMetalSelect = async (metal) => {
    try {
      setLoading(true);
      const historyData = await getMetalHistory(metal.name);
      setSelectedMetal({ ...metal, history: historyData });
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  const handleBackToList = () => {
    setSelectedMetal(null);
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return (
      <div className="app">
        <Header />
        <div className="error-message">
          <p>{error}</p>
          <button onClick={() => window.location.reload()}>Retry</button>
        </div>
      </div>
    );
  }

  return (
    <div className="app">
      <Header />
      <div className="container">
        {selectedMetal ? (
          <MetalDetail 
            metal={selectedMetal} 
            onBack={handleBackToList} 
          />
        ) : (
          <div className="metals-grid">
            {metals.map(metal => (
              <MetalTile 
                key={metal.name} 
                metal={metal} 
                onClick={() => handleMetalSelect(metal)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;