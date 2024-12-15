function NavItem({ setFilter, filter }) {
    return (
        <div className="container mx-auto border-b-2 m-5 border-gray-200 dark:border-neutral-700">
            <nav className="-mb-0.5 flex justify-center gap-x-8">
                <button
                    onClick={() => setFilter("new")}
                    className={`py-4 px-1 border-b-2 ${
                        filter === "new" ? "border-red-500 text-gray-800" : "border-transparent text-gray-500"
                    } text-2xl hover:text-gray-800`}
                >
                    New
                </button>
                <button
                    onClick={() => setFilter("all")}
                    className={`py-4 px-1 border-b-2 ${
                        filter === "all" ? "border-red-500 text-gray-800" : "border-transparent text-gray-500"
                    } text-2xl hover:text-gray-800`}
                >
                    Popular
                </button>
                <button
                    onClick={() => setFilter("sale")}
                    className={`py-4 px-1 border-b-2 ${
                        filter === "sale" ? "border-red-500 text-gray-800" : "border-transparent text-gray-500"
                    } text-2xl hover:text-gray-800`}
                >
                    Sale
                </button>
            </nav>
        </div>
    );
}

export default NavItem;
