import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import agent from "../structure/Client";
import { MaintenanceItem } from "../Models/MaintenanceItem";

interface MaintenanceItemState {
    maintenanceItems: MaintenanceItem[] | null;
  newMaintenanceItem: MaintenanceItem;
}

const initialState: MaintenanceItemState = {
    maintenanceItems: [],
    newMaintenanceItem:{

        id:0,
        itemId:0,
        maintenanceId:0,
        lastMaintenanceId:0,
         
    }


}

export const getMaintenanceItems= createAsyncThunk<MaintenanceItem[]>(
  "maintenanceItems/getMaintenanceItems",
  async (_, thunkAPI) => {
    try {
      return await agent.MaintenanceItem.listMaintenanceItems();
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error });
    }
  }
);

export const createMaintenanceItem = createAsyncThunk<MaintenanceItem, MaintenanceItem>(
  "maintenanceMen/createMaintenanceItem",
  async (item, thunkAPI) => {
    try {
      return await agent.MaintenanceItem.createMaintenanceItem(item);
    }catch (error) {
      return thunkAPI.rejectWithValue({ error: error });
    }
  }
);

export const maintenanceItemSlice = createSlice({
  name: "maintenanceItem",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getMaintenanceItems.rejected, (state) => {
      state.maintenanceItems = null;
    });
    builder.addCase(getMaintenanceItems.fulfilled, (state, action) => {
      if (state && state.maintenanceItems) {
        state.maintenanceItems = action.payload;
      }
    });
    builder.addCase(createMaintenanceItem.fulfilled, (state, action) => {
      //just return the item

      if(state && state.newMaintenanceItem){
        state.newMaintenanceItem = action.payload;
      }

    });
    builder.addCase(createMaintenanceItem.rejected, (state) => {
      state.newMaintenanceItem={

        id:0,
        itemId:0,
        maintenanceId:0,
        lastMaintenanceId:0,
         
    }
    });
  },
});
