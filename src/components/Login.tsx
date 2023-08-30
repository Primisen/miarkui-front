import React, {useState} from "react";
import axios from "axios";
import {IUser} from "../models/user";
import ErrorMessage from "./ErrorMessage";

function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    async function login(event: React.FormEvent) {
        event.preventDefault();

        if (email.trim().length === 0 || password.trim().length === 0) {
            setError('Please fill in the fields.')
            return
        }

        const user: IUser = {
            email,
            password
        }

        const response = await axios.post('http://localhost:4001/login', user)
        console.log(response)
    }

    return (
        <main>
            <section className="absolute w-full h-full">
                <div
                    // className="absolute top-0 w-full h-full bg-gray-900"
                    style={{
                        // backgroundImage:
                        //     "url(" + require("assets/img/register_bg_2.png").default + ")",
                        // backgroundSize: "100%",
                        // backgroundRepeat: "no-repeat"
                    }}
                ></div>
                <div className="container mx-auto px-4 h-full">
                    <div className="flex content-center items-center justify-center h-full">
                        <div className="w-full lg:w-4/12 px-4">
                            <div
                                className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-purple-100 border-0">
                                <div className="rounded-t mb-0 px-6 py-6">
                                    <div className="text-center mb-3">
                                        <h6 className="text-gray-600 text-sm font-bold">
                                            Sign in with
                                        </h6>
                                    </div>
                                    <div className="btn-wrapper text-center">
                                        <button
                                            className="bg-white active:bg-gray-100 text-gray-800 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs"
                                            type="button"
                                            style={{transition: "all .15s ease"}}
                                        >
                                            <img
                                                alt="..."
                                                className="w-5 mr-1"
                                                src={require("../assets/img/reddit.svg").default}
                                            />
                                            Reddit
                                        </button>
                                        <button
                                            className="bg-white active:bg-gray-100 text-gray-800 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs"
                                            type="button"
                                            style={{transition: "all .15s ease"}}
                                        >
                                            <img
                                                alt="..."
                                                className="w-5 mr-1"
                                                src={require("../assets/img/google.svg").default}
                                            />
                                            Google
                                        </button>
                                    </div>
                                    <hr className="mt-6 border-b-1 border-gray-400"/>
                                </div>
                                <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                                    <div className="text-gray-500 text-center mb-3 font-bold">
                                        <small>Or sign in with credentials</small>
                                    </div>
                                    <form onSubmit={login}>
                                        <div className="relative w-full mb-3">
                                            <label
                                                className="block uppercase text-gray-700 text-xs font-bold mb-2"
                                                htmlFor="grid-password"
                                            >
                                                Email
                                            </label>
                                            <input
                                                type="email"
                                                className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                                                placeholder="Email"
                                                style={{transition: "all .15s ease"}}
                                                value={email}
                                                onChange={event => setEmail(event.target.value)}
                                            />
                                        </div>

                                        <div className="relative w-full mb-3">
                                            <label
                                                className="block uppercase text-gray-700 text-xs font-bold mb-2"
                                                htmlFor="grid-password"
                                            >
                                                Password
                                            </label>
                                            <input
                                                type="password"
                                                className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                                                placeholder="Password"
                                                style={{transition: "all .15s ease"}}
                                                value={password}
                                                onChange={event => setPassword(event.target.value)}
                                            />
                                        </div>
                                        <div>
                                            <label className="inline-flex items-center cursor-pointer">
                                                <input
                                                    id="customCheckLogin"
                                                    type="checkbox"
                                                    className="form-checkbox border-0 rounded text-gray-800 ml-1 w-5 h-5"
                                                    style={{transition: "all .15s ease"}}
                                                />
                                                <span
                                                    className="ml-2 text-sm font-semibold text-gray-700">
                                                    Remember me
                                                </span>
                                            </label>
                                        </div>

                                        <ErrorMessage error={error}/>

                                        <div className="text-center mt-6">
                                            <button
                                                className="bg-purple-500 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
                                                type="submit"
                                                style={{transition: "all .15s ease"}}
                                            >
                                                Sign In
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="flex flex-wrap mt-6">
                                <div className="w-1/2">
                                    <a
                                        href="#pablo"
                                        onClick={e => e.preventDefault()}
                                        className="text-gray-300"
                                    >
                                        <small>Forgot password?</small>
                                    </a>
                                </div>
                                <div className="w-1/2 text-right">
                                    <a
                                        href="/registration"
                                        onClick={e => e.preventDefault()}
                                        className="text-gray-300"
                                    >
                                        <small>Create new account</small>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );

}

export default Login;