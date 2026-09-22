import React, { useState } from 'react';
import { initialKpis, mockCountries } from './data/mockData';
import KpiCard from './components/KpiCard';
import PopulationStepper from './components/PopulationStepper';
import ThemeToggle from './components/ThemeToggle';
import FilteredList from './components/FilteredList';

export default function App() {
  const [theme, setTheme] = useState('light');
  const [minPopulation, setMinPopulation] = useState(0);

  const isDark = theme === 'dark';

  const styles = {
    container: {
      padding: '24px',
      fontFamily: 'sans-serif',
      minHeight: '100vh',
      backgroundColor: isDark ? '#1a1a1a' : '#f4f6f8',
      color: isDark ? '#ffffff' : '#333333',
      transition: 'all 0.3s ease',
    },
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '24px',
    },
    kpiGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '16px',
      marginBottom: '24px',
    },
    controls: {
      marginBottom: '24px',
      padding: '16px',
      backgroundColor: isDark ? '#2a2a2a' : '#ffffff',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    }
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1>Країни — Панель керування</h1>
        <ThemeToggle theme={theme} setTheme={setTheme} />
      </header>

      <section style={styles.kpiGrid}>
        {initialKpis.map((kpi) => (
          <KpiCard key={kpi.id} title={kpi.title} value={kpi.value} isDark={isDark} />
        ))}
      </section>

      <section style={styles.controls}>
        <PopulationStepper 
          minPopulation={minPopulation} 
          setMinPopulation={setMinPopulation} 
          isDark={isDark} 
        />
      </section>

      <main>
        <FilteredList 
          countries={mockCountries} 
          minPopulation={minPopulation} 
          isDark={isDark} 
        />
      </main>
    </div>
  );
}