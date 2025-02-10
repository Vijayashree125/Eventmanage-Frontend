import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "./sidebar";
import { toast } from "react-toastify";
const apiUrl = 'http://localhost:5000/';

function UpcomingEvents() {
    const [users, setUsers] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [rs, setrs] = useState({})
    const [events,setevents] = useState([])

    const limit = 10;



    useEffect(() => {
        axios.get(apiUrl + `user/upcomingEvent/?page=${page}&limit=${limit}`)
            .then(response => {
                setUsers(response.data.data);
                setTotalPages(response.data.totalCount);
            })
            .catch(error => console.error("Error fetching users:", error));
        // Format the date

    }, [page]);

    const showDetail = async (title) => {
        await axios.get(apiUrl + `user/getDisplayRegister/${title}`)
            .then(res => {
                setrs(res.data.data)
                localStorage.setItem('eventId', res.data.data._id)
            })
    }

    const user_id = localStorage.getItem("userId")
    const event_id = localStorage.getItem("eventId")
    const eventRegisterDetail = async (user_id, event_id) => {
        await axios.post(apiUrl + 'user/eventRegister', { user_id, event_id })
            .then(res => {
                if(res.data.status===true){
                setevents(res.data.data)
                console.log("events======",events)
                toast.success(res.data.message);
                }
                else{
                toast.error(res.data.message);
                }
            })
    }

    return (
        <div>
            <div className="app-container">
                <Sidebar />
                <div className="content">
                    <div className="row">
                        <h5>Upcoming Events List</h5>
                        <table className="table table-hover mt-2">
                            <thead>
                                <tr>
                                    <th scope="col">S.no</th>
                                    <th scope="col">Event Title</th>
                                    {/* <th scope="col">Description</th> */}
                                    <th scope="col">Location</th>
                                    <th scope="col">Date</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.length > 0 ? (
                                    users.map((user, index) => (
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>{user.title}</td>
                                            {/* <td>{user.description}</td> */}
                                            <td>{user.location}</td>
                                            <td>{new Date(user.date).toLocaleDateString("en-US", {
                                                day: "2-digit",
                                                month: "short", // "Feb"
                                                year: "numeric",
                                                hour: "2-digit",  // "08"
                                                minute: "2-digit",
                                            })}</td>
                                            <td><button className="btn btn-primary text-white" data-bs-toggle="modal" data-bs-target="#myModal" onClick={(e) => showDetail(user.title)} >Register</button></td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="4"><span class="text-center">No users found</span></td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
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

                    <div class="modal fade" id="myModal" data-bs-backdrop="static">
                        <div class="modal-dialog" style={{ width: "700px" }}>
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">Event Registration</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>``
                                <div class="modal-body text-center">
                                    <p><b>Event Title : </b>{rs.title}</p>
                                    <p><b>Description : </b>{rs.description}</p>
                                    <p><b>Location : </b>{rs.location}</p>
                                    <p><b>DateTime :</b> {new Date(rs.date).toLocaleDateString("en-US", {
                                        day: "2-digit",
                                        month: "short", // "Feb"
                                        year: "numeric",
                                        hour: "2-digit",  // "08"
                                        minute: "2-digit",
                                    })}</p>
                                    <p class="text-center"><b>Are you sure you want to register this event?</b></p>
                                </div>

                                <div class="modal-footer">
                                    <button type="button" class="btn btn-success" data-bs-dismiss="modal" onClick={(e) => eventRegisterDetail(user_id,event_id)}>Register</button>
                                    <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Cancel</button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}
export default UpcomingEvents;
