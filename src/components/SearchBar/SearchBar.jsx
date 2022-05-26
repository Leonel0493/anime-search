import React, { useState } from 'react'

const SearchBar = (props) => {
    const [animeTerm, setAnimeTerm] = useState("")

    const onFormSubmit = (e) => {
        e.preventDefault();
        props.onSubmit(animeTerm);
    }

    return(
        <div className="w-1/2 h-max mx-auto">
            <div className="w-max flex flex-row justify-center">
                <form onSubmit={onFormSubmit}>
                    <input 
                        type="text" 
                        className="w-96 h-full border-4 px-3 border-cyan-700 rounded-l-lg" 
                        placeholder="Search some anime"
                        onChange={(e) => setAnimeTerm(e.target.value)}
                    />
                    <button type="submit" className="w-10 h-10 bg-cyan-700 text-white rounded-r-lg">
                        <i className="fa fa-search"></i>
                    </button>
                </form>
            </div>
        </div>
    )
}

export default SearchBar;