import Link from 'next/link';

export default function NavLink({ title, address, Icon }) {
    return (<Link href={address} className="flex items-center text-white hover:text-pink-500 text-2xl"><Icon /> <p className="sm:inLine">&nbsp; {title}</p></Link>);
}