"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Container from "./Container";

export default function Navbar() {
    const navLinks = [
        {
            href: "/",
            title: "Home"
        },
        {
            href: "/store",
            title: "Store"
        }
    ];

    const pathName = usePathname();

    return (
        <nav className="shadow p-4">
            <Container>
                {
                    navLinks.map(
                        link => (
                            <Link
                                key={link.href}
                                className={`mr-4${pathName === link.href ? " text-sky-500" : ""}`}
                                href={link.href}
                            >{link.title}</Link>
                        )
                    )
                }
            </Container>
        </nav>
    )
}