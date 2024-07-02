import CreateUser from "../features/user/CreateUser";

function Home() {
  return (
    <div className="text-center my-10 sm:my-16">
      {/* sm means value is added after the sm field.  */}
      <h1 className="mb-8 text-xl font-semibold ">
        The best pizza.
        <br />
        <span className="text-yellow-500">
          Straight out of the oven, straight to you.
        </span>
      </h1>
      <CreateUser />
    </div>
  );
}

export default Home;
