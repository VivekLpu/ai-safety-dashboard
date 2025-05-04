
import React, { useState } from 'react';

type Props = {
  onAddIncident: (incident: any) => void;
};

const NewIncidentForm: React.FC<Props> = ({ onAddIncident }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [severity, setSeverity] = useState('Low');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !description) {
      alert('Please fill all fields.');
      return;
    }
    const newIncident = {
      title,
      description,
      severity,
      reported_at: new Date().toISOString()
    };
    onAddIncident(newIncident);
    setTitle('');
    setDescription('');
    setSeverity('Low');
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: '40px' }}>
      <h2>Report New Incident</h2>
      <input 
        type="text" 
        placeholder="Title" 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
        required 
      /><br/><br/>
      <textarea 
        placeholder="Description" 
        value={description} 
        onChange={(e) => setDescription(e.target.value)} 
        required
        rows={4}
      /><br/><br/>
      <label>Severity:</label>
      <select value={severity} onChange={(e) => setSeverity(e.target.value)}>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select><br/><br/>
      <button type="submit">Submit Incident</button>
    </form>
  );
};

export default NewIncidentForm;
