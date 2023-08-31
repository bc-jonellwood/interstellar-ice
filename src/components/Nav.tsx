import BClogo from '/BCLogoBlue.png';
import { motion } from 'framer-motion';
import { useState } from 'react';


const navMotion = {
    visible: {
        opacity: 1,

        transition: {
            when: 'beforeChildren',
            staggerChildren: 0.15,
        },
    },
    hidden: {
        opacity: 0,
    }
}
const itemMotion = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -100 },
}
const itemMotionDesktop = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: 0 },
}
const navLinks = [
    { name: 'Home', href: '/', id: 1 },
    { name: 'FAQ', href: '/faq', id: 2 },
    { name: 'Projects', href: '/project_dashboard', id: 3 },
    { name: 'Photos', href: '/project_photos', id: 4 },
    { name: 'Roadway Petition', href: '/road_petition', id: 5 },
    { name: 'Contact', href: '/contact', id: 6 },
]

const NavLinks = ({
  isMobile,
  className,
}: {
  isMobile: boolean
  className: string
}) => (
  <div className={className}>
    {navLinks.map(({ name, href, id }) => (
      <motion.a
        key={id}
        variants={isMobile ? itemMotion : itemMotionDesktop}
        href={href}
      >
        {name}
      </motion.a>
    ))}
  </div>
)

export default function Nav() {
    const [toggled, setToggled] = useState(false);
    return (
      <nav className="relative mx:2 mb-2 mt-5 flex items-center justify-between pb-6 font-medium md:mx-16 lg:mx-32">  
      {/* <svg
        className="absolute bottom-0 left-1/2 -translate-x-1/2"
        width="450"
        height="4"
        viewBox="0 0 250 4"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          animate={{ pathLength: 1, opacity: 1 }}
          initial={{ pathLength: 1, opacity: 1 }}
          transition={{ delay: 1, duration: 0.75 }}
          d="M2 2L428 1.99996"
          stroke="#282828"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg> */}

      <motion.div
        animate={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -25 }}
        transition={{ delay: 0.35 }}
        className="flex gap-12 w-1/6 items-center justify-center"
      >
        <img src={BClogo} alt="BGC Logo" className="scale-75 xl:block lg:block mlg:block md:hidden sm:hidden xsm:hidden"/>
        
        {/* <div className="items-center gap-12 flex w-10">
          <img src={BClogo} alt="Test" />
        </div> */}
      </motion.div>
      {/* Title */}

      {/* <h1 className="text-lg font-bold">
        <a href="/">One Cent Sales Tax</a>
      </h1> */}

      {/* Nav Items animating in  */}
      {toggled && (
        <motion.div
          variants={navMotion}
          animate="visible"
          initial="hidden"
          className="fixed left-0 top-0 z-40 flex h-screen w-full flex-col items-center justify-center gap-24 bg-sky-blue text-2xl font-bold overflow-hidden">
          <NavLinks
            className="flex flex-col gap-24 text-lg"
            isMobile={true}
          />
        </motion.div>
      )}
      <motion.div
        animate={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 25 }}
        transition={{ delay: 0.35 }}
        className="hidden xl:flex xl:items-center xl:justify-center xl:gap-10 xl:text-lg">
        <NavLinks className="flex gap-12" isMobile={false} />
      </motion.div>

      {/* Hamburger Toggle */}
      <motion.div
        animate={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 25 }}
        transition={{ delay: 0.35 }}
        onClick={() => setToggled((prevToggle) => !prevToggle)}
        className={"burger z-50 cursor-pointer space-y-1.5 xl:hidden"}
      >
        <motion.span
          animate={{ rotateZ: toggled ? 45 : 0, y: toggled ? 8 : 0 }}
          className="line line-1 block h-0.5 w-8 bg-content bg-accent-dark"
        ></motion.span>

        <motion.span
          animate={{ width: toggled ? 0 : 24 }}
          className=" line line-2 block h-0.5 w-6 bg-content bg-accent-dark"
        ></motion.span>
        <motion.span
          animate={{
            rotateZ: toggled ? -45 : 0,
            y: toggled ? -8 : 0,
            width: toggled ? 32 : 24,
          }}
          className="line-3 block h-0.5 w-8 bg-content bg-accent-dark"
        ></motion.span>
      </motion.div>
    </nav>
    )
}