import { useEffect, useState } from "react";
import { getMaintenanceItems, createMaintenanceItem } from "../../Slices/MaintenanceItemSlice";
import {
  useAppDispatch,
  
} from "../../structure/Store/ConfigureStore";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


export default function CreateMaintenanceItemPage() {
const dispatch = useAppDispatch();

const [maintenanceManId, setMaintenanceManId] = useState(0);
const [itemId, setItemId] = useState(0);
const [lastMaintenanceId, setLastMaintenanceId] = useState(0);
const [maintenanceId, setMaintenanceId] = useState(0);

useEffect(() => {
  dispatch(getMaintenanceItems());
}, [dispatch]);
//const { items } = useAppSelector((state) => state.item);

 const createMaintenanceItemFromForm = (e: React.FormEvent<HTMLFormElement>) =>
 {
  e.preventDefault();
 // alert("Hello");
    dispatch(createMaintenanceItem({id:0, maintenanceId:maintenanceId, itemId:itemId, lastMaintenanceId : lastMaintenanceId}));
   //.then(() =>
    //dispatch(getItems()));

}
  return(
  <Form onSubmit={createMaintenanceItemFromForm}>
     
    <Form.Group className="mb-3" controlId="formMaintenanceId">
        <Form.Label>Maintenance Id</Form.Label>
        <Form.Control type="text" placeholder="Enter Maintenance Id" onChange={(e) => {  let parsedInt = Number.parseInt(e.target.value);  if(!isNaN(parsedInt))setMaintenanceId(parsedInt)}}
                          value={maintenanceId} />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formItemId">
        <Form.Label>Item Id</Form.Label>
        <Form.Control type="text" placeholder="Enter Item Id" onChange={(e) => {  let parsedInt = Number.parseInt(e.target.value);  if(!isNaN(parsedInt))setItemId(parsedInt)}}
                          value={itemId} />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formMaintenanceManId">
        <Form.Label>Maintenance Man Id</Form.Label>
        <Form.Control type="text" placeholder="Enter Maintenance Man Id" onChange={(e) => {  let parsedInt = Number.parseInt(e.target.value);  if(!isNaN(parsedInt))setMaintenanceManId(parsedInt)}}
                          value={maintenanceManId} />
    </Form.Group>
     <Form.Group className="mb-3" controlId="formLastMaintenanceId">
        <Form.Label>Last Maintenance Id</Form.Label>
        <Form.Control type="text" placeholder="Enter Last Maintenance Id" onChange={(e) => {  let parsedInt = Number.parseInt(e.target.value);  if(!isNaN(parsedInt))setLastMaintenanceId(parsedInt)}}
                          value={lastMaintenanceId} />
    </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>


);
}
