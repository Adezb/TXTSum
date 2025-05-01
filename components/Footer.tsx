const Footer = () => {
  return (
    <footer className="fixed bottom-0 w-full border-t border-black-300 bg-white dark:bg-gray-900 ">
      <div className="c-space pt-7 pb-3 flex justify-between items-center flex-wrap gap-5">
        <div className="text-white-500 flex gap-2">
          <p>Terms & Conditions</p>
          <p>|</p>
          <p>Privacy Policy</p>
        </div>
        <p className="text-white-500">
          &copy; {new Date().getFullYear()} TXTSum. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
