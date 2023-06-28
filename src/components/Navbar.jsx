function Navbar() {
  return (
    <>
      <Nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <Link>
            <h1>Navbar</h1>
          </Link>
          <Button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-label="Toggle navigation"
          ></Button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <Navlink to={"/"}>
                <h1>Home</h1>
              </Navlink>
            </ul>
          </div>
        </div>
      </Nav>
    </>
  );
}

export default Navbar;
