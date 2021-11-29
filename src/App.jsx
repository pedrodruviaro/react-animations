import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Button } from "./components/Button";

export const Login = () => {
    return (
        <div>
            <h1>Login</h1>
            <form>
                <label>
                    Email
                    <input type="text" />
                </label>
                <label>
                    Password
                    <input type="text" />
                </label>

                <Button type="submit">Enter</Button>
            </form>
        </div>
    );
};

export const Register = () => {
    return (
        <div>
            <h1>Login</h1>
            <form>
                <label>
                    Email
                    <input type="text" />
                </label>
                <label>
                    Password
                    <input type="text" />
                </label>
                <label>
                    Confirm Password
                    <input type="text" />
                </label>
            </form>
        </div>
    );
};

export const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
            </Routes>
        </BrowserRouter>
    );
};
