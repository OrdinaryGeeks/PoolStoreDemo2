import { useEffect } from "react";
import { getLocations } from "../../Slices/LocationSlice";
import {
  useAppDispatch,
  useAppSelector,
} from "../../structure/Store/ConfigureStore";

export default function DisplayLocationsPage() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getLocations());
  }, [dispatch]);
  const { locations } = useAppSelector((state) => state.location);

  return (
    <div>   
      {locations &&
        locations.map((location) => (
          <div>
            <div>{location.streetAddress} {location.city}  {location.state}  {location.name} 
            {location.phoneNumber}</div>

            
          </div>
        ))}
    </div>
  )
}
