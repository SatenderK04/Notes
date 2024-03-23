function AddItem({ handleOnEnter }) {
  return (
    <input
      type="text"
      className="Input-food"
      placeholder="Enter item here"
      onKeyDown={handleOnEnter}
    />
  );
}

export default AddItem;
