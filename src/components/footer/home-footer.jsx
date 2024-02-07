const HomePageFooter = () => {
  return (
    <section className="bg-secondary">
      <footer className="flex items-center gap-5 p-5">
        <div className="border-r border-muted-foreground">
          <h2 className="text-xl pr-2">Curtains & drapes</h2>
        </div>

        <div className="flex flex-wrap gap-5">
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
        </div>
      </footer>

      <section className="border-t border-muted-foreground py-2 flex justify-between items-center px-10">
        <p className="text-sm text-center text-muted-foreground">
          © 2023-2024 Curtains & Drapes Inc. All rights reserved | Designed in
          Bangladesh
        </p>
        <div className="text-muted-foreground text-sm">
            Crafted by <a href="https://github.com/frustrated018" target="_blank" className=" hover:underline hover:text-white">frustrated018</a>
        </div>
      </section>
    </section>
  );
};

export default HomePageFooter;
