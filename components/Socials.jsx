'use client'

import { RiYoutubeFill, RiLinkedinFill, RiGithubFill, RiFacebookFill, RiInstagramFill } from 'react-icons/ri'


import Link from 'next/link';

const icons = [
  // {
  //   path: '/',
  //   name: <RiYoutubeFill />,
  // },
  {
    path: 'https://www.linkedin.com/in/daniyal-sajid-ab5838293',
    name: <RiLinkedinFill />,
  },
  {
    path: 'https://github.com/DaniSajid',
    name: <RiGithubFill />,
  },
  // {
  //   path: '/',
  //   name: <RiFacebookFill />,
  // },
  {
    path: 'https://www.instagram.com/daniyalsajid00',
    name: <RiInstagramFill />,
  },
]

const Socials = ({ containerStyles, iconsStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => {
        return <Link href={icon.path} target='_blank' key={index}>
          <div className={`${iconsStyles}`}>{icon.name}</div>
        </Link>
      })}
    </div>
  )
}

export default Socials