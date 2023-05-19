import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosAPI } from "./Axios-method";




export const AddBlogApi = createAsyncThunk ("blogs/AddBlogApi", async ({createblog, navigate})=>{
    console.log(createblog);
      const result = await axiosAPI.post("/blog/create",createblog)
      console.log(result);
      navigate("/");
  
  }
  )
  export const allBlogApi = createAsyncThunk(
    "blogs/allBlogApi",
    async () => {
      const response = await axiosAPI.get("/blog");
      console.log(response);
      return response.data;
    }
  );

  const initialState = {
  
    blogs: "",
    allblogs:{}
}


  const BlogSlice = createSlice({
    name:"blogs",
    initialState,
    reducers: {},
    extraReducers: {
        [AddBlogApi.pending]: () => {
            console.log("data submission pending");
          },
          [AddBlogApi.fulfilled]: (state, action) => {
            state.blogs = action.payload;
            console.log("submission fulfilled");
          },
          [AddBlogApi.rejected]: () => {
            console.log("submission rejected");
          },
    //all view

          [allBlogApi.pending]: () => {
            console.log("data submission pending");
          },
          [allBlogApi.fulfilled]: (state, action) => {
            state.allblogs = action.payload;
            console.log("submission fulfilled");
          },
          [allBlogApi.rejected]: () => {
            console.log("submission rejected");
          },
        }
  })
  
  export default BlogSlice.reducer;