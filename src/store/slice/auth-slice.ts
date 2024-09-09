import API from "@/services/API";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { AxiosError } from "axios";

export interface UserState {
  first_name: string;
  last_name: string;
  email: string;
}

interface LoginCredential {
  email: string;
  password: string;
}

export interface AuthState {
  user: UserState | null;
  loading: boolean;
  error: AxiosError | null | string;
  isAuthenticated: boolean;
}

const initialState: AuthState = {
  user: null,
  loading: false,
  error: null,
  isAuthenticated: false,
};

export const login = createAsyncThunk(
  "auth/login",
  async (credential: LoginCredential, thunkAPI) => {
    try {
      const response = await API.post("/users/login", credential);
      const accessToken = response.headers["access_token"];
      const refreshToken = response.headers["refresh_token"];

      console.log("access_token", accessToken);
      console.log("refresh_token", refreshToken);

      if (accessToken && refreshToken) {
        localStorage.setItem("access_token", accessToken);
        localStorage.setItem("refresh_token", refreshToken);
      }
      return response.data;
    } catch (error: unknown) {
      // Changed AxiosError to unknown
      if (error instanceof AxiosError) {
        // Type guard to check if error is an instance of AxiosError
        return thunkAPI.rejectWithValue(error.response?.data);
      }
      // Handle any other types of errors or re-throw if you don't want to handle them here
      throw error; // or return thunkAPI.rejectWithValue("An unexpected error occurred");
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      console.log(">>>>>>>>>>>>>>>");

      localStorage.removeItem("access_token");
      localStorage.removeItem("refresh_token");
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      login.fulfilled,
      (state, action: PayloadAction<UserState>) => {
        state.user = action.payload;
        state.loading = false;
        state.error = null;
      }
    );
    builder.addCase(login.rejected, (state, action) => {
      state.user = null;
      state.loading = false;
      state.error = action.payload as string;
    });
    builder.addCase(login.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
  },
});

export const { actions: authAction } = authSlice;

export default authSlice;
