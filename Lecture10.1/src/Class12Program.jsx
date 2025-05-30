import { BrowserRouter, Routes, Route, Link, useNavigate } from "react-router-dom";

export default function Class12Program() {
    const navigate = useNavigate();

    function redirectUser() {
        navigate("/");
    }

    return (
        <div>
            <h1>NEET programs for Class 12th.</h1>
            <button onClick={redirectUser}>Go back to landing page</button>
        </div>
    );
}
