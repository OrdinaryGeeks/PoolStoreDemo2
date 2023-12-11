import Login from "../Pages/AccountPages/Login";
import Register from "../Pages/AccountPages/Register";
import CreateCustomerLocationPage from "../Pages/CustomerLocationPages/CreateCustomerLocationPage";
import CreateCustomerPage from "../Pages/CustomerPages/CreateCustomerPage";
import DisplayCustomersPage from "../Pages/CustomerPages/DisplayCustomersPage";
import HomePage from "../Pages/HomePage/HomePage";
import CreateItemsPage from "../Pages/ItemPages/CreateItemsPage";
import DisplayItemsPage from "../Pages/ItemPages/DisplayItemsPage";
import CreateLocationPage from "../Pages/LocationPages/CreateLocationPage";
import DisplayLocationsPage from "../Pages/LocationPages/DisplayLocationsPage";
import CreateMaintenanceDatePage from "../Pages/MaintenanceDatePages/CreateMaintenanceDatePage";
import DisplayMaintenanceDatesPage from "../Pages/MaintenanceDatePages/DisplayMaintenanceDatePage";
import CreateMaintenanceItemPage from "../Pages/MaintenanceItemPages/CreateMaintenanceItemPage";
import CreateMaintenanceManPage from "../Pages/MaintenanceManPages/CreateMaintenanceManPage";
import DisplayMaintenanceMenPage from "../Pages/MaintenanceManPages/DisplayMaintenanceManPage";
import CreatemaintenancePage from "../Pages/MaintenancePages/CreateMaintenancePage";
import DisplayMaintenancesPage from "../Pages/MaintenancePages/DisplayMaintenancePage";
import App from "./../App";
import { createBrowserRouter } from "react-router-dom";
import RequireAuth from "./RequireAuth";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {element: <RequireAuth roles={['Admin', 'Maintenance']}/>, children:[
        {path: "/CreateItem", element: <CreateItemsPage/>},
        {path: "/CreateCustomer", element: <CreateCustomerPage/>},
        {path: "/CreateCustomerLocation", element:<CreateCustomerLocationPage/>},
        {path:"/Maintenances", element:<DisplayMaintenancesPage/>},
        
      {path: "/CreateLocation", element:<CreateLocationPage/>},
      
      
      {path: "/CustomerLocations", element:<DisplayCustomersPage/>},
      {path: "/CustomerLocations", element:<DisplayCustomersPage/>},
    {path: "/Customers", element:<DisplayCustomersPage/>},
    
    { path: "/Customers", element: <DisplayCustomersPage /> },
    {path: "/CreateMaintenanceDate", element:<CreateMaintenanceDatePage/>},
    {path: "/CreateMaintenanceItem", element:<CreateMaintenanceItemPage/>},
      ]},
      { path: "/", element: <HomePage /> },
      { path: "/Items", element: <DisplayItemsPage /> },
      {element: <RequireAuth roles={['Admin']}/>, children:[
      {path:"/CreateMaintenanceMan", element:<CreateMaintenanceManPage/>},
      ]},
      {element: <RequireAuth roles={['Admin', 'Maintenance', 'Customer']}/>, children:[

        {path: "/CreateMaintenance", element:<CreatemaintenancePage/>},
        {path:"/MaintenanceMen", element:<DisplayMaintenanceMenPage/>},
        {path: "/MaintenanceDates", element:<DisplayMaintenanceDatesPage/>},
        {path: "/MaintenanceItems", element:<DisplayMaintenancesPage/>},
      ]},

      
      
      {path: "/Locations", element:<DisplayLocationsPage/>},
    
      
      
    
      
    
    {path: "/Login", element:<Login/>},
  {path:"/Register",element:<Register/>}
    
    ],
  },
]);
