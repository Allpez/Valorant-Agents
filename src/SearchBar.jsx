function SearchBar({ searchText, handleChangeText }) {
    return (
        <div className="flex gap-1 justify-center my-6">
            <input
                type="search"
                className="border-2 min-w-80 border-red-800 rounded-lg ps-2 sm:h-9"
                value={searchText} onChange={(e) => handleChangeText(e.target.value)}
                placeholder="Search..."
                required=""></input>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-8 text-red-700">
                <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 15.75-2.489-2.489m0 0a3.375 3.375 0 1 0-4.773-4.773 3.375 3.375 0 0 0 4.774 4.774ZM21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
        </div >
    );
}


export { SearchBar };