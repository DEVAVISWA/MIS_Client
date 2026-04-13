import React from "react";
import "./user.css";

const User = () => {
  return (
    <div className="userTable">
        <button type="button" class="btn btn-primary">Add User</button>

      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">S.No</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Message</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Deva</td>
            <td>deva@ccb.bank.in</td>
            <td>rathiri 10 maniki</td>
            <td>update | delete</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default User;
