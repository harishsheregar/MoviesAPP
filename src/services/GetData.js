import axios from "axios";

const GetData = async () => {
  try {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    return res;
  } catch (err) {
    console.log("error as been displayed");
  }
};
export { GetData };
