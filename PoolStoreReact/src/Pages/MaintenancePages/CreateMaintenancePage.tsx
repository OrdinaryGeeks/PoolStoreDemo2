import { useEffect, useState } from "react";
import { getMaintenances, createMaintenance } from "../../Slices/MaintenanceSlice";
import {
  useAppDispatch,
  
} from "../../structure/Store/ConfigureStore";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


export default function CreatemaintenancePage() {
const dispatch = useAppDispatch();

const [maintenanceManId, setMaintenanceManId] = useState(0);
const [customerLocationId, setCustomerLocationId] = useState(0);
const [maintenanceDateId, setMaintenanceDateId] = useState(0);

useEffect(() => {
  dispatch(getMaintenances());
}, [dispatch]);
//const { items } = useAppSelector((state) => state.item);

 const createMaintenanceFromForm = (e: React.FormEvent<HTMLFormElement>) =>
 {
  e.preventDefault();
 // alert("Hello");
    dispatch(createMaintenance({id:0, maintenanceManId:maintenanceManId, maintenanceDateId:maintenanceDateId, customerLocationId : customerLocationId}));
   //.then(() =>
    //dispatch(getItems()));

}

  return(
  <Form onSubmit={createMaintenanceFromForm}>
     
    <Form.Group className="mb-3" controlId="formMaintenanceCustLocId">
        <Form.Label>Maintenance Customer Location Id</Form.Label>
        <Form.Control type="text" placeholder="Enter Maintenance Customer Location Id" onChange={(e) => {  let parsedInt = Number.parseInt(e.target.value);  if(!isNaN(parsedInt))setCustomerLocationId(parsedInt)}}
                          value={customerLocationId} />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formMaintenanceDateId">
        <Form.Label>Maintenance Date Id</Form.Label>
        <Form.Control type="text" placeholder="Enter Maintenance Date Id" onChange={(e) => {  let parsedInt = Number.parseInt(e.target.value);  if(!isNaN(parsedInt))setMaintenanceDateId(parsedInt)}}
                          value={maintenanceDateId} />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formMaintenanceManId">
        <Form.Label>Maintenance Man Id</Form.Label>
        <Form.Control type="text" placeholder="Enter Maintenance Man Id" onChange={(e) => {  let parsedInt = Number.parseInt(e.target.value);  if(!isNaN(parsedInt))setMaintenanceManId(parsedInt)}}
                          value={maintenanceManId} />
    </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>


);
}
