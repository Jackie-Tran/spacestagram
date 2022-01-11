import React, { useState } from 'react';
import {
  FilterOptionContainer,
  FilterOptionName,
  OptionsWrapper,
} from './FilterOption.styled';

export type FilterOptionProps = {
  filterName: string;
  options?: Record<string, string>;
};

const FilterOption: React.FC<FilterOptionProps> = ({
  filterName,
  options = {},
}) => {
  const [selected] = useState<string>();
  console.log(selected);
  console.log(filterName, options);
  return (
    <FilterOptionContainer>
      <FilterOptionName>{filterName}</FilterOptionName>
      <OptionsWrapper>
        {Object.entries(options).map(([key, value]) => (
          <label key={key} htmlFor={value}>
            <input id={value} type="radio" name={filterName} value={value} />
            {key}
          </label>
        ))}
      </OptionsWrapper>
    </FilterOptionContainer>
  );
};

export default FilterOption;
