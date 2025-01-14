import React from 'react';
import PropTypes from 'prop-types';

export function TodoFilter({ currentFilter, onFilterChange }) {
  const filters = ['all', 'completed', 'pending'];

  return (
    <div className="flex gap-3 bg-gray-50/50 p-2 rounded-xl">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => onFilterChange(filter)}
          className={`px-6 py-2 rounded-lg capitalize transition-all duration-200 ${
            currentFilter === filter
              ? 'bg-gradient-to-r from-purple-600 to-blue-500 text-white shadow-lg shadow-purple-500/20'
              : 'bg-white/50 text-gray-600 hover:bg-white hover:text-gray-900'
          }`}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}

TodoFilter.propTypes = {
  currentFilter: PropTypes.oneOf(['all', 'completed', 'pending']).isRequired,
  onFilterChange: PropTypes.func.isRequired,
};