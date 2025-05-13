function ContentSection({ children }) {
  return (
    <div className="p-8 text-white overflow-y-auto max-h-[70vh]">
      <div className="prose prose-invert max-w-none">{children}</div>
    </div>
  )
}

export default ContentSection
