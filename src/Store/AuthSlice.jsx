import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosAPI } from "./Axios-method";



export const SignupApi = createAsyncThunk ("auth/SignupApi", async (register, navigate)=>{
  console.log(register);
    const result = await axiosAPI.post("/user/signup",register)
    console.log(result);
    navigate("/");

}
)


export const LoginApi = createAsyncThunk ("auth/LoginApi", async (login, navigate)=>{
  console.log(login);
    const result = await axiosAPI.post("/user/login",login)
    console.log(result);
    navigate("/");

}
)

const initialState = {
  
    token: "",
}
const authSlice = createSlice({
    name :"auth",
    initialState,
    reducers :  {},
    extraReducers : {
        [LoginApi.pending]: (state, action) => {
            console.log("login pending");
          },
          [LoginApi.fulfilled]: (state, action) => {
            state.token = action.payload.token;
            console.log("login fullfilled");
            // toast.success("login success", { autoClose: 1000 })
          },
          [LoginApi.rejected]: (state, action) => {
            console.log("login rejected");
            // toast.error("login failed", { autoClose: 1000 });
          },
          [SignupApi.pending]: (state, action) => {
            console.log("signup pending");
          },
          [SignupApi.fulfilled]: (state, action) => {
            // state.token = action.payload.token;
            console.log("signup fullfilled");
            // toast.success("login success", { autoClose: 1000 })
          },
          [SignupApi.rejected]: (state, action) => {
            console.log("signup rejected");
            // toast.error("login failed", { autoClose: 1000 });
          },
    }
})
export default authSlice.reducer;