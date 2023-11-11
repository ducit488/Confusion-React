import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const fetchPromotions = createAsyncThunk("promotions/fetch", async () => {
  const response = await axios.get("http://localhost:3005/promotions");
  return response.data;
});

export { fetchPromotions };
