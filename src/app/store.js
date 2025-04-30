import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { usersApi } from "../services/users";

export const store = configureStore ({
    reducer: {
        [usersApi.reducerPath]: usersApi.reducer

    },
    middleware:(getDefaultMiddeware) => getDefaultMiddeware().concat(usersApi.middleware)
});

setupListeners(store.dispatch);
