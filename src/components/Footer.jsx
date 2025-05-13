function Footer() {
  return (
    <footer className="bg-[#333] text-white p-4 rounded-lg text-center">
      <p>© {new Date().getFullYear()} Jaya Arun Kumar Tulluri. All rights reserved.</p>
      <div className="flex justify-center space-x-4 mt-2">
        <a href="#" className="hover:text-[#00d1bf]">
          Privacy Policy
        </a>
        <a href="#" className="hover:text-[#00d1bf]">
          Terms of Service
        </a>
        <a href="#" className="hover:text-[#00d1bf]">
          Contact
        </a>
      </div>
    </footer>
  )
}

export default Footer
