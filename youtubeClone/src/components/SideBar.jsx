const sideBarContent = [
  { name: 'Home', key: 1 },
  { name: 'About', key: 2 },
  { name: 'Contact', key: 3 },
  { name: 'Services', key: 4 },
  { name: 'Portfolio', key: 5 },
  { name: 'Blog', key: 6 },
  { name: 'FAQ', key: 7 },
  { name: 'Settings', key: 8 },
  { name: 'Logout', key: 9 },
]
export const Sidebar = () => {
  return (
    <div>
      {sideBarContent.map((content) => (
        <div key={content.key} className="grid grid-cols-4 items-center p-2">
          <div className="col-span-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </div>
          <div className="col-span-3">{content.name}</div>
        </div>
      ))}
    </div>
  )
}
