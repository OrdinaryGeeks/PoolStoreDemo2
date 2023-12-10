
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import agent from "../structure/Client";
import { CustomerLocation } from "../Models/CustomerLocation";

interface CustomerState {
  customerLocations: CustomerLocation[] | null;
  newCustomerLocation: CustomerLocation;
}

const initialState: CustomerState = {
    customerLocations: [],
    newCustomerLocation:{    id:0,
    customerId:0,
    streetAddress:"",
    city:"",
    state:"",
    name:"",
    locationId:0
    }

};

export const getCustomerLocations = createAsyncThunk<CustomerLocation[]>(
  "customerLocations/getCustomerLocations",
  async (_, thunkAPI) => {
    try {
      return await agent.CustomerLocation.listCustomerLocations();
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error });
    }
  }
);

export const createCustomerLocation = createAsyncThunk<CustomerLocation, CustomerLocation>(
  "customerLocation/createCustomerLocation",
  async (customerLocation, thunkAPI) => {
    try {
      return await agent.CustomerLocation.createCustomerLocation(customerLocation);
    }catch (error) {
      return thunkAPI.rejectWithValue({ error: error });
    }
  }
);

export const customerLocationSlice = createSlice({
  name: "customerLocation",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCustomerLocations.rejected, (state) => {
      state.customerLocations = null;
    });
    builder.addCase(getCustomerLocations.fulfilled, (state, action) => {
      if (state && state.customerLocations) {
        state.customerLocations = action.payload;
      }
    });
    builder.addCase(createCustomerLocation.fulfilled, (state, action) => {
      //just return the item

      if(state && state.newCustomerLocation){
        state.newCustomerLocation = action.payload;
      }

    });
    builder.addCase(createCustomerLocation.rejected, (state) => {
      state.newCustomerLocation={    id:0,
        customerId:0,
        streetAddress:"",
        city:"",
        state:"",
        name:"",
        locationId:0
        }
    });
  },
});
