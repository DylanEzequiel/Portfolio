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
            style={{
            y,
            }}
        >
        <rect width="450" height="900" fill="#0e0f1f" />
      
        <rect width="450" height="900" fill="#0e0f1f"></rect>
    <g>
    <g transform="translate(30 257)">
    <path d="M0 -49.4L42.8 -24.7L42.8 24.7L0 49.4L-42.8 24.7L-42.8 -24.7Z" fill="#1e1c52"></path></g>
    <g transform="translate(267 203)">            
    <path d="M0 -19L16.5 -9.5L16.5 9.5L0 19L-16.5 9.5L-16.5 -9.5Z" fill="#1e1c52"></path></g>
    <g transform="translate(168 863)">
    <path d="M0 -33L28.6 -16.5L28.6 16.5L0 33L-28.6 16.5L-28.6 -16.5Z" fill="#1e1c52"></path></g>
    <g transform="translate(442 873)">
    <path d="M0 -19L16.5 -9.5L16.5 9.5L0 19L-16.5 9.5L-16.5 -9.5Z" fill="#1e1c52"></path></g>
    <g transform="translate(164 336)">
    <path d="M0 -21L18.2 -10.5L18.2 10.5L0 21L-18.2 10.5L-18.2 -10.5Z" fill="#1e1c52"></path></g>
    <g transform="translate(100 426)">
    <path d="M0 -46L39.8 -23L39.8 23L0 46L-39.8 23L-39.8 -23Z" fill="#1e1c52"></path></g>
    <g transform="translate(295 18)">
    <path d="M0 -40L34.6 -20L34.6 20L0 40L-34.6 20L-34.6 -20Z" fill="#1e1c52"></path></g>
    <g transform="translate(166 655)">
    <path d="M0 -9L7.8 -4.5L7.8 4.5L0 9L-7.8 4.5L-7.8 -4.5Z" fill="#1e1c52"></path></g>
    <g transform="translate(178 44)">
    <path d="M0 -21L18.2 -10.5L18.2 10.5L0 21L-18.2 10.5L-18.2 -10.5Z" fill="#1e1c52"></path></g>
    <g transform="translate(95 773)">
    <path d="M0 -36L31.2 -18L31.2 18L0 36L-31.2 18L-31.2 -18Z" fill="#1e1c52"></path></g>
    <g transform="translate(296 371)">
    <path d="M0 -35L30.3 -17.5L30.3 17.5L0 35L-30.3 17.5L-30.3 -17.5Z" fill="#1e1c52"></path></g>
    <g transform="translate(354 481)">
    <path d="M0 -32L27.7 -16L27.7 16L0 32L-27.7 16L-27.7 -16Z" fill="#1e1c52"></path></g>
    <g transform="translate(394 595)">
    <path d="M0 -8L6.9 -4L6.9 4L0 8L-6.9 4L-6.9 -4Z" fill="#1e1c52"></path></g>
    <g transform="translate(335 837)">
    <path d="M0 -15L13 -7.5L13 7.5L0 15L-13 7.5L-13 -7.5Z" fill="#1e1c52"></path></g>
    <g transform="translate(82 531)">
    <path d="M0 -35L30.3 -17.5L30.3 17.5L0 35L-30.3 17.5L-30.3 -17.5Z" fill="#1e1c52"></path></g>
    <g transform="translate(125 155)">
    <path d="M0 -28L24.2 -14L24.2 14L0 28L-24.2 14L-24.2 -14Z" fill="#1e1c52"></path></g>
    <g transform="translate(16 48)">
    <path d="M0 -22L19.1 -11L19.1 11L0 22L-19.1 11L-19.1 -11Z" fill="#1e1c52"></path></g>
    <g transform="translate(291 641)">
    <path d="M0 -17L14.7 -8.5L14.7 8.5L0 17L-14.7 8.5L-14.7 -8.5Z" fill="#1e1c52"></path></g>
    <g transform="translate(448 429)">
    <path d="M0 -43L37.2 -21.5L37.2 21.5L0 43L-37.2 21.5L-37.2 -21.5Z" fill="#1e1c52"></path></g>
    <g transform="translate(412 108)">
    <path d="M0 -26L22.5 -13L22.5 13L0 26L-22.5 13L-22.5 -13Z" fill="#1e1c52"></path></g>
    <g transform="translate(418 298)">
    <path d="M0 -12L10.4 -6L10.4 6L0 12L-10.4 6L-10.4 -6Z" fill="#1e1c52"></path></g>
    <g transform="translate(369 727)">
    <path d="M0 -26L22.5 -13L22.5 13L0 26L-22.5 13L-22.5 -13Z" fill="#1e1c52"></path></g>
    <g transform="translate(207 564)">
    <path d="M0 -12L10.4 -6L10.4 6L0 12L-10.4 6L-10.4 -6Z" fill="#1e1c52"></path></g>
    <g transform="translate(199 762)">
    <path d="M0 -10L8.7 -5L8.7 5L0 10L-8.7 5L-8.7 -5Z" fill="#1e1c52"></path></g>
    <g transform="translate(27 677)">
    <path d="M0 -15L13 -7.5L13 7.5L0 15L-13 7.5L-13 -7.5Z" fill="#1e1c52"></path></g>
    <g transform="translate(68 869)">
    <path d="M0 -16L13.9 -8L13.9 8L0 16L-13.9 8L-13.9 -8Z" fill="#1e1c52"></path></g>
    <g transform="translate(23 157)">
    <path d="M0 -36L31.2 -18L31.2 18L0 36L-31.2 18L-31.2 -18Z" fill="#1e1c52"></path></g>
    <g transform="translate(5 384)">
    <path d="M0 -13L11.3 -6.5L11.3 6.5L0 13L-11.3 6.5L-11.3 -6.5Z" fill="#1e1c52"></path></g>
    <g transform="translate(438 7)">
    <path d="M0 -6L5.2 -3L5.2 3L0 6L-5.2 3L-5.2 -3Z" fill="#1e1c52"></path></g>
    <g transform="translate(212 456)">
<path d="M0 -18L15.6 -9L15.6 9L0 18L-15.6 9L-15.6 -9Z" fill="#1e1c52"></path></g></g>
      </motion.svg>
    </div>
  )
}

export default BgParallax