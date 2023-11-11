import { createSlice } from "@reduxjs/toolkit";
import { addComment } from "../thunks/addComments";
import { fetchComments } from "../thunks/fetchComments";

const commentsSlice = createSlice({
  name: "comment",
  initialState: {
    commentsData: [],
    commentsLoading: false,
    commentsError: null,
    addCommentData: [],
    addCommentLoading: false,
    addCommentError: null,
  },
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchComments.pending, (state, action) => {
      state.commentsLoading = true;
    });
    builder.addCase(fetchComments.fulfilled, (state, action) => {
      state.commentsLoading = false;
      state.commentsData = action.payload;
    });
    builder.addCase(fetchComments.rejected, (state, action) => {
      state.commentsLoading = false;
      state.commentsError = action.error;
    });
    builder.addCase(addComment.pending, (state, action) => {
      state.addCommentLoading = true;
    });
    builder.addCase(addComment.fulfilled, (state, action) => {
      state.addCommentLoading = false;
      state.addCommentData = action.payload;
    });
    builder.addCase(addComment.rejected, (state, action) => {
      state.addCommentLoading = false;
      state.addCommentError = action.error;
    });
  },
});

export const commentsReducer = commentsSlice.reducer;
