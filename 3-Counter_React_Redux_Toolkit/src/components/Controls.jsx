import { useRef } from "react";
import { useDispatch } from "react-redux";
import { counterActions } from "../store/counter";
import { privacyActions } from "../store/privacy";


const Controls = () => {
  const numberRef = useRef();
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(counterActions.increment());
  };
  const handleDecrement = () => {
    dispatch(counterActions.decrement());
  };

  const handleAdd = () => {
    const num = numberRef.current.value;
    dispatch(counterActions.add({ num }));
    numberRef.current.value = "";
  };
  const handleSubtract = () => {
    const num = numberRef.current.value;
    dispatch(counterActions.subtract({ num }));
    numberRef.current.value = "";
  };
  const togglePrivacy = () => {
    dispatch(privacyActions.toggle());
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
        <button
          onClick={togglePrivacy}
          type="button"
          className="btn btn-outline-info btn-lg px-4"
        >
          Toggle Privacy
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
