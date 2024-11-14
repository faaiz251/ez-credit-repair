export function Navbar() {
  return (
    <>
      <nav className="flex justify-around  items-center p-4 bg-[#15549A] text-white">
        <div className="flex font-times-new-roman">
          <h1>Start your journey to a better credit score today, </h1>{" "}
          <h1 className="text-[#00D8FF]"> Start now</h1>
        </div>
        <div className="flex font-times-new-roman items-center gap-4">
          <div className="flex font-times-new-roman items-center gap-2">
            <img
              width={20}
              height={20}
              src="/src/components/asset/navCall.svg"
              alt="caller"
            />
            <h1>0000-000-000</h1>
          </div>
          <div className="flex justify-end gap-1 font-monsterrat font-semibold text-lg">
            <a href="/" className="hover:underline">
              LOGIN
            </a>
            <span>|</span>
            <a href="/" className="hover:underline">
              REGISTER
            </a>
            {/* <Link  */}
            {/* // to="/signin" 
          // className="hover:underline">LOGIN</Link>
          // <span>|</span>
          // <Link to="/signup" className="hover:underline">REGISTER</Link> */}
          </div>
        </div>
      </nav>
    </>
  );
}
