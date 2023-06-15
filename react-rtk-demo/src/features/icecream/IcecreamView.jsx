import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ordered, restocked } from "./icecreamSlice";

export const IcecreamView = () => {
  const numOfIcecreams = useSelector((state) => state.icecream.numOfIcecreams);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Number of icecream - {numOfIcecreams}</h2>
      <button onClick={() => dispatch(ordered())}>Order of icecream</button>
      <button onClick={() => dispatch(restocked(5))}>Restock icecream</button>
    </div>
  );
};
