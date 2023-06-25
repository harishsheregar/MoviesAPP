import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";
import { fetchDataFromApi } from "./utils/api";
import { useDispatch, useSelector } from "react-redux";
import { getApiConfiguration, getGenres } from "./Store/homeSlice";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import Details from "./Pages/details/Details";
import SearchResult from "./searchResult/SearchResult";
import Explore from "./Pages/explore/Explore";
import PageNotFound from "./Pages/404/PageNotFound";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

function App() {
  const dispatch = useDispatch();
  const { url } = useSelector((state) => state.home);

  useEffect(() => {
    fetchapiConfig();
    genresCall()
  }, []);
  console.log("hhh", url.total_results);
  const fetchapiConfig = () => {
    fetchDataFromApi("/configuration").then((res) => {
      console.log("res", res);
      const url = {
        backdrop: res.images.secure_base_url + "original",
        poster: res.images.secure_base_url + "original",
        profile: res.images.secure_base_url + "original",
      };
      dispatch(getApiConfiguration(url));
    });
  };

  const genresCall = async () => {
    let promises = [];
    let endPoints = ["tv", "movie"];
    let allGenres = {};
    endPoints.forEach((url) => {
      promises.push(fetchDataFromApi(`/genre/${url}/list`));
    });
    const data=await Promise.all(promises)
    console.log(data);
    data.map(({genres})=>{
      return genres.map((item)=>(
        allGenres[item.id]=item
      ))

    })
    dispatch(getGenres(allGenres))
    console.log("allGenres",);
  };

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:mediaType/:id" element={<Details />} />
        <Route path="/search/:query" element={<SearchResult />} />
        <Route path="/explore/:mediaType" element={<Explore />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
