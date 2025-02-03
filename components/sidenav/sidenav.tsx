import { SignedIn, SignedOut, SignOutButton, UserButton } from '@clerk/nextjs';
import { currentUser } from '@clerk/nextjs/server'
import NavLink from './nav-link';
import { AiFillHome, AiOutlineUpload, AiFillCompass, AiOutlineLogin, AiOutlineLogout, AiOutlineUser  } from 'react-icons/ai';
import Image from 'next/image';
import logoIcon from '@/assets/vidvod-logo.png';

export default async function Sidenav() {
    
    const user = await currentUser();
    console.log('Clerk User ID:', user?.id);

    return (
        <div className="w-1/5 bg-gray-900 h-screen flex flex-col p-5">
            <div className="text-2xl font-bold mb-6"><Image src={logoIcon} alt="Vid Vod"/></div>
           {/*} <div className="mb-6">
                <AiOutlineSearch />
                <input type="text" placeholder="Search VidVod..." className="hidden w-full h-28 rounded-md placeholder-gray-500 outline-none bg-transparent flex-1 text-2xl"/>
            </div>*/}
            <ul className="space-y-2">
                <li><NavLink title="For You" address="/" Icon={AiFillHome} /></li>
                <li><NavLink title="Explore" address="/browse" Icon={AiFillCompass} /></li>        
                <SignedOut> 
                    <li><NavLink title="Log In" address="/signin" Icon={AiOutlineLogin} /></li>
                </SignedOut>
                <SignedIn>
                    <li><NavLink title="Upload" address="/upload" Icon={AiOutlineUpload} /></li>
                    <li><NavLink title="Profile" address="/profile" Icon={AiOutlineUser } /></li>
                    <li><SignOutButton><AiOutlineLogout /></SignOutButton>
                        <div className="flex items-center fixed top-4 right-4">
                        
                            <UserButton  showName 
                            appearance={{
                                elements: {
                                formButtonPrimary: 'bg-slate-500 text-2xl hover:bg-slate-800 ',
                                },
                            }}
                        />  
                        </div>
                    </li>
                </SignedIn>
            </ul>
        </div>
    );
}