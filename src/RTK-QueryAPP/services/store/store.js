import { configureStore} from "@reduxjs/toolkit";
import { pokemonApi } from "../pokemon";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

export const store = configureStore({
    reducer : {
        [pokemonApi.reducerPath] : pokemonApi.reducer
    },
    middleware : (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(pokemonApi.middleware)
    }
})

setupListeners(store.dispatch)