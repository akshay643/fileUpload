'use client'
import React from 'react'
import Typewriter from "typewriter-effect";
const Hero = () => {
  return (
    <section className="bg-primary text-white">
  <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
    <div className="mx-auto max-w-3xl text-center">
      <h1
        className="text-white bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
      >
        Understand User Flow.

        <span className="sm:block"> Increase Conversion. </span>
      </h1>

      <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed text-white">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus
        numquam ea!
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
      <button
                              type="submit"
                              className="nb butn bord curve mt-30"
                            >
                              <span>Send Massege</span>
                            </button>

                            <button
                              type="submit"
                              className="nb butn bord curve mt-30"
                            >
                              <span>Explore</span>
                            </button>
      </div>
    </div>
  </div>
</section>
  )
}

export default Hero