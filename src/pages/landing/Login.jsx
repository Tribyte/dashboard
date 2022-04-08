import React, { useReducer } from "react";
import styled, { keyframes } from "styled-components";

function formReducer(state, event) {
    return {
        ...state,
        [event.name]: event.value
    }
}

const Form = styled.form`
    width: 30em;
    padding: 20px;
    border-radius: 10px;
    background: #ddd;
    color: #000;
    display: flex;
    flex-direction: column;
    box-shadow: 0px 0px 1000px 80px rgba(190, 180, 170, 1);
`;

export const Login = (props) => {
    const [formData, setFormData] = useReducer(formReducer, {});

    const formChange = event => {
        setFormData({
            username: event.target.username,
            password: event.target.password,
        });
    }

    return (
        <Form>
            <h1>Sign In With</h1>
            <label>Username</label>
            <input onChange={formChange} type="text" name="username" />
            <label>Password <span><u><em>forgot?</em></u></span></label>
            <input onChange={formChange} type="password" name="password" />
            <button id="login" name="login">Login</button>
            <p>Not a Member?
                <button type="button" onClick={props.register}><u><em>Sign up now</em></u></button>
            </p>
        </Form>
    );
};