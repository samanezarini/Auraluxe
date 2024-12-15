
function NavItem({ setFilter }) {

    return (
        <div className="container mx-auto border-b-2 m-5 border-gray-200 dark:border-neutral-700">
            <nav className="-mb-0.5 flex justify-center gap-x-8">
                <button onClick={() => setFilter("new")} className="py-4 px-1 border-b-2 border-transparent text-2xl text-gray-500 hover:text-gray-800">
                    New
                </button>
                <button onClick={() => setFilter("all")} className="py-4 px-1 border-b-2 border-transparent text-2xl text-gray-500 hover:text-gray-800">
                    Popular
                </button>
                <button onClick={() => setFilter("sale")} className="py-4 px-1 border-b-2 border-transparent text-2xl text-gray-500 hover:text-gray-800">
                    Sale
                </button>
            </nav>
        </div>
    )
}

export default NavItem;