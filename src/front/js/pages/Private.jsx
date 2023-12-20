import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link, Routes, Route, useNavigate } from "react-router-dom"

export const Private = () => {
    const navigate = useNavigate()

    useEffect(() => {
        actions.privateViewRequest()
        if (!localStorage.access_token || localStorage.access_token.length == 0 || localStorage.access_token == "logOut") {
            navigate('/')
        }

    }, [])



    const logOut = () => {
        localStorage.setItem("access_token", "logOut")
        navigate('/')
        actions.clearPrivateData()
    }

    const { store, actions } = useContext(Context);

    return (
        <div className="text-center mt-5">
            {!store.loginRes.includes(true) ? <h1>Acees Denied :( login for see the content</h1> :
                <div className="">
                    <h1 className="m-5">Private Home</h1>
                    <div className="">
                        <h2>User private details:</h2>
                        <h3>User ID</h3>
                        <h4>{store.privateData.user_id}</h4>
                        <h3>First Name</h3>
                        <h4>{store.privateData.first_name}</h4>
                        <h3>Last Name</h3>
                        <h4>{store.privateData.last_name}</h4>
                        <h3>Create date</h3>
                        <h4>{store.privateData.create_at}</h4>
                    </div>
                    <button type="button" className="btn btn-danger m-2 w-50" onClick={() => logOut()}>Log out</button>


                </div>}
        </div>
    );
};