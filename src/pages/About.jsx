import React from "react";

const About = () => {
  return (
    <main className="about bg-white min-h-screen ">
      <div className="pg-header">
        <div className="container ">
          <h2 className="">About</h2>
        </div>
      </div>

      <div className="container content grid sm:grid-cols-1  md:grid-cols-3 grid-cols-1 gap-2 bg-white text-sm leading-5">
        <div clasName="about_detail">
          <h2 className="uppercase text-lg relative font-semibold pb-2 "> Why choose Us.</h2>
          <p className="pt-2">
            is a complex and fascinating phenomenon that permeates many aspects
            of our universe. At its core, randomness refers to events,
            processes, or sequences that lack discernible patterns or
            predictable outcomes. True randomness is characterized by a complete
            absence of order, meaning past events have no bearing on future
            ones. This contrasts with determinism, which holds that everything
            is causally linked.
          </p>
        </div>
        <div clasName="">
          <h2 className="uppercase text-lg relative font-semibold  pb-2 ">Our Mission.</h2>
          <p className="pt-2">
            is a complex and fascinating phenomenon that permeates many aspects
            of our universe. At its core, randomness refers to events,
            processes, or sequences that lack discernible patterns or
            predictable outcomes. True randomness is characterized by a complete
            absence of order, meaning past events have no bearing on future
            ones. This contrasts with determinism, which holds that everything
            is causally linked.
          </p>
        </div>
        <div clasName="">
          <h2 className="uppercase text-lg relative font-semibold  pb-2">What We Do.</h2>
          <p className="pt-2">
 className="pt-2"            is a complex and fascinating phenomenon that permeates many aspects
            of our universe. At its core, randomness refers to events,
            processes, or sequences that lack discernible patterns or
            predictable outcomes. True randomness is characterized by a complete
            absence of order, meaning past events have no bearing on future
            ones. This contrasts with determinism, which holds that everything
            is causally linked.
          </p>
        </div>
      </div>
    </main>
  );
};

export default About;
