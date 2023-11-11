import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const fetchComments = createAsyncThunk("comments/fetch", async () => {
  const response = await axios.get("http://localhost:3005/comments");
  return response.data;
});

export { fetchComments };
