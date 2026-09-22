import React from 'react';

export default function PopulationStepper({ minPopulation, setMinPopulation, isDark }) {
  const step = 1000000;

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
      <label>Мінімальне населення:</label>
      <button 
        onClick={() => setMinPopulation(Math.max(0, minPopulation - step))}
        style={{ padding: '6px 12px', cursor: 'pointer' }}
      >
        - 1М
      </button>
      <span>{minPopulation.toLocaleString()}</span>
      <button 
        onClick={() => setMinPopulation(minPopulation + step)}
        style={{ padding: '6px 12px', cursor: 'pointer' }}
      >
        + 1М
      </button>
    </div>
  );
}