import React from 'react';
import FilterButton from './buttons/FilterButton';

interface FilterButtonData {
  label: string;
  action: string;
  icon: string;
}

interface DataFilterProps {
  handleFilterChange: (newFilter: string) => void;
  activeFilter: string;
}

const filterButtons: FilterButtonData[] = [
  { label: 'Vše', action: 'all', icon: '/filter/users.svg' },
  { label: 'Nadprůměr', action: 'aboveAvg', icon: '/filter/chart-diagram.svg' },
  { label: 'Podprůměr', action: 'belowAvg', icon: '/filter/chart-decrease.svg' },
];

const DataFilter: React.FC<DataFilterProps> = ({ handleFilterChange, activeFilter }) => {
  return (
    <div className='text-center'>
      {filterButtons.map(({ label, action, icon }, index) => (
        <FilterButton
          key={index}
          $primary={activeFilter === action}
          label={label}
          onClick={() => handleFilterChange(action)}
          icon={icon}
        />
      ))}
    </div>
  );
};

export default DataFilter;