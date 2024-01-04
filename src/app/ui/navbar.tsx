export default function Navbar() {
  return (
<nav className="bg-slate-950">
  <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
    <div className="relative flex h-16 items-center justify-between">
      <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
        {/* <!-- Mobile menu button--> */}
        <button type="button" className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
          <span className="absolute -inset-0.5"></span>
          <span className="sr-only">Open main menu</span>
          {/* <!--
            Icon when menu is closed.

            Menu open: "hidden", Menu closed: "block"
          --> */}
          <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
          {/* <!--
            Icon when menu is open.

            Menu open: "block", Menu closed: "hidden"
          --> */}
          <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-end">
        <div className="flex flex-shrink-0 items-center">
          <img className="h-8 w-auto" src="https://placehold.co/400" alt="Your Company" />
        </div>
        <div className="hidden sm:ml-6 sm:block">
          <div className="flex space-x-4">
            {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
            <a href="/" className="bg-gray-500 text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page">Home</a>
            <a href="about" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">About</a>
            <a href="projects" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Projects</a>
            <a href="resume" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Contact</a>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* <!-- Mobile menu, show/hide based on menu state. --> */}
  <div className="sm:hidden" id="mobile-menu">
    <div className="space-y-1 px-2 pb-3 pt-2">
      {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
      <a href="/" className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium" aria-current="page">Home</a>
      <a href="about" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">About</a>
      <a href="projects" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Projects</a>
      <a href="resume" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Contact</a>
    </div>
  </div>
</nav>

)
}