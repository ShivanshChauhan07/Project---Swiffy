const Contact = () => {
  return (
    <div>
      <h1 className="font-bold text-3xl p-4 m-4">Contact Us Page</h1>
      <form action="">
        <input
          type="text"
          className="border border-black p-2 m-2"
          placeholder="Name"
        />
        <input
          type="text"
          className="border border-black p-2 m-2"
          placeholder="Message"
        />
        <button className="border-2 border-blue-600 bg-blue-600 rounded-lg text-white text-xl font-bold p-2 w-20">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
