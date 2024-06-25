import Link from "next/link";
import Image from "next/image";

export default function Navbar({ selected }) {
    return (
        <nav className="sticky top-0 z-50 flex items-center py-2.5 px-6 bg-white shadow">
            <Link href="/"><a className="flex"><Image src="/logo.png" height="46" width="46" /></a></Link>

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
        </nav>
    )
}
