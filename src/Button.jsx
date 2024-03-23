function Button({ handleOnClick, index }) {
  return (
    <>
      <button
        type="button"
        className="btn btn-success custombtn"
        onClick={() => handleOnClick(index)}
      >
        <i className="fa-regular fa-circle-check"></i>
      </button>
    </>
  );
}

export default Button;
