import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import Sidebar from "./sidebar";
const apiUrl = 'http://localhost:5000/';

function RegisterEvents() {
    const [users, setUsers] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const limit = 10;
    useEffect(() => {
        const userId = localStorage.getItem("userId")
        axios.post(apiUrl + `user/getRegisterUser/${userId}?page=${page}&limit=${limit}`)
            .then(response => {
                setUsers(response.data.data);
                setTotalPages(response.data.totalCount);
            })
            .catch(error => console.error("Error fetching users:", error));
        // Format the date

    }, [page]);



    return (
        <div>
            <div className="app-container">
                <Sidebar />
                <div className="content">
                    <div className="row">
                        <h5>User Login History</h5>
                        <table className="table table-hover mt-2">
                            <thead>
                                <tr>
                                    <th scope="col">S.no</th>
                                    <th scope="col">Event Title</th>
                                    <th scope="col">Description</th>
                                    <th scope="col">Venue</th>
                                    <th scope="col">Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.length > 0 ? (
                                    users.map((user, index) => (
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>{user.eventId.title}</td>
                                            <td>{user.eventId.description}</td>
                                            <td>{user.eventId.location}</td>
                                            <td> {new Date(user.eventId.date).toLocaleDateString("en-US", {
                                                day: "2-digit",
                                                month: "short", // "Feb"
                                                year: "numeric",
                                                hour: "2-digit",  // "08"
                                                minute: "2-digit", // "31"
                                            })}</td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="4"><span className="text-center">No users found</span></td>                                    </tr>
                                )}
                            </tbody>
                        </table>
                        {/* Pagination Buttons */}

                    </div>
                    <div>
                        <button onClick={() => setPage(page - 1)} disabled={page === 1}>
                            Prev
                        </button>
                        <span> Page {page} of {totalPages} </span>
                        <button onClick={() => setPage(page + 1)} disabled={page === totalPages}>
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </div >

    );
}
export default RegisterEvents;
