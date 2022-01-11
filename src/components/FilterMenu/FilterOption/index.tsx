import React, { Dispatch, SetStateAction } from 'react';
import {
  FilterOptionContainer,
  FilterOptionName,
  OptionsWrapper,
} from './FilterOption.styled';

export type FilterOptionProps = {
  filterName: string;
  options?: Record<string, string>;
  currentFilter?: any;
  setFilter: Dispatch<SetStateAction<string>>;
};

const FilterOption: React.FC<FilterOptionProps> = ({
  filterName,
  options = {},
  setFilter,
}) => {
  const onSelect = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    setFilter(e.currentTarget.value);
  };
  return (
    <FilterOptionContainer>
      <FilterOptionName>{filterName}</FilterOptionName>
      <OptionsWrapper>
        {Object.entries(options).map(([key, value]) => (
          <label key={key} htmlFor={value}>
            <input
              id={value}
              type="radio"
              name={filterName}
              value={value}
              onClick={onSelect}
            />
            {key}
          </label>
        ))}
      </OptionsWrapper>
    </FilterOptionContainer>
  );
};

export default FilterOption;
