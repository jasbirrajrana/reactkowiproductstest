import React from 'react';
import"./Cell05.css";
const BmiLogsImages = "https://cdn.kowi.in/products/BodyCompositionScale/BodyComposition/5.svg"

function Cell05() {
    return (
        <>
            <section className="bmi-logs-wrapper">
                    <div className="sect-05-col-01">
                        <div className="content sect-05-content">
                            <p>
                                You do not have to set any sophisticated electronic equipments up for this. With the help of the <b className="bold-text">sockets embedded</b> in the machine and the use of <b className="bold-text">cutting edge IOT technology</b> employed by our company, you will be able to view these metrics in real-time on the KOWI application.
                           </p>
                        </div>
                    </div>
                    <div className="sect-05-col-02">
                        <div className="sect-05-image">
                            <img src={BmiLogsImages} alt="" />
                        </div>
                    </div>
            </section>
        </>
    )
}

export default Cell05
