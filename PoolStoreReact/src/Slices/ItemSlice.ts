import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import agent from "../structure/Client";
import { Item } from "../Models/Item";

interface ItemState {
  items: Item[] | null;
  newItem: Item;
}

const initialState: ItemState = {
  items: [],
  newItem:{ name: "",
    imageURL: "",
    locationId: 0,
    availableInventory: 0,
  cost:0,
itemId :0}
};

export const getItems = createAsyncThunk<Item[]>(
  "items/getItems",
  async (_, thunkAPI) => {
    try {
      return await agent.Item.listItems();
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error });
    }
  }
);

export const createItem = createAsyncThunk<Item, Item>(
  "items/createItem",
  async (item, thunkAPI) => {
    try {
      return await agent.Item.createItem(item);
    }catch (error) {
      return thunkAPI.rejectWithValue({ error: error });
    }
  }
);

export const itemSlice = createSlice({
  name: "item",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getItems.rejected, (state) => {
      state.items = null;
    });
    builder.addCase(getItems.fulfilled, (state, action) => {
      if (state && state.items) {
        state.items = action.payload;
      }
    });
    builder.addCase(createItem.fulfilled, (state, action) => {
      //just return the item

      if(state && state.newItem){
        state.newItem = action.payload;
      }

    });
    builder.addCase(createItem.rejected, (state) => {
      state.newItem = { name: "",
      imageURL: "",
      locationId: 0,
      availableInventory: 0,
    cost:0,
  itemId :0}
    });
  },
});
