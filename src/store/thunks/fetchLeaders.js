import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const fetchLeaders = createAsyncThunk("leaders/fetch", async () => {
  const response = await axios.get("http://localhost:3005/leaders");
  return response.data;
});

export { fetchLeaders };
