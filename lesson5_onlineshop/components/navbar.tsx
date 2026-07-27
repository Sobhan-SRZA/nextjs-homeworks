"use client";

import {
    redirect,
    usePathname
} from "next/navigation";
import { useShoppingCartContext } from "@/context/ShoppingCartContext";
import Container from "./Container";
import Cookies from "js-cookie";
import Link from "next/link";

export default function Navbar() {
    const navLinks = [
        {
            href: "/",
            title: "خانه"
        },
        {
            href: "/store",
            title: "فروشگاه"
        },
        {
            href: "/dashboard",
            title: "پنل مدیریت"
        },
        {
            href: "/login",
            title: "ورود"
        }
    ];

    const pathName = usePathname();

    const { cartTotalQty } = useShoppingCartContext();

    const handleLogout = () => {
        Cookies.remove("token");
        redirect("/login");
    }

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
                        <span className="px-2 py-1 bg-red-600 rounded-full">{cartTotalQty}</span>
                        <Link href={"/cart"}>سبد خرید</Link>
                        <button className="ml-4 text-red-700" onClick={handleLogout}>خروج</button>
                    </div>
                </div>
            </Container>
        </nav>
    )
}