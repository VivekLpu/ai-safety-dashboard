
import React, { useState } from 'react';
import FilterSortControls from './FilterSortControls';
import IncidentList from './IncidentList';
import NewIncidentForm from './NewIncidentForm';

const initialIncidents = [
  { id: 1, title: "Biased Recommendation Algorithm", description: "Algorithm consistently favored certain demographics...", severity: "Medium", reported_at: "2025-03-15T10:00:00Z" },
  { id: 2, title: "LLM Hallucination in Critical Info", description: "LLM provided incorrect safety procedure information...", severity: "High", reported_at: "2025-04-01T14:30:00Z" },
  { id: 3, title: "Minor Data Leak via Chatbot", description: "Chatbot inadvertently exposed non-sensitive user metadata...", severity: "Low", reported_at: "2025-03-20T09:15:00Z" },
];

const Dashboard: React.FC = () => {
  const [incidents, setIncidents] = useState(initialIncidents);
  const [filter, setFilter] = useState('All');
  const [sort, setSort] = useState('newest');

  const handleAddIncident = (newIncident: any) => {
    setIncidents([{ ...newIncident, id: incidents.length + 1 }, ...incidents]);
  };

  const filteredIncidents = incidents
    .filter(incident => filter === 'All' || incident.severity === filter)
    .sort((a, b) => {
      if (sort === 'newest') {
        return new Date(b.reported_at).getTime() - new Date(a.reported_at).getTime();
      } else {
        return new Date(a.reported_at).getTime() - new Date(b.reported_at).getTime();
      }
    });

  return (
    <div>
      <FilterSortControls 
        filter={filter} 
        sort={sort} 
        onFilterChange={setFilter} 
        onSortChange={setSort} 
      />
      <IncidentList incidents={filteredIncidents} />
      <NewIncidentForm onAddIncident={handleAddIncident} />
    </div>
  );
};

export default Dashboard;
