import React from 'react'
import HilightedText from './Highlighted'
import knowYourProgress from "../../../assets/Images/Know_your_progress.png"
import compareWithOthers from "../../../assets/Images/Compare_with_others.png"
import planYourLesson from "../../../assets/Images/Plan_your_lessons.png"
import CTABUtton from './CTABUtton'

function LearningLanguageSection() {
  return (
    <div className='flex flex-col gap-8 px-2 py-3 mt-20 items-center justify-center'>

      {/* Heading */}
      <div className='text-3xl md:text-4xl font-semibold mx-auto text-center'>
        <p>
          Your Swiss knife for{" "}
          <HilightedText text={"learning any language"} />
        </p>
      </div>

      {/* Description */}
      <div className='w-[90%] md:w-[70%] text-sm md:text-[16px] font-semibold text-center'>
        Using spin making learning multiple languages easy. with 20+ languages
        realistic voice-over, progress tracking, custom schedule and more.
      </div>

      {/* Images */}
      <div className='
        flex
        flex-col
        lg:flex-row
        items-center
        justify-center
        w-full
        -translate-y-4
        lg:-translate-y-14
      '>

        <img
          src={knowYourProgress}
          alt="Know your progress"
          className='
            object-contain
            w-[80%]
            sm:w-[65%]
            md:w-[50%]
            lg:w-auto
            scale-100
            lg:scale-90
            mr-0
            lg:-mr-32
          '
        />

        <img
          src={compareWithOthers}
          alt="Compare with others"
          className='
            object-contain
            w-[80%]
            sm:w-[65%]
            md:w-[50%]
            lg:w-auto
            scale-100
            lg:scale-90
            mr-0
            lg:-mr-14
          '
        />

        <img
          src={planYourLesson}
          alt="Plan your lesson"
          className='
            object-contain
            w-[80%]
            sm:w-[65%]
            md:w-[50%]
            lg:w-auto
            scale-100
            lg:scale-90
            ml-0
            lg:-ml-32
          '
        />

      </div>

      {/* Button */}
      <div className='mt-0 lg:-mt-20'>
        <CTABUtton
          routLocation={"/signup"}
          active={true}
        >
          Learn More
        </CTABUtton>
      </div>

    </div>
  )
}

export default LearningLanguageSection