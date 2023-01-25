import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";


const Footer = () => {
    return (
        <section className="bg-footerColor">
            <div className="container mx-auto">
                <div className="grid md:grid-cols-3 p-10 border-b space-y-10 gap-10">
                    <div className="space-y-5">
                        <h1 className="text-white text-xl font-bold">Newsletter</h1>
                        <p className="text-sm text-slate-400">Please, subscribe to our newsletter to keep updated about our news and offers.</p>
                        <form className="flex" action="" method="post">
                            <input className="py-2 px-3 outline-none rounded-l-lg" type="text" placeholder="Email" />
                            <span></span>
                            <button className="bg-hero-btn-primary rounded-r-lg p-3" type="submit">Subscribe</button>
                        </form>
                    </div>
                    <div>
                        <div className="flex flex-col space-y-5">
                            <h1 className="text-white text-xl font-bold">Our office</h1>
                            <a className="text-slate-400 text-xs" href="">
                                <span></span>
                                <span>3517 W. Gray St. Utica,
                                    Pennsylvania 57867</span>
                            </a>
                            <a className="text-slate-400 text-xs" href="">
                                <span></span>
                                <span>3517 W. Gray St. Utica,
                                    Pennsylvania 57867</span>
                            </a>
                            <a className="text-slate-400 text-xs" href="">
                                <span></span>
                                <span>3517 W. Gray St. Utica,
                                    Pennsylvania 57867</span>
                            </a>
                        </div>
                    </div>
                    <div>
                        <div className="flex flex-col space-y-5">
                            <h1 className="text-white text-xl font-bold">Payments accepted</h1>
                            <div className="flex gap-5">
                                <a href="">
                                    <img src="./images/visa.png" alt="" />
                                </a>
                                <a href="">
                                    <img src="./images/mastercard.png" alt="" />
                                </a>
                                <a href="">
                                    <img src="./images/paypal.png" alt="" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="py-10 space-y-5 md:flex md:justify-between mx-10">
                    <div>
                        <p className="text-slate-500 text-xs">© All rights reserved. Made by Createx Studio</p>
                    </div>
                    <div className="flex gap-5">
                        <a className="rounded-full" href="">
                            <BsFacebook
                                color="white"
                            />
                        </a>
                        <a className="rounded-full" href="">
                            <BsInstagram
                                color="white"
                            />
                        </a>
                        <a className="rounded-full" href="">
                            <BsTwitter
                                color="white"
                            />
                        </a>
                    </div>
                </div>
            </div>
            <div>

            </div>
        </section>
    )
}

export default Footer;