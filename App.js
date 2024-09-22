// src/App.js
import React, { useState } from 'react';
import MultiSelectDropdown from './MultiSelectDropdown';

const App = () => {
    const [jsonInput, setJsonInput] = useState('');
    const [response, setResponse] = useState(null);
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [title, setTitle] = useState(''); 

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const jsonData = JSON.parse(jsonInput);
            const apiResponse = await fetch('http://127.0.0.1:8000/api/bfhl/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(jsonData),
            });

            if (!apiResponse.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await apiResponse.json();
            setResponse(data);

          
            setTitle('RA2111003010735');
        } catch (error) {
            console.error('Error:', error);
            alert('There was an error processing your request. Please check the input and try again.');
        }
    };

    return (
        <div>
            <h1>{title}</h1> {/* Display the roll number as the title */}
            <form onSubmit={handleSubmit}>
                <textarea
                    value={jsonInput}
                    onChange={(e) => setJsonInput(e.target.value)}
                    placeholder="Enter JSON data"
                />
                <button type="submit">Submit</button>
            </form>
            <MultiSelectDropdown selectedOptions={selectedOptions} setSelectedOptions={setSelectedOptions} />
            {response && (
                <div>
                    <h2>Response</h2>
                    <pre>{JSON.stringify(response, null, 2)}</pre>
                    {/* Render based on selected options */}
                    {selectedOptions.map(option => (
                        <div key={option.value}>
                            <h3>{option.label}</h3>
                            <pre>{JSON.stringify(response[option.value], null, 2)}</pre>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default App;
