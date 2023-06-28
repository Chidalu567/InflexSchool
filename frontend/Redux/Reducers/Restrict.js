import { createSlice } from "@reduxjs/toolkit";
/**
 * The Restrict Reducer
 * This Reducer sets the action for the tags for each student. It could be Allowed or Disallow.
 */

const restrictSlice = createSlice({
  name: "restrict",
  initialState: {
    freedom: "ALLOWED",
  },
  reducers: {
    /**
     *
     * @param {string} state
     * @param {object} action data passed
     */
    Restrict_Action(state, action) {
      console.log(action);
      state.freedom = action.payload;
    },

    UnRestrict_Action(state, action) {
      state.freedom = action.payload;
    },
  },
});

//export action
export const { Restrict_Action, UnRestrict_Action } = restrictSlice.actions;

// export reducer
export default restrictSlice.reducer;
