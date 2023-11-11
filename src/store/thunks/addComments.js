import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const addComment = createAsyncThunk("comments/add", async (comment) => {
  console.log(comment);
  const response = await axios.post("http://localhost:3005/comments", comment);

  return response;
});

export { addComment };
