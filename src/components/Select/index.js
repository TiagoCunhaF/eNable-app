import React, { useRef, useEffect } from 'react';

import { useField } from '@rocketseat/unform';
import Select from 'react-select';

export default function ReactSelect({
  name,
  label,
  options,
  multiple,
  ...rest
}) {
  const ref = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);

  function parseSelectValue(selectValue) {
    if (!multiple) {
      return selectValue ? selectValue.id : '';
    }

    return selectValue ? selectValue.map(option => option.id) : [];
  }

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: ref.current,
      path: 'state.value',
      parseValue: parseSelectValue,
      clearValue: selectRef => {
        selectRef.select.clearValue();
      },
    });
  }, [ref.current, fieldName]); // eslint-disable-line

  function getDefaultValue() {
    if (!defaultValue) return null;

    if (!multiple) {
      return options.find(option => option.id === defaultValue);
    }

    return options.filter(option => defaultValue.includes(option.id));
  }

  const CustomStyle = {
    input: style => ({
      ...style,
      height: 44,
      color: '#fff',
      margin: '0 0 0 8px',
      padding: 0,
    }),
    placeholder: style => ({
      ...style,
      color: 'rgba(255, 255, 255, 0.4)',
      margin: '0 0 0 8px',
    }),
    singleValue: style => ({
      ...style,
      color: '#fff',
      margin: '0 0 0 8px',
    }),
    menu: style => ({
      ...style,
      marginTop: -5,
    }),
    option: style => ({ ...style }),
    indicatorSeparator: style => ({
      ...style,
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
    }),
    dropdownIndicator: style => ({
      ...style,
      '&:hover': {
        color: 'rgba(255, 255, 255, 0.5)',
      },
    }),
    control: style => ({
      ...style,
      backgroundColor: 'rgba(0, 0, 0, 0.1)',
      border: 0,
      borderRadius: 4,
      height: 44,
      padding: 0,
      color: '#fff',
      margin: '0 0 10px',
    }),
  };

  return (
    <>
      {label && <label htmlFor={fieldName}>{label}</label>}

      <Select
        name={fieldName}
        aria-label={fieldName}
        options={options}
        isMulti={multiple}
        defaultValue={getDefaultValue()}
        ref={ref}
        getOptionValue={option => option.id}
        getOptionLabel={option => option.title}
        styles={CustomStyle}
        {...rest}
      />

      {error && <span>{error}</span>}
    </>
  );
}
