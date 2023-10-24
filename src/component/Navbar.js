const Navbar = (props) => {
  return (
    <div>
      <div class="m-5">
        <h1>{props.navHeading}</h1>
      </div>
      <div class="mb-5 grid grid-rows-1 grid-flow-col gap-6 font-semibold">
        <div>
          <a href="#">HOME</a>
        </div>
        <div>
          <a href="#">ABOUT US</a>
        </div>
        <div>
          <a href="#">CONNECT</a>
        </div>
        <div>
          <a href="#">
            {!props.getNavbarText ? props.navText : props.getNavbarText}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
