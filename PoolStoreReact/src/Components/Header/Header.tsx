import { List, ListItem } from "@mui/material";
import SignedInMenu from "../SignedInMenu/SignedInMenu";
import { useAppSelector } from "../../structure/Store/ConfigureStore";
import { NavLink } from "react-router-dom";
import { Fragment } from "react";

export default function Header() {

  const { user } = useAppSelector((state) => state.account);
  const AuthLinks = [
    { title: "Login", path: "/login" },
    { title: "Register", path: "/register" },
  ];
  return (
    <nav className="navbar navbar-expand-lg fixed-top navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Ordinary Geeks Pool Store
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Items
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="/Items">
                    Item
                  </a>
                </li>
                {user && user.roles?.includes('Admin') &&
                <li>
                  <a className="dropdown-item" href="/CreateItem">
                    Create Item
                  </a>
                </li>
                }
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Locations
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="/Locations">
                    Locations
                  </a>
                </li>
                
                {user && user.roles?.includes('Admin') &&
                <li>
                  <a className="dropdown-item" href="/CreateLocation">
                    Create Location
                  </a>
                </li>
                }
                {user && user.roles?.includes('Admin') &&
                <Fragment>
                <li>
                  <a className="dropdown-item" href="/CustomerLocations">
                    Customer Locations
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/CreateCustomerLocation">
                    Create Customer Location
                  </a>
                </li>
                </Fragment>
              }
                 
              </ul>
            </li>


            {user && (user.roles?.includes('Admin') ||user.roles?.includes('Maintenance') ||
            user.roles?.includes('Customer')) &&
            <Fragment>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Maintenance Lists
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="/Maintenances">
                    Maintenance
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/MaintenanceMen">
                    Maintenance Men
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/MaintenanceDates">
                    Maintenance Dates
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/MaintenanceItems">
                    Maintenance Items
                  </a>
                </li>
              </ul>
            </li>
            </Fragment>
}



{user && (user.roles?.includes('Admin') ||user.roles?.includes('Maintenance') ||
            user.roles?.includes('Customer')) &&
            <Fragment>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Maintenance Creation
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="/CreateMaintenance">
                    Create Maintenance
                  </a>
                </li>
                (user.roles?.includes('Admin') &&
                <li>
                  <a className="dropdown-item" href="/CreateMaintenanceMan">
                    Create Maintenance Man
                  </a>
                </li>
                )
                (user.roles?.includes('Admin') || user.roles?.inclues('Maintenance') &&
                <Fragment>
                <li>
                  <a className="dropdown-item" href="/CreateMaintenanceDate">
                    Create Maintenance Date
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/CreateMaintenanceItem">
                    Create Maintenance Item
                  </a>
                </li>
                </Fragment>
                )
              </ul>
              
            </li>
            </Fragment>
}
          </ul>

          {user ? (
          <SignedInMenu />
        ) : (
          <List sx={{ display: "flex" }}>
            {AuthLinks.map(({ title, path }) => (
              <ListItem component={NavLink} to={path} key={path}>
                {title.toUpperCase()}
              </ListItem>
            ))}
          </List>
        )}
          
          
        </div>
      </div>
    </nav>
  );
}
