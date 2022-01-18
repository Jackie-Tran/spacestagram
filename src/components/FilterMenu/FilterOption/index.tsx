import React, { Dispatch, SetStateAction } from 'react';
import dateUtils from '../../../utils/dateUtils';
import {
  DatePicker,
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
  inputType?: React.HTMLInputTypeAttribute;
};

const FilterOption: React.FC<FilterOptionProps> = ({
  filterName,
  options = {},
  currentFilter,
  setFilter,
  inputType = 'radio',
}) => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
  };
  return (
    <FilterOptionContainer>
      <FilterOptionName>{filterName}</FilterOptionName>
      <OptionsWrapper>
        {inputType === 'date' ? (
          <DatePicker
            type={inputType}
            id="captureDate"
            name="capture-date"
            max={dateUtils.formatDate(new Date())}
            value={currentFilter}
            onChange={onChange}
          />
        ) : (
          Object.entries(options).map(([key, value]) => (
            <FilterLabel key={key} htmlFor={value}>
              <RadioButton
                id={value}
                type={inputType}
                name={filterName}
                value={value}
                onChange={onChange}
                checked={value === currentFilter}
              />
              {key}
            </FilterLabel>
          ))
        )}
      </OptionsWrapper>
    </FilterOptionContainer>
  );
};

export default FilterOption;
