"use client"

import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { Input } from "./input"
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";

type Props = {
    defaultValue?: string;
    hideOnSearch?: boolean;
}

export const SearchInput = ({defaultValue, hideOnSearch}:Props) => {
    const [searchInput, setSeacrhInput] = useState(defaultValue ?? '');

    const router = useRouter();

    const pathName = usePathname();

    const handleSearchEnter = () => {
        if(searchInput){
            router.push('/search?q='+encodeURIComponent(searchInput));
        }
    }

    if(pathName === '/search' && hideOnSearch) return null;

    return(
        <Input 
            placeholder="Buscar" 
            icon={faMagnifyingGlass} 
            filled 
            value={searchInput}
            onChange={t => setSeacrhInput(t)}
            onEnter={handleSearchEnter}/>
    );
    
}