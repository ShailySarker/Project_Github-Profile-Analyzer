export const Footer = () => {
    return (
      <footer className="bg-gray-100 py-4 mt-8 shadow-inner">
        <div className="max-w-4xl mx-auto px-4 text-center text-sm text-gray-600">
          &copy; {new Date().getFullYear()} GitHub Analyzer. All rights reserved.
        </div>
      </footer>
    );
  };