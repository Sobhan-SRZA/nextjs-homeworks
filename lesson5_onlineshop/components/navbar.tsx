"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Container from "./Container";

export default function Navbar() {
    const navLinks = [
        {
            href: "/",
            title: "خانه"
        },
        {
            href: "/store",
            title: "فروشگاه"
        }
    ];

    const pathName = usePathname();

    return (
        <nav className="shadow p-4">
            <Container>
                <div className="flex flex-row-reverse justify-between gap-4">
                    <div className="flex gap-4">
                        {
                            navLinks.map(
                                link => (
                                    <Link
                                        key={link.href}
                                        className={`${pathName === link.href ? " text-sky-500" : ""}`}
                                        href={link.href}
                                    >{link.title}</Link>
                                )
                            )
                        }
                    </div>

                    <div>
                        <Link href={"/cart"}>سبد خرید</Link>
                    </div>
                </div>
            </Container>
        </nav>
    )
}