import { useEffect } from "react";
import { getMaintenanceItems } from "../../Slices/MaintenanceItemSlice";
import {
  useAppDispatch,
  useAppSelector,
} from "../../structure/Store/ConfigureStore";

export default function DisplayMaintenanceItemsPage() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getMaintenanceItems());
  }, [dispatch]);
  const { maintenanceItems } = useAppSelector((state) => state.maintenanceItem);

  return (
    <div>
      {maintenanceItems &&
        maintenanceItems.map((maintenanceItem) => (
          <div>
            <div>{maintenanceItem.itemId} {maintenanceItem.maintenanceId} {maintenanceItem.lastMaintenanceId}</div>

         
          </div>
        ))}
    </div>
  )
}
