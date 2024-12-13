
function NavItem() {

    return (
        <div class="container mx-auto border-b-2 m-5 border-gray-200 dark:border-neutral-700">
            <nav class="-mb-0.5 flex justify-center gap-x-8">
                <a class="py-4 px-1 inline-flex items-center gap-3 border-b-2 border-transparent text-2xl whitespace-nowrap text-gray-500 hover:text-gray-800 focus:outline-none focus:text-blue-600" href="">
                    New
                </a>
                <a class="py-4 px-1 inline-flex items-center gap-3 border-b-2 border-blue-300 text-2xl font-medium whitespace-nowrap text-gray-800 focus:outline-none focus:text-blue-300" href="" aria-current="page">
                    Popular
                </a>
                <a class="py-4 px-1 inline-flex items-center gap-3 border-b-2 border-transparent text-2xl whitespace-nowrap text-gray-500 hover:text-gray-800 focus:outline-none focus:text-blue-600" href="">
                    Sale
                </a>
            </nav>
        </div>
    )
}

export default NavItem;