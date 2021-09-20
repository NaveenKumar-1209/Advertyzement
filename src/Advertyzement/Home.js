import React, { useState, useEffect } from "react";
import UserInput from "./UserInput";
import "./Home.css";

const Home = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    const fetchusers = async () => {
      const response = await fetch("https://reqres.in/api/users?page=1");

      if (!response.ok) {
        throw new Error("Something went wrong!!");
      }
      const objectJson = await response.json();
      const responseData = objectJson.data;
      console.log(responseData);
      setUsers(responseData);
    };

    fetchusers().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
    setIsLoading(false);
  }, []);

  const showUserHandler = () => {
    setIsShow(true);
  };
  const noUser = <p>To show the user data, Click on the above button</p>;
  const showUser = <UserInput userData={users} />;

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }
  if (httpError) {
    return (
      <section>
        <p>{httpError}</p>
      </section>
    );
  }

  return (
    <div>
      <nav>
        <div className="brand">
          <h1>Advertyzement</h1>
          <button onClick={showUserHandler}>Get Users</button>
        </div>
      </nav>
      <div className="messageText">{isShow ? showUser : noUser}</div>
    </div>
  );
};

export default Home;
