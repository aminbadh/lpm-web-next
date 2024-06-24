import Link from "next/link";
import Image from "next/image";
import { ListItemIcon, ListItemText, Menu, MenuItem } from "@mui/material";
import { useState } from "react";
import { ContentCopy } from "@mui/icons-material";

export default function Navbar({ selected }) {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <nav className="relative sticky top-0 z-50 flex items-center py-2.5 px-6 bg-white shadow">
            <Link href="/">
                <a className="flex">
                    <Image src="/logo.png" height="46" width="46" />
                </a>
            </Link>

            <div className="flex-1 flex justify-center">
                <div className="flex justify-center max-w-5xl space-x-6">
                    <div className="w-20 flex justify-center">
                        <Link href="/">
                            <a className={(selected === "home" && "font-bold text-blue-800 opacity-90") + " text-gray-500"}>Home</a>
                        </Link>
                    </div>

                    <div className="w-20 flex justify-center">
                        <Link href="/">
                            <a className={(selected === "" && "font-semibold") + " text-gray-500"}>Articles</a>
                        </Link>
                    </div>

                    <div className="w-20 flex justify-center">
                        <Link href="/">
                            <a className={(selected === "" && "font-semibold") + " text-gray-500"}>Students</a>
                        </Link>
                    </div>

                    <div className="w-20 flex justify-center">
                        <Link href="/">
                            <a className={(selected === "" && "font-semibold") + " text-gray-500"}>Events</a>
                        </Link>
                    </div>

                    <div className="w-20 flex justify-center">
                        <Link href="/contact">
                            <a className={(selected === "contact" && "font-semibold") + " text-gray-500"}>Contact</a>
                        </Link>
                    </div>

                </div>
            </div>

            <div className="w-20 flex justify-end">
                {
                    selected === "home" ?
                        <button
                            className="py-1.5 px-4 rounded-full border border-gray-500 text-opacity-60 font-semibold tracking-wide hover:bg-blue-400 transition shadow-sm hover:shadow-lg hover:border-blue-400 hover:text-white opacity-90">
                            Login
                        </button>
                        :
                        <div>
                            <button className="h-9 w-9 bg-blue-500 rounded-full opacity-90" onClick={handleClick}>

                            </button>
                            <Menu
                                className="-ml-2 mt-2"
                                id="basic-menu"
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                MenuListProps={{
                                    'aria-labelledby': 'basic-button',
                                }}
                            >
                                <MenuItem onClick={handleClose}>
                                    <ListItemIcon>
                                        <ContentCopy fontSize="small" />
                                    </ListItemIcon>
                                    <ListItemText>Copy</ListItemText></MenuItem>
                                <MenuItem onClick={handleClose}>Logout</MenuItem>
                            </Menu>
                        </div>
                }
            </div>
        </nav>
    )
}
