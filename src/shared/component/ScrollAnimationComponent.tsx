import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export default function ScrollAnimationComponent(): React.ReactNode {
  const { scrollYProgress } = useScroll();

  // Define the initial and animate properties for each corner
  const topLeftInitial = { x: "0%", y: "0vh", opacity: 1 };
  const topRightInitial = { x: "0%", y: "0vh" };
  const bottomLeftInitial = { x: "0%", y: "0vh" };
  const bottomRightInitial = { x: "0%", y: "0vh" };

  // Transform properties based on scroll progress
  const xTransform = useTransform(scrollYProgress, [0, 0.3], ["0vw", "20vw"]);
  const yTransform = useTransform(scrollYProgress, [0, 0.3], ["0%", "150vh"]);

  const trxTransform = useTransform(
    scrollYProgress,
    [0, 0.3],
    ["0vw", "-20vw"]
  );
  const tryTransform = useTransform(scrollYProgress, [0, 0.3], ["0%", "150vh"]);

  const brxTransform = useTransform(
    scrollYProgress,
    [0, 0.5],
    ["0vw", "-30vw"]
  );
  const bryTransform = useTransform(scrollYProgress, [0, 0.3], ["0%", "70vh"]);

  const blxTransform = useTransform(scrollYProgress, [0, 0.3], ["0%", "30vw"]);
  const blyTransform = useTransform(scrollYProgress, [0, 0.3], ["0%", "70vh"]);

  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  return (
    <div className="absolute invisible md:visible -z-10 h-full -top-4 left-0 w-full overflow-hidden lg:overflow-visible sm:overflow-visible">
      <div>
        <motion.div
          className="w-40  absolute shadow-2xl rounded-lg flex items-left flex-col justify-center  h-fit"
          style={{ x: xTransform, y: yTransform, opacity, rotateZ: -20 }}
          initial={topLeftInitial}
        >
          <div className="  p-4 grid gap-2 leading-3">
            <h1 className="font-bold underline-offset-1 underline">NextJS</h1>
            <h1>Web Services</h1>
            <h1>UI/UX</h1>
            <Image
              alt="nextjs"
              className="absolute bg-white rounded-full	p-1 -top-3 -right-4 bg-content-200"
              src="/next-js.svg"
              height={45}
              width={45}
            />
          </div>
        </motion.div>
        <motion.div
          className="right-0 w-max shadow-2xl rounded-lg absolute h-fit"
          style={{ x: trxTransform, y: tryTransform, opacity, rotateZ: 20 }}
          initial={topRightInitial}
        >
          <div className=" p-4 flex flex-row">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              id="Layer_1"
              data-name="Layer 1"
              viewBox="0 0 24 24"
              width="28"
              height="28"
            >
              <path d="M24,9.5v10c0,2.48-2.02,4.5-4.5,4.5H4.5c-2.48,0-4.5-2.02-4.5-4.5V7.5C0,5.02,2.02,3,4.5,3H13.5c.28,0,.5,.22,.5,.5s-.22,.5-.5,.5H4.5c-1.61,0-2.97,1.09-3.38,2.57L9.52,14.97c1.36,1.37,3.58,1.36,4.95,0l4.67-4.82c.19-.2,.51-.2,.71-.01,.2,.19,.2,.51,.01,.71l-4.67,4.83c-.88,.88-2.04,1.32-3.19,1.32s-2.3-.44-3.18-1.32L1,7.86v11.64c0,1.93,1.57,3.5,3.5,3.5h15c1.93,0,3.5-1.57,3.5-3.5V9.5c0-.28,.22-.5,.5-.5s.5,.22,.5,.5Zm-8-5.5c0-2.21,1.79-4,4-4s4,1.79,4,4-1.79,4-4,4-4-1.79-4-4Zm1,0c0,1.65,1.35,3,3,3s3-1.35,3-3-1.35-3-3-3-3,1.35-3,3Z" />
            </svg>

            <div
              data-tip="Send Grid"
              className="lg:tooltip text-left"
            >
              <h2 className="text-lg ml-4">Re:Qualifying times...</h2>
            </div>
          </div>
          <Image
            alt="nextjs"
            className="absolute -right-4 -top-4"
            src="/sendgrid.svg"
            height={40}
            width={40}
          />
        </motion.div>
        <motion.div
          className="bottom-0 backdrop-blur-md  w-max    absolute left-0 h-fit"
          style={{ x: blxTransform, y: blyTransform, opacity, rotateZ: -20 }}
          initial={bottomLeftInitial}
        >
          <div className="gap-2 shadow-2xl borders rounded-lg p-4 leading-3 flex flex-row ">
            <Image
              alt="nextjs"
              className="bg-white"
              src="/stripe.svg"
              height={85}
              width={85}
            />
            <span className="grid gap-3">
              <h1 className="font-bold underline-offset-1 underline">Stripe</h1>
              <h1>Embedded Checkout</h1>
              <h1>Webhook</h1>
              <h1>International Payements</h1>
            </span>
          </div>
        </motion.div>
        <motion.div
          className="w-fit absolute shadow-2xl rounded-lg right-0 bottom-0 h-fit"
          style={{ x: brxTransform, y: bryTransform, opacity, rotateZ: 20 }}
          initial={bottomRightInitial}
        >
                    <div className="flex p-4 leading-3 justify-between flex-row-reverse ">

            <span className="grid gap-2">
            <h1 className="font-bold underline-offset-1 underline">Mongo DB</h1>
              <h2>Document-Oriented</h2>
              <h2>Schema-less</h2>
              <h2>mongoose</h2>
            </span>
          <Image alt="nextjs" src="/mongo.svg" height={85} width={85} />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
