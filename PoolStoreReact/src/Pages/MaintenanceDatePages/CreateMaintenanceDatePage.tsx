import { useEffect, useState } from "react";
import { getMaintenanceDates, createMaintenanceDate } from "../../Slices/MaintenanceDateSlices";
import {
  useAppDispatch,
  
} from "../../structure/Store/ConfigureStore";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


export default function CreatemaintenanceDatePage() {
const dispatch = useAppDispatch();

const [maintenanceManId, setMaintenanceManId] = useState(0);
const [month, setMonth] = useState(0);
const [day, setDay] = useState(0);
const [year, setYear] = useState(0);
const[hour,setHour] = useState(0);

useEffect(() => {
  dispatch(getMaintenanceDates());
}, [dispatch]);
//const { items } = useAppSelector((state) => state.item);

 const createMaintenanceFromForm = (e: React.FormEvent<HTMLFormElement>) =>
 {
  e.preventDefault();
 // alert("Hello");
    dispatch(createMaintenanceDate({id:0, maintenanceManId:maintenanceManId, month:month, year : year, day:day, hour:hour}));
   //.then(() =>
    //dispatch(getItems()));

}

  return(
  <Form onSubmit={createMaintenanceFromForm}>
     
    <Form.Group className="mb-3" controlId="formMaintenanceYear">
        <Form.Label>Maintenance Date Year</Form.Label>
        <Form.Control type="text" placeholder="Enter Maintenance Date Year" onChange={(e) => {  let parsedInt = Number.parseInt(e.target.value);  if(!isNaN(parsedInt))setYear(parsedInt)}}
                          value={year} />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formMaintenanceMonth">
        <Form.Label>Maintenance Date Month</Form.Label>
        <Form.Control type="text" placeholder="Enter Maintenance Date Month" onChange={(e) => {  let parsedInt = Number.parseInt(e.target.value);  if(!isNaN(parsedInt))setMonth(parsedInt)}}
                          value={month} />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formMaintenanceDay">
        <Form.Label>Maintenance Date Day</Form.Label>
        <Form.Control type="text" placeholder="Enter Maintenance Date Day" onChange={(e) => {  let parsedInt = Number.parseInt(e.target.value);  if(!isNaN(parsedInt))setDay(parsedInt)}}
                          value={day} />
    </Form.Group>
        <Form.Control type="text" placeholder="Enter Maintenance Date Hour" onChange={(e) => {  let parsedInt = Number.parseInt(e.target.value);  if(!isNaN(parsedInt))setHour(parsedInt)}}
value={hour}/>
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
