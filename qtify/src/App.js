import { StyledEngineProvider } from "@mui/material";
import Navbar from "./components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchNewAlbums, fetchSongs, fetchTopAlbums } from "./api/api";

function App() {

  // const [searchData, setSearchData] = useState()
  const [data, setData] = useState({});
  
  const generateData = (key, source) => {
    source().then((data) => {
      setData((prevData) => {
        return {...prevData, [key]: data};
      })
    })
  }

  useEffect(() => {
      generateData("topAlbums", fetchTopAlbums)
      generateData("newAlbums", fetchNewAlbums)
      // generateData("songs", fetchSongs)
  }, []);
  const {topAlbums = [], newAlbums = [], songs = []} = data

  return (
    <>
      <StyledEngineProvider injectFirst >
      <Navbar 
        placeholder={"Search a album of your choice"} 
        searchData={[...topAlbums,...newAlbums]}
      />
      <Outlet context={{ data: {topAlbums, newAlbums, songs}}}/>
      </StyledEngineProvider>
    </>
  );
}

export default App;
