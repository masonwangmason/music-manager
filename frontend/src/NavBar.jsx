function NavBar() {
  return (
    <section className="flex flex-col items-center my-5">
      <div className="navbar flex flex-row justify-between gap-2  w-full max-w-sm">
          <a href="/" className="text-slate-400 hover:text-slate-50 transition duration-400">Projects</a>
          <a href="/beat" className="text-slate-400 hover:text-slate-50 transition duration-400">Beat Collections</a>
          <a href="/" className="text-slate-400 hover:text-slate-50 transition duration-400">Profile</a>
      </div>
    </section>
  );
}

export default NavBar;
