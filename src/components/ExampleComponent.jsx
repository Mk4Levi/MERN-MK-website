import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchExampleData } from "../actions/exampleActions";

const ExampleComponent = () => {
  const dispatch = useDispatch();
  const exampleData = useSelector((state) => state.example.data);

  useEffect(() => {
    dispatch(fetchExampleData());
  }, [dispatch]);

  return (
    <div>
      {exampleData &&
        exampleData.map((item, i) => {
          console.log(item);
          return <div key={i + 1}>{item.title}</div>;
        })}
    </div>
  );
};

export default ExampleComponent;
