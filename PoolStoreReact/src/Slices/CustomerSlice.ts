
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import agent from "../structure/Client";
import { Customer } from "../Models/Customer";

interface CustomerState {
  customers: Customer[] | null;
  newCustomer: Customer;
}

const initialState: CustomerState = {
    customers: [],
    newCustomer:{  id: 0,
    userId: 0,
    daysSinceLastContact: 0,
   }
};

export const getCustomers = createAsyncThunk<Customer[]>(
  "customers/getCustomers",
  async (_, thunkAPI) => {
    try {
      return await agent.Customer.listCustomers();
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error });
    }
  }
);

export const createCustomer = createAsyncThunk<Customer, Customer>(
  "customers/createCustomers",
  async (customer, thunkAPI) => {
    try {
      return await agent.Customer.createCustomer(customer);
    }catch (error) {
      return thunkAPI.rejectWithValue({ error: error });
    }
  }
);

export const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCustomers.rejected, (state) => {
      state.customers = null;
    });
    builder.addCase(getCustomers.fulfilled, (state, action) => {
      if (state && state.customers) {
        state.customers = action.payload;
      }
    });
    builder.addCase(createCustomer.fulfilled, (state, action) => {
      //just return the item

      if(state && state.newCustomer){
        state.newCustomer = action.payload;
      }

    });
    builder.addCase(createCustomer.rejected, (state) => {
      state.newCustomer={  id: 0,
        userId: 0,
        daysSinceLastContact: 0,
       }
    });
  },
});
