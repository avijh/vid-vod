import Link from 'next/link';

interface NavLinkProps {
    title: string;
    address: string;
    Icon: React.FC; // or React.ElementType if you want to allow any component type
}

export default function NavLink({ title, address, Icon }: NavLinkProps) {
    return (
        <Link 
            href={address} 
            className="flex items-center text-white hover:text-pink-500 text-xl"
        >
            <Icon /> 
            <p className="hidden lg:inline ">
                &nbsp; {title}
            </p></Link>);
}