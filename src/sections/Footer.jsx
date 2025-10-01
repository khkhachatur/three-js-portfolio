const Footer = () => {
  return (
    <section className="c-space pt-7 pb-3 flex justify-between items-center flex-wrap gap-5 border-t border-black-300">
      <div className="text-white-500 flex gap-3">
        <p>Terms and Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>
      <div className="flex gap-5">
        <div className="social-icon">
          <a href="https://www.instagram.com/khcho_k/" target="_blank" rel="noopener noreferrer">
            <img src="assets/instagram.png" alt="instagram-icon" className="w-7 h-7" />
          </a>
        </div>
        <div className="social-icon">
          <a href="https://web.telegram.org/#@kkkk_kkkk_kkkk_k" target="_blank" rel="noopener noreferrer">
            <img src="assets/telegram.png" alt="instagram-icon" className="w-7 h-7" />
          </a>
        </div>
        <div className="social-icon">
          <a href="https://github.com/khkhachatur" className="hover:pointer" target="_blank" rel="noopener noreferrer">
            <img src="assets/github.png" alt="instagram-icon" className="w-7 h-7" />
          </a>
        </div>
      </div>
      <p className="text-white-500">© 2025 K.Khachatur . All rights reserved.</p>
    </section>
  );
};

export default Footer;
