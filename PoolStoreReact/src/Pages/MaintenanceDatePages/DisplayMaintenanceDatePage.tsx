import { useEffect } from "react";
import { getMaintenanceDates } from "../../Slices/MaintenanceDateSlices";
import {
  useAppDispatch,
  useAppSelector,
} from "../../structure/Store/ConfigureStore";

export default function DisplayMaintenanceDatesPage() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getMaintenanceDates());
  }, [dispatch]);
  const { maintenanceDates } = useAppSelector((state) => state.maintenanceDate);

  return (
    <div>
      {maintenanceDates &&
        maintenanceDates.map((maintenanceDate) => (
          <div>
            <div>{maintenanceDate.month}/{maintenanceDate.day}/{maintenanceDate.year}  {maintenanceDate.hour} :Hour</div>

            <div>{maintenanceDate.maintenanceManId}</div>
          </div>
        ))}
    </div>
  )
}
