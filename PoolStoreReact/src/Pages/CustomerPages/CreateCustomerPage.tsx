import { useEffect, useState } from "react";
import { getCustomers, createCustomer } from "../../Slices/CustomerSlice";
import {
  useAppDispatch,
  
} from "../../structure/Store/ConfigureStore";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


export default function CreateCustomersPage() {
const dispatch = useAppDispatch();
//const [customerId, setCustomerId] = useState(0);
const [userId, setUserId] = useState(0);
const [daysSinceLastContact, setDaysSinceLastContact] = useState(0);
useEffect(() => {
  dispatch(getCustomers());
}, [dispatch]);
//const { items } = useAppSelector((state) => state.item);

 const createCustomerFromForm = (e: React.FormEvent<HTMLFormElement>) =>
 {
  e.preventDefault();
 // alert("Hello");
    dispatch(createCustomer({id:0, userId:userId, daysSinceLastContact:daysSinceLastContact}));//.then(() =>
    //dispatch(getItems()));

}
  return(
  <Form onSubmit={createCustomerFromForm}>
      <Form.Group className="mb-3" controlId="formCustomerUserId">
        <Form.Label>Customer User Id</Form.Label>
        <Form.Control type="text" placeholder="Choose User Id" onChange={(e) => {  let parsedInt = Number.parseInt(e.target.value);  if(!isNaN(parsedInt))setUserId(parsedInt)}} value={userId}></Form.Control>
    </Form.Group>
    <Form.Group className="mb-3" controlId="formDaysSinceLastContact">
        <Form.Label>Days Since Last Contact</Form.Label>
        <Form.Control type="text" placeholder="Days Since Last Contact" onChange={(e) => {  let parsedInt = Number.parseInt(e.target.value);  if(!isNaN(parsedInt))setDaysSinceLastContact(parsedInt)}}
                          value={daysSinceLastContact} />
    </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>


);
}
