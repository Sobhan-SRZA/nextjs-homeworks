"use client";

import { useState } from "react";
import { redirect } from "next/navigation";
import Container from "@/components/Container";
import Cookies from "js-cookie";
// import axios from "axios";

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        // axios({
        //     url: "/login",
        //     method: "post",
        //     data: {
        //         password,
        //         username
        //     }
        // })

        const response = {
            token: "oisach98ach[:HVS9EDS8E9[V{(hv*SE9[[;SVIH",
            expire: 7
        }

        Cookies.set("token", response.token, { expires: response.expire });
        redirect("/dashboard");
    }

    return (
        <div>
            <Container>
                <div className="border p-4 flex flex-col w-52 mx-auto gap-4">
                    <input onChange={(e => setUsername(e.target.value))} type="text" placeholder="نام کاربری را وارد کنید..." />
                    <input onChange={(e => setPassword(e.target.value))} type="password" placeholder="رمز را وارد کنید..." />

                    <button onClick={handleLogin} className="bg-sky-800 rounded px-4 py-2">ورود</button>
                </div>
            </Container>
        </div>
    )
}