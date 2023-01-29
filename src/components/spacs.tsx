const Spacs = () => {
    return (
        <section className="container mx-auto grid lg:grid-cols-2">
            <div>
                <h1 className="my-10 pt-10 text-5xl font-bold">Spacs</h1>
                <div className="table">
                    <table className="table align-middle">
                        <tbody className="text-left">
                            <tr>
                                <th className="h-5 p-1 text-3xl">
                                    Weight (Battery & Propellers Included)</th>
                                <td className="p-1">
                                    <span className="text-2xl inline-block my-4 p-1">1400 g</span>
                                </td>
                            </tr>
                            <tr>
                                <th className="h-5 p-1 text-3xl">
                                    Max Flight Time</th>
                                <td className="p-1">
                                    <span className="text-2xl inline-block my-4 p-1">Approx. 60 minutes</span>
                                </td>
                            </tr>
                            <tr>
                                <th className="h-5 p-1 text-3xl">Vision System</th>
                                <td className="p-1">
                                    <span className="text-2xl inline-block my-4 p-1">Forward Vision System
                                        Backward Vision System
                                        Downward Vision System</span>
                                </td>
                            </tr>
                            <tr>
                                <th className="h-5 p-1 text-3xl">Obstacle Sensing</th>
                                <td className="p-1">
                                    <span className="text-2xl inline-block my-4 p-1">Front & Rear Obstacle Avoidance
                                        Left & Right Infrared Obstacle Avoidance</span>
                                </td>
                            </tr>
                            <tr>
                                <th className="h-5 p-1 text-3xl">Camera Sensor</th>
                                <td className="p-1">
                                    <span className="text-2xl inline-block my-4 p-1">1 CMOS
                                        Effective pixels: 20 M</span>
                                </td>
                            </tr>
                            <tr>
                                <th className="h-5 p-1 text-3xl">Max. Video Recording Resolution</th>
                                <td className="p-1">
                                    <span className="text-2xl inline-block my-4 p-1">4K 60P</span>
                                </td>
                            </tr>
                            <tr>
                                <th className="h-5 p-1 text-3xl">Max Transmission Distance</th>
                                <td className="p-1">
                                    <span className="text-2xl inline-block my-4 p-1">FCC: 4.3 mi</span>
                                </td>
                            </tr>
                            <tr>
                                <th className="h-5 p-1 text-3xl">Video Transmission System</th>
                                <td className="p-1">
                                    <span className="text-2xl inline-block my-4 p-1">Lightbridge</span>
                                </td>
                            </tr>
                            <tr>
                                <th className="h-5 p-1 text-3xl">Operating Frequency</th>
                                <td className="p-1">
                                    <span className="text-2xl inline-block my-4 p-1">2.4 GHz/5.8 GHz</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div>
                <div className="grid sm:grid-cols-2 grid-cols-1 content-center items-center lg:mt-20">
                    <div className="">
                        <img className="" src="./images/01.png" alt="" />
                    </div>
                    <div>
                        <img src="./images/02.png" alt="" />
                    </div>
                    <div>
                        <img src="./images/03.png" alt="" />
                    </div>
                    <div>
                        <img src="./images/04.png" alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Spacs;