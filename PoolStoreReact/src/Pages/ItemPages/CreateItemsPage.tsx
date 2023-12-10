import { useEffect, useState } from "react";
import { getItems, createItem } from "../../Slices/ItemSlice";
import {
  useAppDispatch,
  
} from "../../structure/Store/ConfigureStore";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


export default function CreateItemsPage() {
const dispatch = useAppDispatch();
const [itemName, setItemName] = useState("");
const [itemCost, setItemCost] = useState(0);
const [itemImageURL, setItemImageURL] = useState("");
const [itemLocationId, setItemLocationId] = useState(0);
const [itemAvailableInventory, setItemAvailableInventory] = useState(0);
useEffect(() => {
  dispatch(getItems());
}, [dispatch]);
//const { items } = useAppSelector((state) => state.item);

 const createItemFromForm = (e: React.FormEvent<HTMLFormElement>) =>
 {
  e.preventDefault();
 // alert("Hello");
    dispatch(createItem({name:itemName, cost:itemCost, availableInventory:itemAvailableInventory, locationId : itemLocationId,
    imageURL:itemImageURL, itemId:0}));//.then(() =>
    //dispatch(getItems()));

}
  return(
  <Form onSubmit={createItemFromForm}>
      <Form.Group className="mb-3" controlId="formItemName">
        <Form.Label>Item Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Item Name" onChange={(e) => setItemName(e.target.value)}
                          value={itemName} />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formItemCost">
        <Form.Label>Item Cost</Form.Label>
        <Form.Control type="text" placeholder="Enter Item Cost" onChange={(e) => {  let parsedInt = Number.parseInt(e.target.value);  if(!isNaN(parsedInt))setItemCost(parsedInt)}}
                          value={itemCost} />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formItemImageURL">
        <Form.Label>Item Image URL</Form.Label>
        <Form.Control type="text" placeholder="Enter Path to Image URL" onChange={(e) => setItemImageURL(e.target.value)}
                          value={itemImageURL} />
    </Form.Group>
    <Form.Group>
        <Form.Label>Location for Item</Form.Label>
    <Form.Select className="mb-3" aria-label="formSelectLocation" onChange={(e) => setItemLocationId(Number.parseInt(e.target.options[e.target.selectedIndex].text))}>
    <option>Open this select menu</option>
      <option value="1">1</option>
    </Form.Select>
    </Form.Group>

      <Form.Group className="mb-3" controlId="ItemAvailableInventory">
        <Form.Label>Available Inventory</Form.Label>
        <Form.Control type="text" placeholder="Available Inventory" onChange={(e) => {  let parsedInt = Number.parseInt(e.target.value);  if(!isNaN(parsedInt))setItemAvailableInventory(parsedInt)}}
                          value={itemAvailableInventory} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>


);
}
