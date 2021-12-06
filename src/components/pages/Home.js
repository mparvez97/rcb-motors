import React from "react";

function Home() {
    return (
        <div id="home">
            <div id="home-bg-cover">
                <div className="overlay">
                    <div className="overlay-text">
                        <h1>RCB Motor Showroom</h1>
                    </div>
                </div>
            </div>
            <div>
                <div id="jobs-container">
                    <summary>
                        <h1 id="heading-container">Regular Car of Brooklyn</h1>
                        <p>
                            Based in Brooklyn, NYC, RCB was founded ni 2010 bringing the award wining car to the USA with our newest edition to the line up, RCB 1 and RCB 2. Despite being camparatively new to the USA, our global network is extremely well established. We have almost 100 years of automotive experience and experties behind us.
                        </p>
                    </summary>
                </div>
            </div>
        </div>
    );
}

export default Home;