// src/MultiSelectDropdown.js
import React from 'react';
import Select from 'react-select';
import './MultiSelectDropdown.css';

const options = [
    { value: 'alphabets', label: 'Alphabets' },
    { value: 'numbers', label: 'Numbers' },
    { value: 'highest_lowercase', label: 'Highest Lowercase Alphabet' }
];

const MultiSelectDropdown = ({ selectedOptions, setSelectedOptions }) => {
    const handleChange = (selected) => {
        setSelectedOptions(selected);
    };

    return (
        <Select
            isMulti
            options={options}
            onChange={handleChange}
            className="basic-multi-select"
            classNamePrefix="select"
        />
    );
};

export default MultiSelectDropdown;
