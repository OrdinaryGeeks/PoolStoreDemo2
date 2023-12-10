import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import agent from "../structure/Client";
import { Location } from "../Models/Location";

interface LocationState {
  locations: Location[] | null;
  newLocation: Location;
}

const initialState: LocationState = {
  locations: [],
  newLocation:{ locationId:0,
    streetAddress:"",
    city:"",
    state:"",
    name:"",
    locationImageURL:"",
    phoneNumber:"",}
};

export const getLocations = createAsyncThunk<Location[]>(
  "location/getLocations",
  async (_, thunkAPI) => {
    try {
      return await agent.Location.listLocations();
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error });
    }
  }
);

export const createLocation = createAsyncThunk<Location, Location>(
  "location/createLocation",
  async (location, thunkAPI) => {
    try {
      return await agent.Location.createLocation(location);
    }catch (error) {
      return thunkAPI.rejectWithValue({ error: error });
    }
  }
);

export const locationSlice = createSlice({
  name: "location",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getLocations.rejected, (state) => {
      state.locations = null;
    });
    builder.addCase(getLocations.fulfilled, (state, action) => {
      if (state && state.locations) {
        state.locations = action.payload;
      }
    });
    builder.addCase(createLocation.fulfilled, (state, action) => {
      //just return the item

      if(state && state.newLocation){
        state.newLocation = action.payload;
      }

    });
    builder.addCase(createLocation.rejected, (state) => {
      state.newLocation = { locationId:0,
        streetAddress:"",
        city:"",
        state:"",
        name:"",
        locationImageURL:"",
        phoneNumber:"",}
    });
  },
});
