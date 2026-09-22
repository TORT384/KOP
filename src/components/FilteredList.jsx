import React from 'react';

export default function FilteredList({ countries, minPopulation, isDark }) {
  const filtered = countries.filter(
    (country) => country.population >= minPopulation
  );

  const cardStyle = {
    padding: '16px',
    marginBottom: '12px',
    borderRadius: '8px',
    backgroundColor: isDark ? '#2a2a2a' : '#ffffff',
    color: isDark ? '#ffffff' : '#333333',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  return (
    <div>
      <h2>Список країн (населення від {minPopulation.toLocaleString()})</h2>
      {filtered.length === 0 ? (
        <p>Країн із таким населенням не знайдено.</p>
      ) : (
        filtered.map((country) => (
          <div key={country.id} style={cardStyle}>
            <div>
              <strong>{country.name}</strong> — Столиця: {country.capital}
            </div>
            <div>Населення: {country.population.toLocaleString()}</div>
          </div>
        ))
      )}
    </div>
  );
}