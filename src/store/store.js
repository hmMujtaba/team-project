import {configureStore} from "@reduxjs/toolkit"
import ProductSlice from "./slices/productSlices"
export const store = configureStore ({
    reducer: {
products:ProductSlice,
    },
});