import { SignedIn, SignedOut, SignOutButton, UserButton } from '@clerk/nextjs';
//import { currentUser } from '@clerk/nextjs/server';
//import Link from 'next/link';
import NavLink from '../nav-link/nav-link';
import { AiFillHome, AiOutlineUpload, AiFillCompass, AiOutlineLogin } from 'react-icons/ai';
import Image from 'next/image';
import logoIcon from '@/assets/vidvod-logo.png';

export default function Sidenav() {
    return (
        <div className="w-1/5 bg-gray-900 h-screen flex flex-col p-5">
            <div className="text-2xl font-bold mb-6"><Image src={logoIcon} alt="Vid Vod"/></div>
            <div className="mb-6">
                <input type="text" placeholder="Search VidVod..." className="w-full h-28 rounded-md placeholder-gray-500 outline-none bg-transparent flex-1 text-2xl"/>
            </div>
            <ul className="space-y-4">
                <li><NavLink title="For You" address="/" Icon={AiFillHome} /></li>
                <li><NavLink title="Explore" address="/browse" Icon={AiFillCompass} /></li>        
                <SignedOut> 
                    <li><NavLink title="Log In" address="/signin" Icon={AiOutlineLogin} /></li>
                </SignedOut>
                <SignedIn>
                    <li><NavLink title="Upload" address="/upload" Icon={AiOutlineUpload} /></li>
                    <li><div>
                        <UserButton  showName 
                            appearance={{
                                elements: {
                                formButtonPrimary: 'bg-slate-500 text-2xl hover:bg-slate-800 ',
                                },
                            }}
                        />
                        <SignOutButton />
                    </div></li>
                </SignedIn>
            </ul>
        </div>
    );
}