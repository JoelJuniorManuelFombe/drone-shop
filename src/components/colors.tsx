const Colors = () => {
    return (
        <section className="bg-fundoColors">
            <div className="container mx-auto lg:flex gap-10 mb-10 px-5">
                <div className="text-center pt-20 flex flex-col md:text-left">
                    <h1 className="my-10 text-4xl font-bold">Two colors. <br />
                        Choose your best.</h1>
                    <p className="mb-5 text-lg text-neutral-500">“ProDrone 2.0 changes the rules of the game in aerial photography. Now you can capture more details from a safe distance, as well as implement different visual effects with different focal lengths.”</p>
                    <h3 className="mb-1 text-3xl font-bold">Wade Warren</h3>
                    <p className="text-lg text-neutral-500">ProDrone Inc. Co-Owner</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mt-10">
                    <div className="bg-white relative hover:-top-2 flex flex-col justify-center items-center text-center rounded-md pb-16">
                        <img src="./images/01.png" alt="" />
                        <div className="grid grid-cols-1">
                            <span className="text-xs">White ProDrone 2.0</span>
                            <span className="text-base font-semibold">$1200</span>
                        </div>
                        <a className="bg-hero-btn-primary px-5 py-2 rounded-lg text-xs text-white" href="#">Buy Now</a>
                    </div>
                    <div className="bg-white relative hover:-top-2 flex flex-col justify-center items-center text-center rounded-md pb-16">
                        <img src="./images/01.png" alt="" />
                        <div className="grid grid-cols-1">
                            <span className="text-xs">White ProDrone 2.0</span>
                            <span className="text-base font-semibold">$1200</span>
                        </div>
                        <a className="bg-hero-btn-primary px-5 py-2 rounded-lg text-xs text-white" href="#">Buy Now</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Colors;