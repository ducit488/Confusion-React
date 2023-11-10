import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const fetchDishes = createAsyncThunk("dishes/fetch", async () => {
  const response = await axios.get("http://localhost:3005/dishes");
  return response.data;
});

export { fetchDishes };
