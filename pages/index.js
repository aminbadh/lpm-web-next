import Link from "next/link";
import Image from "next/image";
import NavigationLink from "../components/NavigationLink";

export default function Home() {
    return (
        <div className="bg-gray-50 selection:bg-green-500">
            <nav className="py-2.5 px-14 flex flex-row items-center justify-between">
                <div className="flex flex-row items-center">
                    <Image src={"/logo.png"} height={48} width={48} />
                    <div className="ml-20 space-x-10">
                        <NavigationLink content="Home" />
                        <NavigationLink content="Articles" />
                        <NavigationLink content="Events" />
                        <NavigationLink content="Clubs" />
                        <NavigationLink content="Students" />
                        <NavigationLink content="Contact" />
                    </div>
                </div>
                <div className="flex flex-row items-center">
                    <p className="tracking-wide font-medium">+216 00 000 000</p>
                    <button
                        className="ml-12 bg-blue-600 opacity-90 rounded-full h-9 w-20 flex items-center justify-center font-medium tracking-wide text-white text-opacity-95 pb-0.5 hover:shadow-md transition">
                        Login
                    </button>
                </div>
            </nav>

            <div className="pb-24 shadow-sm">
                <div className="w-full h-120 bg-lpm-hallway bg-center bg-fixed shadow-xl">
                    <div className="relative bg-black bg-opacity-40 w-full h-full">
                        <div className="absolute left-24 bottom-24">
                            <h1 className="text-white text-opacity-95 text-5xl uppercase tracking-widest font-semibold">Lycée
                                Pilote Monastir</h1>
                            <p className="mt-8 text-white text-opacity-90 text-lg tracking-widest">A prestigious and
                                innovative public secondary school<br />based in Tunisia, created on September 15,
                                2004.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex mt-20">
                    <div className="flex-1 flex justify-end">
                        <div className="max-w-2xl">
                            <h2 className="text-3xl font-bold tracking-wider opacity-70">Who Are We?</h2>
                            <p className="mt-6 leading-8 font-medium opacity-70">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In finibus scelerisque
                                lorem,
                                ac semper augue posuere vel. Fusce lobortis, ligula ut vulputate euismod, velit
                                purus
                                pulvinar erat, sit amet congue magna justo eleifend nunc.
                            </p>
                            <h2 className="mt-20 text-3xl font-bold tracking-wider opacity-70">Our Mission!</h2>
                            <p className="mt-6 leading-8 font-medium opacity-70">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In finibus scelerisque
                                lorem,
                                ac semper augue posuere vel. Fusce lobortis, ligula ut vulputate euismod, velit
                                purus
                                pulvinar erat, sit amet congue magna justo eleifend nunc.
                            </p>
                        </div>
                    </div>

                    <div className="flex-1 flex justify-start">
                        <img className="w-full h-96 object-cover" src={"/learning-concept.png"} alt={"Learning concept Illustration"} />
                    </div>
                </div>

                <div className="flex mt-28 mx-36 px-12 py-6 bg-blue-700 bg-opacity-5 rounded-lg shadow">
                    <h4 className="text-9xl text-blue-700 opacity-60">“</h4>
                    <div>
                        <h3 className="mx-12 mt-6 leading-9 text-center text-xl opacity-80 font-medium">Lorem ipsum
                            dolor sit amet,
                            consectetur adipiscing elit. In finibus scelerisque lorem, ac semper augue posuere vel.
                            Fusce lobortis, ligula ut vulputate euismod, velit purus pulvinar erat.</h3>
                        <h5 className="mt-6 text-center font-medium tracking-wide opacity-75">Lorem Ipsum <span
                            className="text-blue-700 font-semibold">|</span> Manager</h5>
                    </div>

                </div>

                <div className="mt-28 mx-auto flex justify-between max-w-7xl px-20">
                    <div className="flex flex-col items-center">
                        <div className="h-12 w-12 bg-blue-500 bg-opacity-90 rounded-full" />
                        <h4 className="mt-2 text-2xl tracking-widest opacity-80 font-semibold">+ 1,000</h4>
                        <h6 className="mt-1 text-sm tracking-wider font-semibold opacity-50 uppercase">students</h6>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="h-12 w-12 bg-blue-500 bg-opacity-90 rounded-full" />
                        <h4 className="mt-2 text-2xl tracking-widest opacity-80 font-semibold">+ 1,000</h4>
                        <h6 className="mt-1 text-sm tracking-wider font-semibold opacity-50 uppercase">students</h6>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="h-12 w-12 bg-blue-500 bg-opacity-90 rounded-full" />
                        <h4 className="mt-2 text-2xl tracking-widest opacity-80 font-semibold">+ 1,000</h4>
                        <h6 className="mt-1 text-sm tracking-wider font-semibold opacity-50 uppercase">students</h6>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="h-12 w-12 bg-blue-500 bg-opacity-90 rounded-full" />
                        <h4 className="mt-2 text-2xl tracking-widest opacity-80 font-semibold">+ 1,000</h4>
                        <h6 className="mt-1 text-sm tracking-wider font-semibold opacity-50 uppercase">students</h6>
                    </div>
                </div>
            </div>

            <div className="w-full pt-8" >
                <div className="flex items-baseline mx-12 space-x-16">
                    <div className="w-80">
                        <h3 className="text-2xl text-black opacity-90 font-semibold tracking-wider">Lycée Pilote
                            Monastir</h3>
                    </div>
                    <div className="flex-1 flex space-x-6">
                        <div className="flex-1">
                            <h3 className="text-xl text-black opacity-90 font-semibold tracking-wide">School</h3>
                        </div>
                        <div className="flex-1">
                            <h3 className="text-xl text-black opacity-90 font-semibold tracking-wide">Support</h3>
                        </div>
                        <div className="flex-1">
                            <h3 className="text-xl text-black opacity-90 font-semibold tracking-wide">Useful Links</h3>
                        </div>
                        <div className="flex-1">
                            <h3 className="text-xl text-black opacity-90 font-semibold tracking-wide">Address</h3>
                        </div>
                    </div>
                </div>
                <div className="mt-2 flex items-start mx-12 space-x-16">
                    <div className="w-80">
                        <p className="text-black opacity-80 font-medium tracking-wide">
                            A prestigious and
                            innovative public secondary school based in Tunisia, created on September 15,
                            2004.
                        </p>
                    </div>
                    <div className="flex-1 flex space-x-6">
                        <div className="flex-1">
                            <Link href="/">
                                <a className="text-black text-opacity-75 font-semibold tracking-wide">Home</a>
                            </Link>
                        </div>
                        <div className="flex-1">
                            <Link href="/contact">
                                <a className="text-black text-opacity-75 font-semibold tracking-wide">Contact</a>
                            </Link>
                        </div>
                        <div className="flex-1">
                            <Link href="http://www.education.gov.tn/?lang=en">
                                <a className="text-black text-opacity-75 font-semibold tracking-wide">Ministry</a>
                            </Link>
                        </div>
                        <div className="flex-1">
                            <Link href="/">
                                <a className="text-black text-opacity-75 font-semibold tracking-wide">Avenue Taieb M'hiri 5000 Monastir / Tunisia</a>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="mt-8 h-0.5 w-full bg-black opacity-5" />
                <h5 className="mt-4 pb-4 text-black opacity-80 text-center tracking-widest">© 2021 Lycée Pilote Monastir, All rights reserved.</h5>
            </div>
        </div>
    )
}