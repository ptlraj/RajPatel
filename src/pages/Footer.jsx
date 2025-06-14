function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Raj Patel. All rights reserved.
        </p>
        <a
          href="#home"
          className="mt-4 md:mt-0 text-blue-400 hover:text-blue-300 transition duration-300"
        >
          Back to Top
        </a>
      </div>
    </footer>
  );
}

export default Footer;
