import { useSelector } from "react-redux";

const DisplayCounter = () => {
  const counter = useSelector((state) => state.counter);
  return (
    <p className="lead mb-4 ">
      Current count: <span className="fw-bold">{counter}</span>
    </p>
  );
};

export default DisplayCounter;
