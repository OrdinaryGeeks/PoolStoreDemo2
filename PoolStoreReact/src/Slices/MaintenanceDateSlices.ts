import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import agent from "../structure/Client";
import { MaintenanceDate } from "../Models/MaintenanceDate";

interface MaintenanceDateState {
    maintenanceDates: MaintenanceDate[] | null;
  newMaintenanceDate: MaintenanceDate;
}

const initialState: MaintenanceDateState = {
    maintenanceDates: [],
  newMaintenanceDate:{
  id:0,
  maintenanceManId:0,
  month:0,
  day:0,
  year:0,
  hour:0,
  }
}

export const getMaintenanceDates= createAsyncThunk<MaintenanceDate[]>(
  "maintenanceDates/getMaintenanceDates",
  async (_, thunkAPI) => {
    try {
      return await agent.MaintenanceDate.listMaintenanceDates();
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error });
    }
  }
);

export const createMaintenanceDate = createAsyncThunk<MaintenanceDate, MaintenanceDate>(
  "maintenanceDates/createMaintenanceDate",
  async (item, thunkAPI) => {
    try {
      return await agent.MaintenanceDate.createMaintenanceDate(item);
    }catch (error) {
      return thunkAPI.rejectWithValue({ error: error });
    }
  }
);

export const maintenanceDateSlice = createSlice({
  name: "maintenanceDate",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getMaintenanceDates.rejected, (state) => {
      state.maintenanceDates = null;
    });
    builder.addCase(getMaintenanceDates.fulfilled, (state, action) => {
      if (state && state.maintenanceDates) {
        state.maintenanceDates = action.payload;
      }
    });
    builder.addCase(createMaintenanceDate.fulfilled, (state, action) => {
      //just return the item

      if(state && state.newMaintenanceDate){
        state.newMaintenanceDate = action.payload;
      }

    });
    builder.addCase(createMaintenanceDate.rejected, (state) => {
      state.newMaintenanceDate=
      {
        id:0,
        maintenanceManId:0,
        month:0,
        day:0,
        year:0,
        hour:0,
        }
    });
  },
});
