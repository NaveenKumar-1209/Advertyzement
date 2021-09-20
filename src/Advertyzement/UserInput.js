import React from "react";
import "./UserInput.css";

const ItemList = (props) => {
  return (
    <section className="Gallery">
      <ul>
        {props.userData.map((ig) => (
          <li key={ig.id}>
            <div className="card">
              <div className="img">
                <img src={ig.avatar} alt="#" />
              </div>
              <div className="description">
                <p>
                  Full Name : {ig.first_name} {ig.last_name}
                </p>
              </div>
              <div className="description">
                <p>Email : {ig.email}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ItemList;
