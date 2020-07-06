import React, { useState, useEffect } from "react";
import axios from "axios";
import Databox from './Databox.jsx';
import Input from './Input'
import './Board.css';
import CountryBox from './CountryBox.jsx';

export default function Board() {
  const [data, setData] = useState({});
  const [country, setCountry] = useState({});
  const [isFound, setisFound] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("https://api.covid19api.com/summary");
      setData(result.data.Global);
    };
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    e.persist();
    const country = e.target.elements.inputForm.value;
    const countryList = await axios.get("https://api.covid19api.com/summary")
    const countryListArray = countryList.data.Countries;
    const foundCountry = countryListArray.find(item => item.Country.toLowerCase() === country.toLowerCase())

    if (foundCountry) {
      fetchCountry(country)
      return e.target.reset()
    }
    return setisFound(false)
  }

  const fetchCountry = async (country) => {
    const result = await axios.get(`https://api.covid19api.com/total/country/${country}`);
    const countryData = result.data[result.data.length -1];
    setCountry(countryData);
    setisFound(true)
  }

  
  const dataArray = Object.entries(data).map(([name, value]) => (
    <Databox key={name} value={value} name={name} />
  ));

  return (
  <>
  <div className="country__container">
    <Input handleSubmit={handleSubmit} isFound={isFound} name='inputForm' className="inputForm"/>
    <CountryBox 
      country={country.Country} 
      confirmed={country.Confirmed} 
      deaths={country.Deaths} 
      active={country.Active}  />
      </div>
    <div className="main-board">{dataArray}</div>
    </>
  )
}
