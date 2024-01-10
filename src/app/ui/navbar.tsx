import NavLinks from "./navlinks"

export default function Navbar() {
  return (

    <nav className="bg-slate-950">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-end">
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <NavLinks />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>

  )
}