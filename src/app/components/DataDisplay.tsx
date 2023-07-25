"use client"

import React, { useState } from 'react';
import jsonData from '../data/demographics.json';
import DataFilter from './DataFilter';
import DataCategory from './DataCategory';

// Constant representing the threshold value used for filtering items
const FILTER_THRESHOLD = 3;

interface Item {
  label: string;
  percent: number;
  percent_avg: number;
}

interface Category {
  label: string;
  items: Item[];
}

interface DataDisplayProps {
  initialFilter: string;
}

const DataDisplay: React.FC<DataDisplayProps> = ({ initialFilter }) => {
  const [filter, setFilter] = useState(initialFilter);

  const handleFilterChange = (newFilter: string) => {
    setFilter(newFilter);
  };

  const filterData = (data: Category[], condition: (item: Item) => boolean) => {
    return data.map((category) => ({
      ...category,
      items: category.items.filter(condition),
    }));
  };

  const filteredData = () => {
    switch (filter) {
      case 'aboveAvg':
        return filterData(jsonData.data, (item) => item.percent > item.percent_avg + FILTER_THRESHOLD);
      case 'belowAvg':
        return filterData(jsonData.data, (item) => item.percent < item.percent_avg - FILTER_THRESHOLD);
      default:
        return jsonData.data;
    }
  };

  return (
    <div>
      <DataFilter handleFilterChange={handleFilterChange} activeFilter={filter} />
      {filteredData().map((category, index) => (
        category.items.length > 0 && <DataCategory key={index} category={category} />
      ))}
    </div>
  );
};

export default DataDisplay;