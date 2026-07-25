import axios from "axios";

export let getData = async () => {
  console.log("api wala function chala...");

  let res = await axios.get("https://fakestoreapi.com/users");

  console.log(res.data);
};
