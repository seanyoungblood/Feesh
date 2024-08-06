import React, { useState } from 'react';
import axios from 'axios';

function PredictTime() {
  const [formData, setFormData] = useState({
    spot: '',
    month: '',
    wtemp: '',
    sky: '',
    windd: '',
    level: 'N',
    dir: 'N',
    color: ''
  });
  const [response, setResponse] = useState(null);
  const labelMapping = {
    spot: 'Spot',
    time: 'Time of Day',
    month: 'Month',
    atemp: 'Air Temperature',
    wtemp: 'Water Temperature',
    sky: 'Sky Condition',
    hum: 'Humidity*',
    windd: 'Wind Direction',
    winds: 'Wind Speed',
    level: 'Tide Level*',
    dir: 'Tide Direction*',
    color: 'Water Color'
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('https://FeeshFlask.onrender.com/predictTime', formData)
      .then((res) => setResponse(res.data.result))
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <h1>Predict Time</h1>
      <p>Make sure to enter ALL required fields</p>
      <form onSubmit={handleSubmit}>
        {Object.keys(formData).map((key) => (
        key !== 'spot' && key !== 'month' && key !== 'sky' && key !== 'hum' && key !== 'windd' && key !== 'dir' && key !== 'level' && key !== 'color' ? (
          <div key={key}>
            <label>
              {labelMapping[key]}:
              <input
                type="text"
                name={key}
                value={formData[key]}
                onChange={handleChange}
              />
            </label>
          </div>
        ) : key === 'sky' ? (
            <div key={key}>
              <label>
                {labelMapping[key]}:
                <select name={key} value={formData[key]} onChange={handleChange}>
                  <option value="">Select</option>
                  <option value="SUN">Sunny</option>
                  <option value="PSUN">Partly Sunny</option>
                  <option value="PCLD">Partly Cloudy</option>
                  <option value="CLD">Cloudy</option>
                  <option value="RAIN">Rainy</option>
                </select>
              </label>
            </div>
        ) : key === 'spot' ? (
            <div key={key}>
              <label>
                {labelMapping[key]}:
                <select name={key} value={formData[key]} onChange={handleChange}>
                  <option value="">Select</option>
                  <option value="Backcountry">Backcountry</option>
                  <option value="Beach">Beach</option>
                  <option value="Bridge">Bridge</option>
                  <option value="Creek">Creek</option>
                  <option value="Docks">Docks</option>
                  <option value="Dropoff">Dropoff</option>
                  <option value="Flats">Flats</option>
                  <option value="Inlet">Inlet</option>
                  <option value="Island">Island</option>
                  <option value="Pass">Pass</option>
                  <option value="Pier">Pier</option>
                  <option value="Shoreline">Shoreline</option>
                  <option value="Spillway">Spillway</option>
                </select>
              </label>
            </div>
        ) : key === 'month' ? (
            <div key={key}>
              <label>
                {labelMapping[key]}:
                <select name={key} value={formData[key]} onChange={handleChange}>
                  <option value="">Select</option>
                  <option value="Jan">January</option>
                  <option value="Feb">Febuary</option>
                  <option value="March">March</option>
                  <option value="April">April</option>
                  <option value="May">May</option>
                  <option value="June">June</option>
                  <option value="July">July</option>
                  <option value="Aug">August</option>
                  <option value="Sep">September</option>
                  <option value="Oct">October</option>
                  <option value="Nov">November</option>
                  <option value="Dec">December</option>
                </select>
              </label>
            </div>
          ) : key === 'windd' ? (
            <div key={key}>
              <label>
                {labelMapping[key]}:
                <select name={key} value={formData[key]} onChange={handleChange}>
                  <option value="">Select</option>
                  <option value="N">N</option>
                  <option value="NE">NE</option>
                  <option value="E">E</option>
                  <option value="SE">SE</option>
                  <option value="S">S</option>
                  <option value="SW">SW</option>
                  <option value="W">W</option>
                  <option value="NW">NW</option>
                </select>
              </label>
            </div>
        ) : key === 'level' ? (
            <div key={key}>
              <label>
                {labelMapping[key]}:
                <select name={key} value={formData[key]} onChange={handleChange}>
                  <option value="N">Select</option>
                  <option value="High">High</option>
                  <option value="Low">Low</option>
                  <option value="N">N/A</option>
                </select>
              </label>
            </div>
        ) : key === 'color' ? (
            <div key={key}>
              <label>
                {labelMapping[key]}:
                <select name={key} value={formData[key]} onChange={handleChange}>
                  <option value="">Select</option>
                  <option value="Clear">Clear</option>
                  <option value="SDis">Stained</option>
                  <option value="Murky">Murky</option>
                </select>
              </label>
            </div>
        ) : (
            <div key={key}>
              <label>
                {labelMapping[key]}:
                <select name={key} value={formData[key]} onChange={handleChange}>
                  <option value="N">Select</option>
                  <option value="Rising">Rising</option>
                  <option value="Falling">Falling</option>
                  <option value="Slack">Slack</option>
                  <option value="N">N/A</option>
                </select>
              </label>
            </div>
          )
        ))}
        <p>optional field*</p>
        <button type="submit">Submit</button>
      </form>
      {response && (
        <div>
          <h2>Prediction Results:</h2>
          <ul>
            {response.map((res, index) => (
              <li key={index}>{res}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default PredictTime;
