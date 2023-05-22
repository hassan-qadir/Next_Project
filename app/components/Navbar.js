import Link from "next/link"

const Navbar = () => {
  return (
    <>
 <header className="relative">
   <p className="flex h-10 items-center justify-center bg-indigo-300 px-4 text-sm font-medium text-white sm:px-6 lg:px-8">Get free delivery on orders over $100</p>
   <nav className="bg-gray-600">
  <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
    <div className="relative flex h-16 items-center justify-between">
      <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
      </div>
      <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
        <div className="flex flex-shrink-0 items-center">
          <img className="block h-8 w-auto lg:hidden" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company"/>
          <img className="hidden h-8 w-auto lg:block" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company"/>
        </div>
        <div className="hidden sm:ml-6 sm:block">
          <div className="flex space-x-4">
            <Link href={'/'} className="hover:bg-gray-700 text-white rounded-md px-3 py-2 text-sm font-medium">Products</Link>
            <Link href={'/contact'} className="hover:bg-gray-700 text-white rounded-md px-3 py-2 text-sm font-medium">Contacts</Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</nav>
 </header>
    </>
  )
}

export default Navbar
