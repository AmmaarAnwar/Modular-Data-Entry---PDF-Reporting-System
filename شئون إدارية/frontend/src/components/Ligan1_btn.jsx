function Ligan1_btn(props) {
    return (
        <>
    <button onClick={() => props.fn()}
      type="button" className="text-green-700  hover:text-white border outline-none border-green-700 hover:bg-green-800  hover:border-green-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 ">
      {props.name}
    </button>
        </>
    );
}

export default Ligan1_btn;
