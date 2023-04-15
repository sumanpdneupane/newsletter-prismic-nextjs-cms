import Link from "next/link";
import {GiAstronautHelmet} from "react-icons/gi"
import {FiSearch} from "react-icons/fi"
import {AiOutlineBell, AiOutlineUser} from "react-icons/ai"

export default function Layout( {children }: LayoutProps){
    return(
        <div>
            <div className="px-2 md:px-24 bg-black text-white flex justify-between h-16">
                <Link legacyBehavior href="/">
                    <a className="text-white uppercase text-2xl flex align-baseline px-10 my-auto">
                        <GiAstronautHelmet className="inline text-4xl mr-4"/> Channel 21
                    </a>
                </Link>
                <div className="flex items-center w-1/3 text-lg">
                    <input type="text" className="bg-transparent border-b w-full border-white outline-none"/>
                    <FiSearch className="-ml-8 text-2xl hover:text-red-600 cursor-pointer"/>
                </div>
                <div className="flex items-center text-2xl">
                    <AiOutlineBell className="mr-2 cursor-pointer hover:text-red-600"/>
                    <AiOutlineUser className="mr-2 cursor-pointer hover:text-red-600"/>
                </div>
            </div>

            {/* Navbar */}
            <div className="px-2 md:px-24 bg-white flex border-b border-black">
                <Link legacyBehavior href="/">
                    <a className="mr-10 text-xl mt-5 px-5 border-b-2 border-transparent hover:border-black">
                        Home
                    </a>
                </Link>
                <Link legacyBehavior href="/politics">
                    <a className="mr-10 text-xl mt-5 px-5 border-b-2 border-transparent hover:border-black">
                        Politics
                    </a>
                </Link>
                <Link legacyBehavior href="/business">
                    <a className="mr-10 text-xl mt-5 px-5 border-b-2 border-transparent hover:border-black">
                        Business
                    </a>
                </Link>
            </div>
            {
                children
            }

             {/* Footer */}
            <div className="bg-black text-white text-xl py-10 px-24 flex flex-col">
                <Link legacyBehavior href="/">
                    <a className="text-white uppercase text-2xl flex align-baseline px-10 my-auto">
                        <GiAstronautHelmet className="inline text-4xl mr-4"/> Channel 21
                    </a>
                </Link>
                <div className="grid grid-cols-3 grid-rows-3 gap-5 mt-10 max-w-3xl">
                    <h1>Carrers</h1>
                    <h1>About Us</h1>
                    <h1>API</h1>
                    <h1>Contact Us</h1>
                    <h1>Partners</h1>
                    <h1>Vission</h1>
                    <h1>Project VisQ</h1>
                </div>
                <div className="my-10 text-sm max-w-2xl">
                    Channel 21 is a opern-source initiative by Xmedia Group, Nepal and 
                    is registered as non profit organization. All rights reserved. &copy; 
                        &nbsp; {
                            new Date().getFullYear()
                        }
                </div>
            </div>
        </div>
    )
}

interface LayoutProps {
    children: React.ReactNode;
  }