import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import SingleUser from "./SingleUser";

const Users = () => {
  const Dusers = useLoaderData();
  const [users, setUsers] = useState(Dusers);
  //(users)
  return (
    <div>
      <h1>users</h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Name</th>
              <th>Job</th>

              <th></th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <SingleUser
                key={user._id}
                user={user}
                setUsers={setUsers}
                users={users}
              ></SingleUser>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
