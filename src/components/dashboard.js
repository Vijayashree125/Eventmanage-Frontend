import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "./sidebar";
const apiUrl = 'http://localhost:5000/';

function Dashboard() {
    const [users, setUsers] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const limit = 10;
    useEffect(() => {
        const userId = localStorage.getItem("userId")
        axios.post(apiUrl + `user/userLogHis/${userId}?page=${page}&limit=${limit}`)
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
                                    <th scope="col">User ID</th>
                                    <th scope="col">Type</th>
                                    <th scope="col">Ip Address
                                    </th>
                                    <th scope="col">Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.length > 0 ? (
                                    users.map((user, index) => (
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>{user.userId}</td>
                                            <td>{user.type}</td>
                                            <td>{user.ip === "::1" ? "127.0.0.1" : user.ip}</td>
                                            <td> {new Date(user.dateTime).toLocaleDateString("en-US", {
                                                day: "2-digit",
                                                month: "short", // "Feb"
                                                year: "numeric",
                                                hour: "2-digit",  // "08"
                                                minute: "2-digit",
                                            })}</td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="4">No users found</td>
                                    </tr>
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
export default Dashboard;
