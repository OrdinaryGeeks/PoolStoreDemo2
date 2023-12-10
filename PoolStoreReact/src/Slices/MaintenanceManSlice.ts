import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import agent from "../structure/Client";
import { MaintenanceMan } from "../Models/MaintenanceMan";

interface MaintenanceManState {
    maintenanceMen: MaintenanceMan[] | null;
  newMaintenanceMan: MaintenanceMan;
}

const initialState: MaintenanceManState = {
    maintenanceMen: [],
  newMaintenanceMan:{

  id:0,
  
  userId:0,
  locationId:0,
 
  }
}

export const getMaintenanceMen= createAsyncThunk<MaintenanceMan[]>(
  "maintenanceMen/getMaintenanceMen",
  async (_, thunkAPI) => {
    try {
      return await agent.MaintenanceMan.listMaintenanceMen();
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error });
    }
  }
);

export const createMaintenanceMan = createAsyncThunk<MaintenanceMan, MaintenanceMan>(
  "maintenanceMen/createMaintenanceMan",
  async (item, thunkAPI) => {
    try {
      return await agent.MaintenanceMan.createMaintenanceMan(item);
    }catch (error) {
      return thunkAPI.rejectWithValue({ error: error });
    }
  }
);

export const maintenanceManSlice = createSlice({
  name: "maintenanceMan",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getMaintenanceMen.rejected, (state) => {
      state.maintenanceMen = null;
    });
    builder.addCase(getMaintenanceMen.fulfilled, (state, action) => {
      if (state && state.maintenanceMen) {
        state.maintenanceMen = action.payload;
      }
    });
    builder.addCase(createMaintenanceMan.fulfilled, (state, action) => {
      //just return the item

      if(state && state.newMaintenanceMan){
        state.newMaintenanceMan = action.payload;
      }

    });
    builder.addCase(createMaintenanceMan.rejected, (state) => {
      state.newMaintenanceMan={

        id:0,
        
        userId:0,
        locationId:0,
       
        }
    });
  },
});
