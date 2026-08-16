import React from 'react'
import CTABUtton from './CTABUtton'
import { FaArrowRight } from "react-icons/fa"
import { TypeAnimation } from 'react-type-animation'

function CodeBlocks({
    content1,
    content2,
    position,
    heading,
    subheading,
    codeblock,
    codeColor,
    gradient
}) {
    return (
        <div
            className={`
                flex flex-col
                ${position}
                mx-auto
                justify-center
                items-center
                relative
                gap-14
                mt-[4rem]
                w-full
                px-4
                lg:flex-row
                lg:items-center
            `}
        >

            {/* Text Section */}
            <div
                className="
                    flex flex-col
                    gap-5
                    w-full
                    md:w-[70%]
                    lg:w-[35%]
                    items-center
                    text-center
                    lg:items-start
                    lg:text-left
                "
            >
                {heading}

                <div className="text-richblack-300 text-[16px]">
                    {subheading}
                </div>

                <div
                    className="
                        flex
                        gap-4
                        mt-2
                        flex-wrap
                        justify-center
                        lg:justify-start
                    "
                >
                    <CTABUtton
                        routLocation={content1.routLocation}
                        active={content1.active}
                    >
                        <div className="flex gap-2 items-center">
                            {content1.desc}
                            <FaArrowRight />
                        </div>
                    </CTABUtton>

                    <CTABUtton
                        routLocation={content2.routLocation}
                        active={content2.active}
                    >
                        {content2.desc}
                    </CTABUtton>
                </div>
            </div>

            {/* Code Block */}
            <div
                className="
                    h-fit
                    text-[10px]
                    flex
                    gap-3
                    border
                    border-richblack-800
                    w-full
                    max-w-[350px]
                    relative
                    font-mono
                    font-bold
                    px-2
                    py-2
                "
            >
                <div
                    className={`${gradient == "1" ? "gradient1" : "gradient2"}`}
                ></div>

                {/* Line Numbers */}
                <div
                    className="
                        w-[10%]
                        flex
                        flex-col
                        gap-2
                        items-center
                        text-center
                        text-richblack-400
                        font-inter
                        font-bold
                    "
                >
                    <p>1</p>
                    <p>2</p>
                    <p>3</p>
                    <p>4</p>
                    <p>5</p>
                    <p>6</p>
                    <p>7</p>
                    <p>8</p>
                    <p>9</p>
                </div>

                {/* Code */}
                <div
                    className={`
                        w-[90%]
                        flex
                        flex-col
                        gap-2
                        font-bold
                        font-mono
                        pr-2
                        ${codeColor}
                        overflow-hidden
                    `}
                >
                    <TypeAnimation
                        sequence={[
                            codeblock,
                            2000,
                            ""
                        ]}
                        repeat={Infinity}
                        cursor={true}
                        style={{
                            whiteSpace: "pre-line",
                            display: "block"
                        }}
                        omitDeletionAnimation={true}
                    />
                </div>
            </div>

        </div>
    )
}

export default CodeBlocks