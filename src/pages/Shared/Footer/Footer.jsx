

const Footer = () => {
    return (
        <footer className="footer p-2 md:p-6 lg:p-10 bg-slate-900 text-base-content">
            <aside >
                <div className="flex items-center">
                    <img className="w-12 lg:w-20" src="https://i.ibb.co/R0W5r98/Capture-removebg-preview.png" alt="" />
                    <p className="btn font-semibold text-indigo-800 btn-ghost text-lg lg:text-2xl">Urban<span className="text-lime-600">Charm</span></p>
                </div>
            </aside>
            <nav className="text-white">
                <h6 className="footer-title">Links</h6>
                <a className="link link-hover">Home</a>
                <a className="link link-hover">New Complex</a>
                <a className="link link-hover">Apartment Plans</a>
            </nav>
            <nav className="text-white">
                <a className="link link-hover">News</a>
                <a className="link link-hover">Contact Us</a>
                <a className="link link-hover">About us</a>
            </nav>
            <nav className="text-white">

                <form className="text-white">
                    <h6 className="footer-title text-center">Subscribe To Our Newsletter</h6>
                    <fieldset className="form-control lg:w-80">
                        <div className="join rounded-full">
                            <input type="text" placeholder="username@site.com" className="input input-bordered join-item" />
                            <button className="btn btn-primary bg-indigo-800 join-item">Subscribe</button>
                        </div>
                    </fieldset>
                </form>
            </nav>


        </footer>
    );
};

export default Footer;