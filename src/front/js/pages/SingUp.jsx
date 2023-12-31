import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom"
import "../../styles/singUp.css"; 


export const SingUp = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();

    useEffect(() => {
        if (store.newUserRes == "success") {
            navigate('/')
        }
        setMsg(store.newUserRes)

    }, [store.newUserRes])

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [msg, setMsg] = useState("")

    const sendForm = () => {
        let emailInput = email
        emailInput = emailInput.toLocaleLowerCase()

        if (password !== confirmPassword) {
            setMsg("Passwords don't match")


        } else {

            let newUser = {
                email: emailInput,
                password: password,
                first_name: firstName,
                last_name: lastName
            }

            actions.createNewUser(newUser)
            setEmail('')
            setPassword('')

        }
    }



    return (
        <div className="ouch">

            {
                <div className="Figaro">
                    <h1 className="FogaroH1">Sign up</h1>
                    {msg.length == 0 ? ""
                        : <div class="alert alert-danger" role="alert">{msg}</div>}

                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="firstNameInput" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} ></input>
                        <label htmlFor="floatingPassword">First Name</label>
                    </div>

                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="lastNameInput" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} ></input>
                        <label htmlFor="floatingPassword">Last Name</label>
                    </div>

                    <div className="form-floating mb-3">
                        <input type="email" className="form-control" id="emailInput" placeholder="name@example.com" value={email} onChange={(e) => setEmail(e.target.value)} required ></input>
                        <label htmlFor="floatingInput">Email address</label>
                    </div>

                    <div className="form-floating mb-3">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} ></input>
                        <label htmlFor="floatingPassword">Password</label>
                    </div>

                    <div className="form-floating mb-3">
                        <input type="password" className="form-control" id="floatingConfirmPassword" onChange={e => setConfirmPassword(e.target.value)} placeholder="Confirm Password" value={confirmPassword} required />
                        <label htmlFor="floatingConfirmPassword">Confirm Password</label>
                    </div>

                    <button type="button" className="btn btn-danger w-50 py-2 m-3" onClick={() => sendForm()}>Sign up</button>

                    <p className='ALOJA' >
                        Already have an account with us?{' '}
                        <Link to="/" style={{ color: 'black', textDecoration: 'underline' }}>
                            Sign in
                        </Link>
                    </p>
                </div>


            }
        </div>
    );
};