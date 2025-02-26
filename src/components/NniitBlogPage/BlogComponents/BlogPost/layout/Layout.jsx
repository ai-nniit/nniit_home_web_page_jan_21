function Layout({ children }) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-12 gap-8 py-16">
            {children}
          </div>
        </div>
      </div>
    );
  }
  
  export default Layout;