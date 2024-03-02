import React, { useState } from 'react';


export const App = () => {
  const [dealName, setDealName] = useState('');

  const handleDealNameChange = (e) => {
    setDealName(e.target.value);
  };

  const createDeal = async () => {
    try {
      const response = await fetch('https://api.pipedrive.com/v1/deals', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.REACT_APP_PIPEDRIVE_API_KEY}`,
        },
        body: JSON.stringify({
          title: dealName,
          // Other deal properties...
        }),
      });

      if (response.ok) {
        console.log('Deal created successfully!');
      } else {
        console.error('Error creating deal:', response.statusText);
      }
    } catch (error) {
      console.error('Error creating deal:', error);
    }
  };

  return (
    <div className="App">
      <h1>Create a New Deal</h1>
      <input
        type="text"
        placeholder="Deal Name"
        value={dealName}
        onChange={handleDealNameChange}
      />
      <button onClick={createDeal}>Create Deal</button>
    </div>
  );
}
