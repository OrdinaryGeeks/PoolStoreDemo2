import { configureStore } from "@reduxjs/toolkit";
import { itemSlice } from "../../Slices/ItemSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { customerSlice } from "../../Slices/CustomerSlice";
import { customerLocationSlice } from "../../Slices/CustomerLocationSlice";
import { locationSlice } from "../../Slices/LocationSlice";
import { maintenanceSlice } from "../../Slices/MaintenanceSlice";
import { maintenanceDateSlice } from "../../Slices/MaintenanceDateSlices";
import { maintenanceManSlice } from "../../Slices/MaintenanceManSlice";
import { maintenanceItemSlice } from "../../Slices/MaintenanceItemSlice";

export const store = configureStore({
  reducer: {
    item: itemSlice.reducer,
    customer: customerSlice.reducer,
    customerLocations: customerLocationSlice.reducer,
    location: locationSlice.reducer,
    maintenance: maintenanceSlice.reducer,
    maintenanceDate: maintenanceDateSlice.reducer,
    maintenanceItem: maintenanceItemSlice.reducer,
    maintenanceMan: maintenanceManSlice.reducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
