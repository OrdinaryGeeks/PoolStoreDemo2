import { useEffect } from "react";
import { getMaintenanceMen} from "../../Slices/MaintenanceManSlice";
import {
  useAppDispatch,
  useAppSelector,
} from "../../structure/Store/ConfigureStore";

export default function DisplayMaintenanceMenPage() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getMaintenanceMen());
  }, [dispatch]);
  const { maintenanceMen } = useAppSelector((state) => state.maintenanceMan);

  return (
    <div>
      {maintenanceMen &&
        maintenanceMen.map((maintenanceMan) => (
          <div>
            <div>{maintenanceMan.id} {maintenanceMan.userId} {maintenanceMan.locationId}</div>

            
          </div>
        ))}
    </div>
  )
}
