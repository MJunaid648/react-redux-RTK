import { useRef } from "react";
import { useDispatch } from "react-redux";

const Controls = () => {
  const numberRef = useRef();
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch({ type: "INCREMENT" });
  };
  const handleDecrement = () => {
    dispatch({ type: "DECREMENT" });
  };

  const handleAdd = () => {
    dispatch({ type: "ADD", payload: +numberRef.current.value });
    numberRef.current.value = "";
  };
  const handleSubtract = () => {
    dispatch({ type: "SUBTRACT", payload: +numberRef.current.value });
    numberRef.current.value = "";
  };

  return (
    <>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button
          onClick={handleIncrement}
          type="button"
          className="btn btn-primary btn-lg px-4 gap-3"
        >
          +1
        </button>
        <button
          onClick={handleDecrement}
          type="button"
          className="btn btn-outline-success btn-lg px-4"
        >
          -1
        </button>
      </div>

      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center control-row">
        <input
          type="text"
          placeholder="Enter a number"
          className="number-input"
          ref={numberRef}
        />

        <button
          onClick={handleAdd}
          type="button"
          className="btn btn-outline-info btn-lg px-4"
        >
          Add
        </button>

        <button
          onClick={handleSubtract}
          type="button"
          className="btn btn-outline-danger btn-lg px-4"
        >
          Subtract
        </button>
      </div>
    </>
  );
};

export default Controls;
