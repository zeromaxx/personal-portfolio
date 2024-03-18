import React from "react";


export default function Header() {
  return (
    <header>
      <div className="container">
        <div className="row">
          <div className="col-2">
            <div className="position-relative">
              <span className="letter-a">A</span>
              <span className="letter-l">L</span>
            </div>
          </div>
          <div className="col-3">
            <ul className="m-0 p-0 d-flex justify-content-between h-100 align-items-center">
              <li className="list-unstyled">
                <a className="grey-color" href="!#">Home</a>
              </li>
              <li className="list-unstyled">
                <a className="grey-color" href="!#">About</a>
              </li>
              <li className="list-unstyled">
                <a className="grey-color" href="!#">Skills</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
