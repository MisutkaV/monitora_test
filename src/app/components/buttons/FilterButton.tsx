import React from 'react';
import styled, { css } from 'styled-components';
import Image from 'next/image';

const Button = styled.button<{ $primary?: boolean }>`
  background: #f5f7f9;
  border-radius: 30px;
  color: #000;
  margin: 0 .5em 1em 0;
  padding: 0 1.25em 0 0;
  border: none;
  cursor: pointer;

  ${(props) =>
    props.$primary &&
    css`
      background: #40bae2;
      color: white;
    `}
`;

const PrefixButton = styled.div`
  background: #f5f7f9;
  color: #fff;
  text-align: center;
  width: 31px;
  padding: 5px;
  display: inline-block;
  margin-right: 10px;
  border-radius: 20px 0 0 20px;
  font-size: 12px;
  font-weight: bold;
`;

const ImageContainer = styled.span`
  display: inline-flex;
  padding: 5px;
  vertical-align: middle;
  background: #40bae2;
  border-radius: 30px;
  margin-right: 5px;
`;

interface FilterButtonProps {
  label: string;
  onClick?: () => void;
  icon?: string | undefined;
  $primary?: boolean;
  prefix?: string | undefined;
  prefixColor?: string | undefined;
}

const FilterButton: React.FC<FilterButtonProps> = ({ label, onClick, icon, $primary, prefix, prefixColor }) => {
  return (
    <Button onClick={onClick} $primary={$primary}>
      {icon && (
        <ImageContainer>
          <Image src={icon} width={15} height={15} alt={label} />
        </ImageContainer>
      )}
      {prefix && (
        <PrefixButton style={{background: prefixColor}}>{prefix}</PrefixButton>
      )}
      {label}
    </Button>
  );
};

export default FilterButton;
