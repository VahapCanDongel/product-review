export default function Navigation() {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Categories</a>
              <ul className="p-2">
                <li>
                  <a>Technology</a>
                </li>
                <li>
                  <a>DIY Tools</a>
                </li>
                <li>
                  <a>Kicthen Appliances</a>
                </li>
                <li>
                  <a>Home Improvements</a>
                </li>
                <li>
                  <a>Outdoors</a>
                </li>
                <li>
                  <a>Gaming</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Contact</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">
          The Review Repository
        </a>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Home</a>
          </li>
          <li tabIndex={0}>
            <details>
              <summary>Categories</summary>
              <ul className="p-2">
                <li>
                  <a>Technology</a>
                </li>
                <li>
                  <a>DIY Tools</a>
                </li>
                <li>
                  <a>Kicthen Appliances</a>
                </li>
                <li>
                  <a>Home Improvements</a>
                </li>
                <li>
                  <a>Outdoors</a>
                </li>
                <li>
                  <a>Gaming</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a>Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
