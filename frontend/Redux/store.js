import { configureStore } from "@reduxjs/toolkit";
import Restrict_Reducer from "./Reducers/Restrict";

export default configureStore({
  reducer: {
    restrict: Restrict_Reducer,
  },
});
