import React, { useState, useEffect } from 'react';
import Select from "react-select";
import makeAnimated from 'react-select/animated';
import { useDispatch } from 'react-redux';
import { filter } from './actions';

const options = [
  { value: 'action', label: 'Action' },
  { value: 'adventure', label: 'Adventure' },
  { value: 'biography', label: 'Biography' },
  { value: 'comedy', label: 'Comedy' },
  { value: 'crime', label: 'Crime' },
  { value: 'drama', label: 'Drama' },
  { value: 'history', label: 'History' },
  { value: 'sport', label: 'Sport' },
  { value: 'mystery', label: 'Mystery' },
  { value: 'thriller', label: 'Thriller' },
  { value: 'scifi', label: 'Scifi' },
];

const GenreFilter = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleOnChange = (value) => {
    //bug with plugin when removing multi with backspace
    if (value === null) {
      value = [];
    }
    setSelectedOptions(value);
  };

  const dispatch = useDispatch();
  useEffect(() => {
    const genres = selectedOptions.map(option => (option.value));
    dispatch(filter(genres));
  }, [selectedOptions]);

  const animatedComponents = makeAnimated();
  
  return (
    <div>
      <Select
        defaultValue={selectedOptions}
        components={animatedComponents}
        isMulti
        onChange={handleOnChange}
        options={options}
        placeholder='Filter by...'
      />
    </div>
  );
}

export default GenreFilter;