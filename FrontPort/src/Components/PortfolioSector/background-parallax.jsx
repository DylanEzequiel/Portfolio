import { useScroll, useTransform,motion } from 'framer-motion';
import  { useRef } from 'react'

function BgParallax() {
    const ref=useRef(null)

    const {scrollYProgress} =useScroll({
        target:ref,
        offset: ["start center", "end start"]
    })

    const y = useTransform(scrollYProgress,[0,1],["-30%","30%"])
  return (
    <div ref={ref} className="relative w-full h-full overflow-hidden">
        <motion.svg
  viewBox="0 0 450 900"
  preserveAspectRatio="xMidYMid slice"
  className="absolute inset-0 w-full h-full"
  style={{ y }}
>
  <rect width="450" height="900" fill="#0e0f1f" />

  <g>
    <g transform="translate(30 257)">
      <path d="M0 -49.4L42.8 -24.7L42.8 24.7L0 49.4L-42.8 24.7L-42.8 -24.7Z" fill="#1e1c52" />
    </g>
    <g transform="translate(267 203)">
      <path d="M0 -19L16.5 -9.5L16.5 9.5L0 19L-16.5 9.5L-16.5 -9.5Z" fill="#1e1c52" />
    </g>
    <g transform="translate(168 863)">
      <path d="M0 -33L28.6 -16.5L28.6 16.5L0 33L-28.6 16.5L-28.6 -16.5Z" fill="#1e1c52" />
    </g>
    <g transform="translate(442 873)">
      <path d="M0 -19L16.5 -9.5L16.5 9.5L0 19L-16.5 9.5L-16.5 -9.5Z" fill="#1e1c52" />
    </g>
    <g transform="translate(164 336)">
      <path d="M0 -21L18.2 -10.5L18.2 10.5L0 21L-18.2 10.5L-18.2 -10.5Z" fill="#1e1c52" />
    </g>
    <g transform="translate(100 426)">
      <path d="M0 -46L39.8 -23L39.8 23L0 46L-39.8 23L-39.8 -23Z" fill="#1e1c52" />
    </g>
    <g transform="translate(295 18)">
      <path d="M0 -40L34.6 -20L34.6 20L0 40L-34.6 20L-34.6 -20Z" fill="#1e1c52" />
    </g>
    <g transform="translate(166 655)">
      <path d="M0 -9L7.8 -4.5L7.8 4.5L0 9L-7.8 4.5L-7.8 -4.5Z" fill="#1e1c52" />
    </g>
    <g transform="translate(178 44)">
      <path d="M0 -21L18.2 -10.5L18.2 10.5L0 21L-18.2 10.5L-18.2 -10.5Z" fill="#1e1c52" />
    </g>
    <g transform="translate(95 773)">
      <path d="M0 -36L31.2 -18L31.2 18L0 36L-31.2 18L-31.2 -18Z" fill="#1e1c52" />
    </g>
    {/* ...el resto igual, todos con <path ... /> */}
  </g>
</motion.svg>
    </div>
  )
}

export default BgParallax