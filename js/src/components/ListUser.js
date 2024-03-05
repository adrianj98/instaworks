import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
//import Loader from "../Common/Loader";

const ShowUser = () => {
    const showUserApi = "./users/api/Users/";



    if (user.length < 0) {
        return <h1>no user found</h1>;
    } else {
        return (
            <div className="mt-5">
                {isLoading && <div>Loading</div>}
                {error && <p>Error: {error}</p>}
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {user?.map((item, i) => {
                            return (
                                <tr key={i + 1}>
                                    <td>{i + 1}</td>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.phone}</td>
                                    <td>
                                        <Link to={`/edit-user/${item.id}`}>
                                            <i className="fa fa-pencil" aria-hidden="true"></i>
                                        </Link>
                                        <Link to={`/user/${item.id}`}>
                                            <i className="fa fa-eye" aria-hidden="true"></i>
                                        </Link>

                                        <i
                                            className="fa fa-trash-o"
                                            aria-hidden="true"
                                            onClick={() => handelDelete(item.id)}
                                        ></i>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
};

export default ShowUser;