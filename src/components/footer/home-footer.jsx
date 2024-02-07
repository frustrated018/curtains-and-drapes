import { FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const HomePageFooter = () => {
  return (
    <section className="bg-secondary">
      <footer className="flex flex-col items-center justify-between gap-5 p-5 lg:flex-row">
        <section className="flex flex-col  items-center gap-2 lg:flex-row lg:gap-5">
          <div className="border-r-none border-muted-foreground lg:border-r">
            <h2 className="pr-0 text-xl lg:pr-5">Curtains & drapes</h2>
          </div>
          <div className="flex flex-wrap gap-2 lg:gap-5">
            <a href="/" className="hover:underline">
              Home
            </a>
            <a href="/" className="hover:underline">
              About
            </a>
            <a href="/" className="hover:underline">
              Career
            </a>
            <a href="/" className="hover:underline">
              Contact
            </a>
            <a href="/" className="hover:underline">
              Help
            </a>
            <a href="/" className="hover:underline">
              Privacy Policy
            </a>
          </div>
        </section>

        <div className="flex items-center gap-5">
          <a href="/">
            <FaInstagram size={25} />
          </a>

          <a href="/">
            <FaXTwitter size={25} />
          </a>

          <a href="/">
            <FaYoutube size={25} />
          </a>

          <a href="/">
            <FaWhatsapp size={25} />
          </a>
        </div>
      </footer>

      <section className="flex flex-col items-center justify-between gap-5 border-t border-muted-foreground px-10 py-5 lg:flex-row lg:gap-0">
        <p className="text-center text-sm text-muted-foreground">
          © 2023-2024 Curtains & Drapes Inc. All rights reserved | Designed in
          Bangladesh
        </p>
        <div className="text-sm text-muted-foreground">
          Crafted by{" "}
          <a
            href="https://github.com/frustrated018"
            target="_blank"
            className=" hover:text-white hover:underline"
          >
            frustrated018
          </a>
        </div>
      </section>
    </section>
  );
};

export default HomePageFooter;
