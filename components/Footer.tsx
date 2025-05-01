const Footer = () => {
  return (
    <footer className="fixed bottom-0 w-full border-t border-black-300 bg-white dark:bg-gray-900 flex flex-col items-center justify-between p-2 ">
      <div className="c-space pt-4 pb-3 flex justify-between items-center flex-wrap gap-5 sm:px-12 px-2  ">
        <p className="text-white-500 text-center">
          &copy; {new Date().getFullYear()} TXTSum. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
