"use client";

import posthog from "posthog-js";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    const handleCreateEventClick = () => {
        posthog.capture("create_event_cta_clicked", {
            location: "navbar",
            destination: "create_event",
        });
    };

    return (
        <header>
            <nav>
                <Link href={"/"} className="logo">
                    <Image src={"/icons/logo.png"} alt="logo" width={24} height={24} />

                    <p>DevEvents</p>
                </Link>

                <ul>
                    <Link href={"/"}>Home</Link>
                    <Link href={"/"}>Events</Link>
                    <Link href={"/"} onClick={handleCreateEventClick}>Create Event</Link>
                </ul>
            </nav>
        </header>
    )
}