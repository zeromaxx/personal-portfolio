import React from "react";

export default function Header() {
  return (
    <header>
      <div className="container">
        <div className="row">
            <div className="col-4">
                Aris
            </div>
            <div className="col-3">
                <ul className="m-0 p-0 d-flex justify-content-between ">
                    <li className=" list-unstyled "><a href="#">Link 1</a></li>
                    <li className=" list-unstyled "><a href="#">Link 1</a></li>
                    <li className=" list-unstyled "><a href="#">Link 1</a></li>
                </ul>
            </div>
        </div>
      </div>
    </header>
  );
}
