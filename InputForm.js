import React, { useState } from 'react';
import axios from 'axios';

const InputForm = () => {
    const [jsonInput, setJsonInput] = useState('');
    const [response, setResponse] = useState(null);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try {
            const parsedInput = JSON.parse(jsonInput);
            const res = await axios.post('http://127.0.0.1:8000/api/bfhl/', parsedInput);
            setResponse(res.data);
        } catch (err) {
            setError('Invalid JSON input or error from server');
        }
    };

    return (
        <div>
            <h1>Your Roll Number</h1>
            <form onSubmit={handleSubmit}>
                <textarea
                    rows="4"
                    cols="50"
                    value={jsonInput}
                    onChange={(e) => setJsonInput(e.target.value)}
                    placeholder='{"data": ["A", "C", "z"]}'
                />
                <button type="submit">Submit</button>
            </form>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {response && <pre>{JSON.stringify(response, null, 2)}</pre>}
        </div>
    );
};

export default InputForm;
