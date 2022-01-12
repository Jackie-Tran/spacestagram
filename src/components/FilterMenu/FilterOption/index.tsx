import React, { Dispatch, SetStateAction } from 'react';
import {
  FilterLabel,
  FilterOptionContainer,
  FilterOptionName,
  OptionsWrapper,
  RadioButton,
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
  currentFilter,
  setFilter,
}) => {
  const onSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
  };
  return (
    <FilterOptionContainer>
      <FilterOptionName>{filterName}</FilterOptionName>
      <OptionsWrapper>
        {Object.entries(options).map(([key, value]) => (
          <FilterLabel key={key} htmlFor={value}>
            <RadioButton
              id={value}
              type="radio"
              name={filterName}
              value={value}
              onChange={onSelect}
              checked={value === currentFilter}
            />
            {key}
          </FilterLabel>
        ))}
      </OptionsWrapper>
    </FilterOptionContainer>
  );
};

export default FilterOption;
