
import { useEffect, useState } from "react";
import { getMaintenanceMen, createMaintenanceMan } from "../../Slices/MaintenanceManSlice";
import {
  useAppDispatch,
  
} from "../../structure/Store/ConfigureStore";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


export default function CreateMaintenanceManPage() {
const dispatch = useAppDispatch();

const [maintenanceManId, setMaintenanceManId] = useState(0);
const [locationId, setLocationId] = useState(0);
const [userId, setUserId] = useState(0);


useEffect(() => {
  dispatch(getMaintenanceMen());
}, [dispatch]);
//const { items } = useAppSelector((state) => state.item);

 const createMaintenanceManFromForm = (e: React.FormEvent<HTMLFormElement>) =>
 {
  e.preventDefault();
 // alert("Hello");
    dispatch(createMaintenanceMan({id:0, userId:userId, locationId:locationId}));
   //.then(() =>
    //dispatch(getItems()));

}   
  return(
  <Form onSubmit={createMaintenanceManFromForm}>
     
    <Form.Group className="mb-3" controlId="formUserId">
        <Form.Label>User Id</Form.Label>
        <Form.Control type="text" placeholder="Enter Maintenance Id" onChange={(e) => {  let parsedInt = Number.parseInt(e.target.value);  if(!isNaN(parsedInt))setUserId(parsedInt)}}
                          value={userId} />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formLocationId">
        <Form.Label>Location Id</Form.Label>
        <Form.Control type="text" placeholder="Enter Item Id" onChange={(e) => {  let parsedInt = Number.parseInt(e.target.value);  if(!isNaN(parsedInt))setLocationId(parsedInt)}}
                          value={locationId} />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formMaintenanceManId">
        <Form.Label>Maintenance Man Id</Form.Label>
        <Form.Control type="text" placeholder="Enter Maintenance Man Id" onChange={(e) => {  let parsedInt = Number.parseInt(e.target.value);  if(!isNaN(parsedInt))setMaintenanceManId(parsedInt)}}
                          value={maintenanceManId} />
    </Form.Group>
     <Form.Group className="mb-3" controlId="formMaintenanceManId">
        <Form.Label>Maintenance Man Id</Form.Label>
        <Form.Control type="text" placeholder="Maintenance Man Id" onChange={(e) => {  let parsedInt = Number.parseInt(e.target.value);  if(!isNaN(parsedInt))setMaintenanceManId(parsedInt)}}
                          value={maintenanceManId} />
    </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>


);
}
