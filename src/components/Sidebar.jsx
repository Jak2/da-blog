function Sidebar() {
  return (
    <div className="w-72 bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="p-6 border-b border-[#f6f6f6]">
        <div className="flex items-center gap-4">
          <img src="/placeholder.svg" alt="Profile" width={60} height={60} className="rounded-full" />
          <div>
            <div className="text-xs text-[#757575] uppercase">THE GEN AI ENTHUSIAST</div>
            <div className="font-medium">JayaArunKumar.Tulluri</div>
          </div>
        </div>
      </div>

      <div className="p-4">
        <div className="text-xs text-[#757575] uppercase mb-2 px-2">ABOUT ME</div>
        <div className="space-y-1">
          <div className="flex items-center justify-between p-2 hover:bg-[#f6f6f6] rounded-md cursor-pointer toggle-btn">
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-[#757575]"
              >
                <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
              <span>What I'm upto now</span>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-[#757575]"
            >
              <path d="m6 9 6 6 6-6"></path>
            </svg>
          </div>
          <div className="flex items-center justify-between p-2 hover:bg-[#f6f6f6] rounded-md cursor-pointer toggle-btn">
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-[#757575]"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
              <span>Social Activities</span>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-[#757575]"
            >
              <path d="m6 9 6 6 6-6"></path>
            </svg>
          </div>
        </div>

        <div className="text-xs text-[#757575] uppercase mt-6 mb-2 px-2">MY HOBBIES</div>
        <div className="space-y-1">
          <div className="flex items-center p-2 hover:bg-[#f6f6f6] rounded-md cursor-pointer">
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-[#757575]"
              >
                <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                <polyline points="9 22 9 12 15 12 15 22"></polyline>
              </svg>
              <span>Life Experiences</span>
            </div>
          </div>
          <div className="flex items-center justify-between p-2 hover:bg-[#f6f6f6] rounded-md cursor-pointer toggle-btn">
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-[#757575]"
              >
                <path d="M18 20V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14"></path>
                <path d="M2 20h20"></path>
                <path d="M14 12v.01"></path>
              </svg>
              <span>PowerBI</span>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-[#757575]"
            >
              <path d="m6 9 6 6 6-6"></path>
            </svg>
          </div>
          <div className="flex items-center p-2 hover:bg-[#f6f6f6] rounded-md cursor-pointer">
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-[#757575]"
              >
                <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
              </svg>
              <span>AGI</span>
            </div>
          </div>
          <div className="flex items-center p-2 hover:bg-[#f6f6f6] rounded-md cursor-pointer">
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-[#757575]"
              >
                <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
              </svg>
              <span>SQL</span>
            </div>
          </div>
          <div className="flex items-center justify-between p-2 bg-[#f6f6f6] rounded-md cursor-pointer toggle-btn">
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-[#757575]"
              >
                <path d="M18 20V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14"></path>
                <path d="M2 20h20"></path>
                <path d="M14 12v.01"></path>
              </svg>
              <span>Data Analytics</span>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-[#757575]"
            >
              <path d="m6 9 6 6 6-6"></path>
            </svg>
          </div>

          {/* Expanded Data Analytics submenu */}
          <div className="ml-6 border-l border-[#f6f6f6] pl-2 space-y-2 mt-1">
            <div className="p-2 hover:bg-[#f6f6f6] rounded-md cursor-pointer text-sm">Who is this guy</div>
            <div className="p-2 bg-[#f6f6f6] rounded-md cursor-pointer text-sm">
              core responsibilities of a Data Analyst
            </div>
            <div className="p-2 hover:bg-[#f6f6f6] rounded-md cursor-pointer text-sm">Typical career path</div>
            <div className="p-2 hover:bg-[#f6f6f6] rounded-md cursor-pointer text-sm">
              Essential Tools and Technologies
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
