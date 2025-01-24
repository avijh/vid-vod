import React, { ReactNode } from 'react';
import Link from 'next/link';

export default function VideoAction({ children }: { children: ReactNode }) {
    return (<button className="bg-gray-900 text-white p-3 rounded-full hover:bg-pink-500">{ children }</button>);
}