import React from 'react';
import styled from 'styled-components';
import DataList from './DataList';

const DataContainer = styled.div`
  margin-bottom: 50px;
`;

interface Item {
  label: string;
  percent: number;
  percent_avg: number;
}

interface Category {
  label: string;
  items: Item[];
}

interface DataCategoryProps {
  category: Category;
}

const DataCategory: React.FC<DataCategoryProps> = ({ category }) => {
  return (
    <DataContainer>
      <h2>{category.label}</h2>
      <DataList items={category.items} />
    </DataContainer>
  );
};

export default DataCategory;