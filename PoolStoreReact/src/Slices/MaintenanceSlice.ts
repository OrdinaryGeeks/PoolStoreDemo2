import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import agent from "../structure/Client";
import { Maintenance } from "../Models/Maintenance";

interface MaintenanceState {
    maintenances: Maintenance[] | null;
  newMaintenance: Maintenance;
}

const initialState: MaintenanceState = {
    maintenances: [],
  newMaintenance:{    id:0,
  customerLocationId:0,
  maintenanceManId: 0,
  maintenanceDateId: 0,
  }
};

export const getMaintenances= createAsyncThunk<Maintenance[]>(
  "maintenances/getMaintenances",
  async (_, thunkAPI) => {
    try {
      return await agent.Maintenance.listMaintenances();
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error });
    }
  }
);

export const createMaintenance = createAsyncThunk<Maintenance, Maintenance>(
  "maintenances/createMaintenance",
  async (item, thunkAPI) => {
    try {
      return await agent.Maintenance.createMaintenance(item);
    }catch (error) {
      return thunkAPI.rejectWithValue({ error: error });
    }
  }
);

export const maintenanceSlice = createSlice({
  name: "maintenance",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getMaintenances.rejected, (state) => {
      state.maintenances = null;
    });
    builder.addCase(getMaintenances.fulfilled, (state, action) => {
      if (state && state.maintenances) {
        state.maintenances = action.payload;
      }
    });
    builder.addCase(createMaintenance.fulfilled, (state, action) => {
      //just return the item

      if(state && state.newMaintenance){
        state.newMaintenance = action.payload;
      }

    });
    builder.addCase(createMaintenance.rejected, (state) => {
      state.newMaintenance ={    id:0,
        customerLocationId:0,
        maintenanceManId: 0,
        maintenanceDateId: 0,
        }
    });
  },
});
