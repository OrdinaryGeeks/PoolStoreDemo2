import CreateCustomerLocationPage from "../Pages/CustomerLocationPages/CreateCustomerLocationPage";
import CreateCustomerPage from "../Pages/CustomerPages/CreateCustomerPage";
import DisplayCustomersPage from "../Pages/CustomerPages/DisplayCustomersPage";
import HomePage from "../Pages/HomePage/HomePage";
import CreateItemsPage from "../Pages/ItemPages/CreateItemsPage";
import DisplayItemsPage from "../Pages/ItemPages/DisplayItemsPage";
import CreateLocationPage from "../Pages/LocationPages/CreateLocationPage";
import DisplayLocationsPage from "../Pages/LocationPages/DisplayLocationsPage";
import CreateMaintenanceDatePage from "../Pages/MaintenanceDatePages/CreateMaintenanceDatePage";
import CreateMaintenanceItemPage from "../Pages/MaintenanceItemPages/CreateMaintenanceItemPage";
import CreatemaintenancePage from "../Pages/MaintenancePages/CreateMaintenancePage";
import App from "./../App";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/Items", element: <DisplayItemsPage /> },
      {path: "/CreateItem", element: <CreateItemsPage/>},
      { path: "/Customers", element: <DisplayCustomersPage /> },
      {path: "/CreateCustomer", element: <CreateCustomerPage/>},
      {path: "/CreateCustomerLocation", element:<CreateCustomerLocationPage/>},
      {path: "/CreateLocation", element:<CreateLocationPage/>},
      {path: "/CreateMaintenanceDate", element:<CreateMaintenanceDatePage/>},
      {path: "/CreateMaintenanceItem", element:<CreateMaintenanceItemPage/>},
      {path: "/CreateMaintenance", element:<CreatemaintenancePage/>},
      {path: "/CustomerLocations", element:<DisplayCustomersPage/>},
      {path: "/Locations", element:<DisplayLocationsPage/>},
    

    {path: "/DisplayCustomerLocations", element:<DisplayCustomersPage/>},
    {path: "/DisplayCustomer", element:<DisplayCustomersPage/>},
    
    ],
  },
]);
