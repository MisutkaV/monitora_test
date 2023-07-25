import React, { useState } from 'react';
import styled from 'styled-components';
import FilterButton from './buttons/FilterButton';

const DataListContainer = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: 50px;
`;

interface Item {
  label: string;
  percent: number;
  percent_avg: number;
}

interface DataListProps {
  items: Item[];
}

const MAX_DISPLAY_ITEMS = 10; // Maximum number of displayed items
const DIFFERENCE_THRESHOLD = 3; // Threshold for color difference

const roundedPercentage = (percentage: number) => {
  return Math.round(percentage);
};

const getPercentageColor = (percent_avg: number, percent: number) => {
  const difference = percent - percent_avg;

  if (Math.abs(difference) <= DIFFERENCE_THRESHOLD) {
    return '#bec8ca';
  } else if (difference > DIFFERENCE_THRESHOLD) {
    return '#e44b4b';
  } else {
    return '#61bfad';
  }
};

const DataList: React.FC<DataListProps> = ({ items }) => {
  const [showAll, setShowAll] = useState(false);

  const toggleShowAll = () => {
    setShowAll((prevShowAll) => !prevShowAll);
  };

  // Get the list that will be displayed - either the complete list or only the first N items
  const visibleItems = showAll ? items : items.slice(0, MAX_DISPLAY_ITEMS);

  return (
    <DataListContainer>
      {visibleItems.map((item, itemIndex) => (
        <li key={itemIndex}>
          <FilterButton
            $primary={false}
            label={item.label}
            prefix={roundedPercentage(item.percent) + '%'}
            prefixColor={getPercentageColor(item.percent, item.percent_avg)}
          />
        </li>
      ))}
       {items.length >= MAX_DISPLAY_ITEMS ? (
        <li>
            <FilterButton 
                $primary={false} 
                label={showAll ? 'Zobrazit méně' : 'Zobrazit další'}
                onClick={toggleShowAll}
                icon={showAll ? '/up.svg' : '/down.svg'}
            />
        </li>
      ) : null}
    </DataListContainer>
  );
};

export default DataList;
