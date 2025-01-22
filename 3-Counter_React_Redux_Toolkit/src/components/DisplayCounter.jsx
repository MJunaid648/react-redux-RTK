import { useSelector } from "react-redux";

const DisplayCounter = () => {
  const { count } = useSelector((state) => state.counter);
  const privacy = useSelector((state) => state.privacy);
  return (
    <p className="lead mb-4 ">
      Current count:{" "}
      <span className="fw-bold">{privacy ? "☠️☠️☠️" : count}</span>
    </p>
  );
};

export default DisplayCounter;
