import { configureStore } from "@reduxjs/toolkit"
import counterSlice from "./slice/counter-slice"

export const store = configureStore({
    reducer: {
        counter: counterSlice.reducer
    }
});

// Export the inferred types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;