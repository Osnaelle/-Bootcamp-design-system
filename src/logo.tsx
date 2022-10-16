
import  { SVGAttributes } from "react"

interface LogoProps extends SVGAttributes< HTMLOrSVGElement>{}
export function Logo (props: LogoProps) {
  return (
    <svg
      width={74}
      height={74}
      viewBox="0 0 74 74"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M64.75 51.25v-28.5a2.341 2.341 0 00-1.185-2.024L38.127 6.417a2.254 2.254 0 00-2.254 0L10.435 20.726a2.342 2.342 0 00-1.185 2.023v28.502a2.342 2.342 0 001.185 2.023l25.438 14.309a2.254 2.254 0 002.254 0l25.438-14.309a2.342 2.342 0 001.185-2.023v0z"
        stroke="#fff"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M64.432 21.564L37.26 37 9.568 21.564M37.26 37L37 67.872"
        stroke="#fff"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M51.164 13.73L37 21.71 22.836 13.73M50.875 60.414V44.487l13.875-7.805M23.125 60.414V44.487L9.25 36.682"
        stroke="#fff"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        />
    </svg>
  )
}

