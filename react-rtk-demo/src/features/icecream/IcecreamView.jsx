import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ordered, restocked } from "./icecreamSlice";

export const IcecreamView = () => {
  const numOfIcecreams = useSelector((state) => state.icecream.numOfIcecreams);
  const dispatch = useDispatch();
  const [value, setValue] = useState(1);

  return (
    <div>
      <h2>Number of icecream - {numOfIcecreams}</h2>
      <button onClick={() => dispatch(ordered())}>Order of icecream</button>
      <input
        type="number"
        value={value}
        onChange={(e) => {
          setValue(parseInt(e.target.value));
        }}
      />
      <button onClick={() => dispatch(restocked(value))}>
        Restock icecream
      </button>
    </div>
  );
};
