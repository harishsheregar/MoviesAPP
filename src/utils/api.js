import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2OWJhZjFiYWUxZGIxNjJmN2Y0MzgzYThmZjQ5MTYxNSIsInN1YiI6IjY0OTI5Y2ExNjVlMGEyMDEyNWY5ZTZiMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8TmxMCN3i6biKbcCt_fnczbeSBDadd7Yx7CzwbMmLmU";

const headers = {
  Authorization: "Bearer" +" "+ TMDB_TOKEN,
};
 export const fetchDataFromApi=async(url,params)=>{
    try{
      console.log("headers",headers);
        const {data}=await axios.get(BASE_URL+url,{
            headers,
            params
        })

        return data;

    }catch(err){
        console.log(err);
        return err

    }

 }