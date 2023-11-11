import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const addFeedback = createAsyncThunk("feedbacks/add", async (feedback) => {
  const response = await axios.post(
    "http://localhost:3005/feedbacks",
    feedback
  );

  return response;
});

export { addFeedback };
