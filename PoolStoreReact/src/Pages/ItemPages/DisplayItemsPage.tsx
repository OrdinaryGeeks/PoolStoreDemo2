import { useEffect } from "react";
import { getItems } from "../../Slices/ItemSlice";
import {
  useAppDispatch,
  useAppSelector,
} from "../../structure/Store/ConfigureStore";

export default function DisplayItemsPage() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getItems());
  }, [dispatch]);
  const { items } = useAppSelector((state) => state.item);

  return (
    <div>
      {items &&
        items.map((item) => (
          <div>
            <div>{item.name}</div>

            <img src={item.imageURL} height="300" width="300" />
          </div>
        ))}
    </div>
  );
}
