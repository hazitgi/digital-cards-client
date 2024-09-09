import { configureStore } from "@reduxjs/toolkit"
import counterSlice from "./slice/counter-slice"
import authSlice from "./slice/auth-slice";


export const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        auth: authSlice.reducer,
    }
});

// Export the inferred types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;