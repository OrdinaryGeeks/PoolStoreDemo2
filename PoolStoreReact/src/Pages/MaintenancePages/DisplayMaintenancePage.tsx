import { useEffect } from "react";
import { getMaintenances } from "../../Slices/MaintenanceSlice";
import {
  useAppDispatch,
  useAppSelector,
} from "../../structure/Store/ConfigureStore";

export default function DisplayMaintenancesPage() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getMaintenances());
  }, [dispatch]);
  const { maintenances } = useAppSelector((state) => state.maintenance);

  return (
    <div>
      {maintenances &&
        maintenances.map((maintenance) => (
          <div>
            <div>{maintenance.id}</div>

            <div>{maintenance.maintenanceManId}</div>
          </div>
        ))}
    </div>
  );
}
