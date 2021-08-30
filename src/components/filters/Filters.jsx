import React, { useRef } from 'react'
import './Filters.css';



const Filters = () => {
    const filterButton = useRef(null);

    return (
        <button className="filters" ref={filterButton}>
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-adjustments-horizontal" width="25" height="25" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <circle cx="14" cy="6" r="2" />
                <line x1="4" y1="6" x2="12" y2="6" />
                <line x1="16" y1="6" x2="20" y2="6" />
                <circle cx="8" cy="12" r="2" />
                <line x1="4" y1="12" x2="6" y2="12" />
                <line x1="10" y1="12" x2="20" y2="12" />
                <circle cx="17" cy="18" r="2" />
                <line x1="4" y1="18" x2="15" y2="18" />
                <line x1="19" y1="18" x2="20" y2="18" />
            </svg>
        </button>
    )
}

export default Filters;