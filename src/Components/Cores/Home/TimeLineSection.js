import React from 'react'
import logo1 from "../../../assets/TimeLineLogo/Logo1.svg"
import logo2 from "../../../assets/TimeLineLogo/Logo2.svg"
import logo3 from "../../../assets/TimeLineLogo/Logo3.svg"
import logo4 from "../../../assets/TimeLineLogo/Logo4.svg"
import TimeLineImage from "../../../assets/Images/TimelineImage.png"

const timeline = [
    {
        logo: logo1,
        heading: "Leadership",
        description: "Fully committed to the success company"
    },
    {
        logo: logo2,
        heading: "Responsibility",
        description: "Students will always be our top priority"
    },
    {
        logo: logo3,
        heading: "Flexibility",
        description: "The ability to switch is an important skills"
    },
    {
        logo: logo4,
        heading: "Solve the problem",
        description: "Code your way to a solution"
    }
]

function TimeLineSection() {
    return (
        <div className="flex lg:flex-row flex-col gap-15 justify-between items-center w-full">

            {/* Timeline */}
            <div className="flex flex-col gap-4 w-full lg:w-auto">

                {
                    timeline.map((element, index) => {
                        return (
                            <div key={index}>

                                <div className="flex flex-row gap-4">

                                    <div className="w-12 h-12 flex justify-center items-center rounded-full bg-white shrink-0">
                                        <img
                                            src={element.logo}
                                            alt={element.heading}
                                        />
                                    </div>

                                    <div>
                                        <div className="text-black font-bold">
                                            {element.heading}
                                        </div>

                                        <div>
                                            {element.description}
                                        </div>
                                    </div>

                                </div>

                                <div
                                    className={`dottedLine translate-x-5 translate-y-2 ${
                                        index === timeline.length - 1
                                            ? "hidden"
                                            : "block"
                                    }`}
                                ></div>

                            </div>
                        )
                    })
                }

            </div>


            {/* Image Section */}
            <div className="
                relative
                px-4
                py-4
                mt-6
                lg:mt-0
                w-full
                lg:w-auto
            ">

                <div className="lg:photogradient"></div>

                {/* Image */}
                <div className="w-full lg:w-[98%] flex justify-center">
                    <img
                        src={TimeLineImage}
                        alt="Timeline"
                        className="z-10 w-full h-auto"
                    />
                </div>


                {/* Green Statistics Box */}
                <div
                        className="
                            z-10
                            bg-[linear-gradient(to_top,#07A698,#1B282F)]

                            /* Mobile */
                            relative
                            w-fit
                            mx-auto
                            mt-[-20px]
                            px-5
                            py-5
                            flex
                            flex-col
                            gap-5
                            items-center
                            justify-center

                            /* Tablet */
                            sm:flex-row
                            sm:gap-0
                            sm:px-8

                            /* Desktop */
                            lg:absolute
                            lg:mx-0
                            lg:mt-0
                            lg:px-10
                            lg:py-7
                            lg:flex-row
                            lg:translate-x-[23%]
                            lg:-translate-y-[50%]
                        "
                    >

                    {/* 10 Years */}
                    <div
                        className="
                            flex
                            flex-row
                            gap-4
                            justify-center
                            items-center
                            sm:border-r-2
                            sm:border-[#037957]
                            sm:pr-4
                            lg:border-r-2
                            lg:pr-4
                        "
                    >
                        <p className="text-4xl lg:text-5xl text-white font-bold">
                            10
                        </p>

                        <p className="text-base lg:text-[1.2rem] text-white">
                            Years
                            <br />
                            of experience
                        </p>
                    </div>


                    {/* 250 Types */}
                    <div
                        className="
                            flex
                            flex-row
                            gap-4
                            justify-center
                            items-center
                            sm:pl-4
                            lg:pl-4
                        "
                    >
                        <p className="text-4xl lg:text-5xl text-white font-bold">
                            250
                        </p>

                        <p className="text-base lg:text-[1.2rem] text-white">
                            Types
                            <br />
                            of courses
                        </p>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default TimeLineSection