import Image from "next/image"


const DevImg = ({ containerStyles, imgSrc }) => {
  return (
    <div className={`${containerStyles}`}>
      <Image src={imgSrc} className="rounded-[54%_46%_50%_50%_/_56%_26%_74%_44%]" fill priority alt="dev image" />
    </div>
  )
}

export default DevImg

// 54%_46%_50%_50%_/_56%_26%_74%_44% 