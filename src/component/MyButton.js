const MyButton = (props) => {
  return (
    <div class="w-fit mt-5">
      <button
        class="bg-rose-600 text-white rounded-2xl shadow-2xl text-2xl font-bold p-2"
        // onClick={() => {
        //   props.clicked();
        // }}
        // onClick={() => {
        //   props.traceButton();
        // }}
        onClick={() => {
          props.changeNavbarText();
        }}
      >
        Change Navbar Text
      </button>
    </div>
  );
};

export default MyButton;
