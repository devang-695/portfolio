import React, { useRef } from "react";
import Card from "../components/Card";
import { Globe } from "../components/Globe";
import CopyEmailButton from "../components/CopyEmailButton";
import { Frameworks } from "../components/FrameWorks";

const About = () => {
  const grid2Container = useRef();
  return (
    <section className="section-spacing c-space">
      <h2 className="text-heading">About Me</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        {/* { Grid 1 */}
        <div className="flex items-end grid-default-color grid-1">
          <img
            src="assets/coding-pov.png"
            className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md: left-50 md:inset-y-10 lg:scale-[2.5]"
          />
          <div className="z-10">
            <p>Hi, I'm Devang Kushwah</p>
            <p>
              Over the last 3+ year, I developed my frontend and backend dev
              skills to deliveer dynamic and responsive software and web
              application
            </p>
          </div>
        </div>
        {/* { Grid 2 */}
        <div className="grid-default-color grid-2">
          <div
            ref={grid2Container}
            className="flex items-center justify-center w-full h-full"
          >
            <p className="flex items-end text-5xl text-gray-500">
              CODE IS CRAFT
            </p>
            <Card
              contarinerRef={grid2Container}
              style={{ rotate: "-10deg", top: "23%", left: "42%" }}
              image="assets/logos/nodejs.svg"
            />
            <Card
              contarinerRef={grid2Container}
              style={{ rotate: "-10deg", top: "53%", left: "42%" }}
              image="assets/logos/nextjs.svg"
            />
            <Card
              contarinerRef={grid2Container}
              style={{ rotate: "-10deg", top: "3%", left: "92%" }}
              image="assets/logos/mongodb.svg"
            />
            <Card
              style={{ rotate: "-10deg", top: "53%", left: "02%" }}
              contarinerRef={grid2Container}
              image="assets/logos/react.svg"
            />
            <Card
              contarinerRef={grid2Container}
              style={{ rotate: "-30deg", top: "53%", left: "75%" }}
              image="assets/logos/tailwindcss.svg"
            />

            <Card
              contarinerRef={grid2Container}
              style={{ rotate: "-10deg", top: "13%", left: "20%" }}
              image="assets/logos/javascript.svg"
            />
          </div>
        </div>
        {/* { Grid 3 */}
        <div className="grid-black-color grid-3">
          <div className="z-10 w-[50%]">
            <p className="headtext">Time Zone</p>
            <p className="subtext">
              I'm based in Mars, and open to remote work worldwide
            </p>
          </div>
          <figure className="absolute left-[30%] top-[10%]">
            <Globe />
          </figure>
        </div>
        {/* { Grid 4 */}
        <div className="grid-special-color grid-4">
          <div className="flex flex-col items-center justify-center gap-4 size-full">
            <p>Do you want to start a project together?</p>
            <CopyEmailButton />
          </div>
        </div>
        {/* { Grid 5 */}
        <div className="grid-default-color grid-5">
          <div className="z-10 w-[50%]">
            <p className="headtext">Teck Stack</p>
            <p className="subtext">
              I specialize in a variety of languages, frameworks, and tools that
              allow me to build robust and scalable applications
            </p>
          </div>
          <div
            className="absolute inset-y-0 md:inset-y-9
           w-full h-full start-[50%] md:scale-125"
          >
            <Frameworks />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
