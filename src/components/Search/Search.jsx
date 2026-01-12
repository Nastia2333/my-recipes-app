import React from "react";
import '../Search/Search.scss'

export function Search({searchQuery, onChange}){
    return (
        <section className="search">
            <input 
                className="search-input"
                type="text"
                placeholder="Search recipes..."
                value={searchQuery}
                onChange={(e)=> onChange(e.target.value)}
            />
        </section>
    )
}