
import React from 'react';

type Props = {
  filter: string;
  sort: string;
  onFilterChange: (value: string) => void;
  onSortChange: (value: string) => void;
};

const FilterSortControls: React.FC<Props> = ({ filter, sort, onFilterChange, onSortChange }) => {
  return (
    <div className="filters">
      <div className="filter-group">
        <label>Filter:</label>
        <select value={filter} onChange={(e) => onFilterChange(e.target.value)}>
          <option value="All">All</option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
      </div>

      <div className="filter-group">
        <label>Sort:</label>
        <select value={sort} onChange={(e) => onSortChange(e.target.value)}>
          <option value="newest">Newest</option>
          <option value="oldest">Oldest</option>
        </select>
      </div>
    </div>
  );
};

export default FilterSortControls;
