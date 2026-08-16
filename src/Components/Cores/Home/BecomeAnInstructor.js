import React from 'react'
import CTABUtton from './CTABUtton'
import Instructor from "../../../assets/Images/Instructor.png"
import HilightedText from './Highlighted'

function BecomeAnInstructor() {
  return (
    <div
      className='
        flex
        flex-col
        lg:flex-row
        items-center
        gap-8
        lg:gap-14
        mt-4
        w-full
      '
    >

      {/* Instructor Image */}
      <div className='w-full lg:w-1/2 flex justify-center'>
        <img
          src={Instructor}
          alt='Become An Instructor'
          className='
            becomeInstructor
            w-full
            h-auto
            object-contain
          '
        />
      </div>


      {/* Content */}
      <div
        className='
          flex
          flex-col
          gap-8
          lg:gap-12
          w-full
          lg:w-1/2
          items-center
          lg:items-start
          text-center
          lg:text-left
        '
      >

        {/* Heading */}
        <p
          className='
            w-full
            lg:w-[70%]
            text-3xl
            md:text-4xl
            font-semibold
            text-white
          '
        >
          Become an{" "}
          <HilightedText text={"Instructor"} />
        </p>


        {/* Description */}
        <p
          className='
            text-sm
            md:text-[16px]
            w-full
            lg:w-[70%]
            leading-6
          '
        >
          Instructors from around the world teach millions of students on
          LearningBuddy. We provide the tools and skills to teach what you love.
        </p>


        {/* Button */}
        <div className='w-fit'>
          <CTABUtton
            routLocation={"/signup"}
            active={true}
          >
            Learn More
          </CTABUtton>
        </div>

      </div>

    </div>
  )
}

export default BecomeAnInstructor