import { useEffect, useState } from "react";
import { getLocations, createLocation } from "../../Slices/LocationSlice";
import {
  useAppDispatch,
  
} from "../../structure/Store/ConfigureStore";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


export default function CreateLocationPage() {
const dispatch = useAppDispatch();
//const [customerId, setCustomerId] = useState(0);
const [customerId, setCustomerId] = useState(0);
const [locationId, setLocationId] = useState(0);
const [streetAddress, setStreetAddress]=useState("");
const [city, setCity]=useState("");
const [name, setName] = useState("")
const [stateOfAddress, setStateOfAddress]= useState("");
const [phoneNumber, setPhoneNumber] = useState("");
useEffect(() => {
  dispatch(getLocations());
}, [dispatch]);
//const { items } = useAppSelector((state) => state.item);

 const createLocationFromForm = (e: React.FormEvent<HTMLFormElement>) =>
 {
  e.preventDefault();


    dispatch(createLocation({  locationId:locationId, locationImageURL: "",
        streetAddress:streetAddress, city:city, state:stateOfAddress, name:name, phoneNumber:phoneNumber}));//.then(() =>
    //dispatch(getItems()));

} 
  return(
  <Form onSubmit={createLocationFromForm}>
      <Form.Group className="mb-3" controlId="formCustomerId">
        <Form.Label>Customer Id</Form.Label>
        <Form.Control type="text" placeholder="Choose Customer Id" onChange={(e) => {  let parsedInt = Number.parseInt(e.target.value);  if(!isNaN(parsedInt))setCustomerId(parsedInt)}} value={customerId}></Form.Control>
    </Form.Group>
   
    <Form.Group className="mb-3" controlId="formName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Name" onChange={(e) => setName(e.target.value)}
                          value={name} />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formLocationId">
        <Form.Label>Location Id</Form.Label>
        <Form.Control type="text" placeholder="Choose Location Id" onChange={(e) => {  let parsedInt = Number.parseInt(e.target.value);  if(!isNaN(parsedInt))setLocationId(parsedInt)}} value={locationId}></Form.Control>
    </Form.Group>
    <Form.Group className="mb-3" controlId="formStreetAddress">
        <Form.Label>Street Address</Form.Label>
        <Form.Control type="text" placeholder="Street Address" onChange={(e) => setStreetAddress(e.target.value)}
                          value={streetAddress} />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formCity">
        <Form.Label>City</Form.Label>
        <Form.Control type="text" placeholder="City" onChange={(e) => setCity(e.target.value)}
                          value={city} />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formState">
        <Form.Label>State</Form.Label>
        <Form.Control type="text" placeholder="State" onChange={(e) => setStateOfAddress(e.target.value)}
                          value={stateOfAddress} />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formPhoneNumber}">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control type="text" placeholder="Phone Number" onChange={(e) => setPhoneNumber(e.target.value)}
                          value={phoneNumber} />
    </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>


);
}
