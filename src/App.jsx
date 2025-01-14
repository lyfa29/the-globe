import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CountryDetail from "./pages/CountryDetail";
import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import EachCountry from "./components/EachCountry";

function App() {
  const [allCountries, setAllCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  // ============= FETCH API =============
  // useState(); it is used to add state to a functional component.. it is a way to store and update the value (like variables) inside your component

  // useEffect(); this is used to handle side effect in your component.. such effects includes things like fetching data, updating the UI.. it runs after the component renders

  // ============ FETCHING API ==============
  // async and await stalls your block of code for network to load data completely

  useEffect(() => {
    const getData = async () => {
      const fetchAPI = await fetch("https://restcountries.com/v3.1/all");
      //  convert api to json see below

      const jsonAPI = await fetchAPI.json();

      console.log(jsonAPI);
      setAllCountries(jsonAPI);
      setLoading(false);
    };
    setTimeout(() => {
      getData();
    }, 3000);
    // you evoke a funtion outside the function and not inside
  }, []);

  // ================= FILTER BY SEARCH ==================
  const filterBySearch = (input) => {
    const searchedCountries = allCountries.filter((country) => {
      return country.name.common.toLowerCase().includes(input);
    });
    setFilteredCountries(searchedCountries);
  };

  // ================= FILTER BY REGION ==================
  const filterByRegion = (continent) => {
    const selectedRegion = allCountries.filter((EachCountry) => {
      return EachCountry.region === continent;
    });

    setFilteredCountries(selectedRegion);
  };

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          {/* move all countries to homepage */}
          <Route
            path="/"
            element={
              <HomePage
                allCountries={
                  filteredCountries.length > 0
                    ? filteredCountries
                    : allCountries
                }
                filterBySearch={filterBySearch}
                filterByRegion={filterByRegion}
                loading={loading}
                // we did a prop drilling here and in all countries
              />
            }
          />
          <Route path="/:countryName" element={<CountryDetail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
