import { useEffect } from "react";
import { getCustomerLocations } from "../../Slices/CustomerLocationSlice";
import {
  useAppDispatch,
  useAppSelector,
} from "../../structure/Store/ConfigureStore";

export default function DisplayItemsPage() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCustomerLocations());
  }, [dispatch]);
  const { customerLocations } = useAppSelector((state) => state.customerLocations);

  return (
    <div>
      {customerLocations &&
        customerLocations.map((customerLocation) => (
          <div>
            <div>{customerLocation.customerId} : Cust Location Cust Id</div>

            <div>{customerLocation.name} : Cust Location Name </div>
          </div>
        ))}
    </div>
  );
}
