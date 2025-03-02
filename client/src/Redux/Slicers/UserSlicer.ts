import { createSlice } from '@reduxjs/toolkit'
import { UserCurrentState } from '../../types/types'

// Define the initial state using that type
const initialState: UserCurrentState = {
  email: "",
  profile: "",
  name: "",
  IsAthenticated: false,
  profilePicture: "",
}

export const UserSlicer = createSlice({
  name: 'USER',
  initialState,
  reducers: {

    Logging: (state, action) => {
      state.email = action.payload.email;
      state.profile = action.payload.profile;
      state.name = action.payload.name;
      state.IsAthenticated = true;
      state.profilePicture = action.payload.profilePicture;
    },
    LogOut: (state) => {
      state.email = "";
      state.profile = "";
      state.name = "";
      state.IsAthenticated = false;
      state.profilePicture = "";
    }
  },
})

export const { Logging, LogOut } = UserSlicer.actions

export default UserSlicer.reducer