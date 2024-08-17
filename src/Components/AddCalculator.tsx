import React, { useState } from 'react';
import add from '../utils/add';

const AddCalculator: React.FC = () => {
  const [input, setInput] = useState<string>('');
  const [result, setResult] = useState<number | string>('');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const calculatedResult = add(input);
      setResult(calculatedResult);
      setError(null);
    } catch (e: unknown) {
      if (e instanceof Error) {
        setError(e.message);
      } else {
        setError('An unexpected error occurred.');
      }
      setResult('');
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  return (
    <div className="calculator-container">
      <h1 className="title">String Calculator</h1>
      <form onSubmit={handleSubmit} className="form">
        <div className="input-container">
          <label htmlFor="numbers" className="input-label">
            Enter numbers:
          </label>
          <input
            id="numbers"
            type="text"
            value={input}
            onChange={handleChange}
            className="input-field"
            placeholder='Enter numbers (e.g., "1,2\n3")'
          />
        </div>
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
      <div className="result-container">
        {error && <p className="error-message">{error}</p>}
        {result !== '' && !error && <p className="result-message">Result: {result}</p>}
      </div>
    </div>
  );
};

export default AddCalculator;
