function Footer() {
  return (
<footer class="bg-[#333] text-white p-4 rounded-lg text-center mt-6 w-full">
  <p>© {new Date().getFullYear()} Jaya Arun Kumar Tulluri. All rights reserved.</p>
  <div class="flex justify-center space-x-4 mt-2">
    <a href="/privacy" class="hover:text-[#00d1bf] text-[0.8rem]">
      Privacy Policy
    </a>
    <a href="/terms" class="hover:text-[#00d1bf] text-[0.8rem]">
      Terms of Servdice
    </a>
    <a href="/contact" class="hover:text-[#00d1bf] text-[0.8rem]">
      Contact
    </a>
  </div>
</footer>
  )
}

export default Footer
