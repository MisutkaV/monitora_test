import React from 'react';
import styled from 'styled-components';
import FilterButton from './buttons/FilterButton';

const FilterContainer = styled.div`
  text-align: center;
`;

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
    <FilterContainer>
      {filterButtons.map(({ label, action, icon }, index) => (
        <FilterButton
          key={index}
          $primary={activeFilter === action}
          label={label}
          onClick={() => handleFilterChange(action)}
          icon={icon}
        />
      ))}
    </FilterContainer>
  );
};

export default DataFilter;