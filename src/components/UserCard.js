import React from "react";

function UserCard({ user }) {
  return (
    <div className="col-lg-4">
      <div className="card shadow-lg p-3 mb-4 bg-light  rounded">
        {/* <img
          src={`https://i.pravatar.cc/150?img=${user.id}`} // Random Avatar
          className="card-img-top"
          alt={user.name}
        /> */}
        <div className="card-body mx-auto">
          <p className="card-title text-center"><strong>Username:</strong>Viji</p>
          <p className="card-text text-center"><strong>Email:</strong> viji@gmail.com</p>
          <p className="card-text text-center"><strong>Phone:</strong> 8923472344</p>
          {/* <a href={`mailto:${user.email}`} className="btn btn-primary">
            Contact
          </a> */}
        </div>
      </div>
    </div>
  );
}

export default UserCard;
