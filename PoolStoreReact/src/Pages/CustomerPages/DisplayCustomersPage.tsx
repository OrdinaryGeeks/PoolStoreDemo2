import { useEffect } from "react";
import { getCustomers } from "../../Slices/CustomerSlice";
import {
  useAppDispatch,
  useAppSelector,
} from "../../structure/Store/ConfigureStore";

export default function DisplayItemsPage() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCustomers());
  }, [dispatch]);
  const { customers } = useAppSelector((state) => state.customer);

  return (
    <div>
      {customers &&
        customers.map((customer) => (
          <div>
            <div>{customer.userId}</div>

            <div>{customer.daysSinceLastContact} Days Since Last Contact </div>
          </div>
        ))}
    </div>
  );
}
