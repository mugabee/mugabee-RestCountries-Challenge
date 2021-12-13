import axios from 'axios';
import { createContext, useEffect, useState } from 'react';

export const CountriesContext = createContext();

const CountriesProvider = ({ children }) => {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [searchedCountry, setsearchCountry] = useState();
  const [visitedCountries, setVisitedCountry] = useState([]);
  const [planning, setPlanning] = useState([]);

  useEffect(() => {
    try {
      const getData = async () => {
        const response = await axios.get(`https://restcountries.com/v3.1/all`);
        const data = response.data.map((country) => {
          return { ...country, visited: false, planning: false };
        });
        setCountries(data);
      };

      getData();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const getCountriesByRegion = (region) => {
    console.log(region);
    setFilteredCountries(
      countries.filter((country) => country.region.toLowerCase() === region)
    );
  };

  const addToVisited = (country) => {
    console.log('new country', country);
    setVisitedCountry([...visitedCountries, country]);
    console.log('visited', visitedCountries);
  };

  const addToPlanning = (country) => {
    setPlanning([...planning, country]);
    console.log(planning);
  };

  const getCountriesByName = async (name) => {
    if (name === '') {
    } else {
      try {
        const response = await axios.get(
          `https://restcountries.com/v3.1/name/${name}`
        );
        if (response) {
          console.log(response);
          setsearchCountry(response.data);
          console.log(searchedCountry);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  const toggleVisited = (name) => {
    setVisitedCountry(
      visitedCountries.map((country) =>
        country.name === name
          ? { ...country, visited: !country.visited }
          : country
      )
    );
  };

  const value = {
    countries,
    planning,
    getCountriesByRegion,
    toggleVisited,
    visitedCountries,
    setVisitedCountry,
    setPlanning,
    addToPlanning,
    addToVisited,
    getCountriesByName,
    filteredCountries,
    searchedCountry,
  };
  return (
    <CountriesContext.Provider value={value}>
      {children}
    </CountriesContext.Provider>
  );
};

export default CountriesProvider;
