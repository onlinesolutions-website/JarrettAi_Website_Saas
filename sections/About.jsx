'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About JarrettAi" textStyles="text-center" />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        <span className="font-extrabold text-white">JarrettAi</span> is a new
        wave of the future, <span className="font-extrabold text-white">JarrettAi can eliminate 99% of the headaches</span> caused for everyone who has <span className="font-extrabold text-white">to create TEXT, IMAGE, & VIDEO Content.</span> You, Your company, or ANYONE can utilize JarrettAi to SAVE TIME & SAVE MONEY. <br></br>JarrettAi just made making content 500% more swift & easier!{' '}
        <span className="font-extrabold text-white">
          <br></br><br></br>DON'T WASTE ANY MORE TIME!<br></br><br></br>
        </span>{' '}
       Sign Up today! It's{' '}
        <span className="font-extrabold text-white">FREE</span> to Try for 7 days.{' '}
        <span className="font-extrabold text-white">YOU</span> will be grateful you did! JarrettAi is ready to do 80%+ of your content creation work and <span className="font-extrabold text-white">FREE</span> Give you back YOUR Time!{' '}
        <br></br><br></br><span className="font-extrabold text-white">SIGN UP TODAY!</span>
      </motion.p>

      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;