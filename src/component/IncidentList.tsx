
import React, { useState } from 'react';

type Incident = {
  id: number;
  title: string;
  description: string;
  severity: string;
  reported_at: string;
};

type Props = {
  incidents: Incident[];
};

const IncidentList: React.FC<Props> = ({ incidents }) => {
  const [expandedIds, setExpandedIds] = useState<number[]>([]);

  const toggleDescription = (id: number) => {
    setExpandedIds(prev =>
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );
  };

  return (
    <div className="incident-list">
      {incidents.map((incident) => (
        <div key={incident.id} className="incident-card">
          <h3>{incident.title}</h3>
          <p><strong>Severity:</strong> {incident.severity}</p>
          <p><strong>Reported:</strong> {new Date(incident.reported_at).toLocaleDateString()}</p>
          <button onClick={() => toggleDescription(incident.id)}>
            {expandedIds.includes(incident.id) ? 'Hide Details' : 'View Details'}
          </button>
          {expandedIds.includes(incident.id) && <p>{incident.description}</p>}
        </div>
      ))}
    </div>
  );
};

export default IncidentList;
