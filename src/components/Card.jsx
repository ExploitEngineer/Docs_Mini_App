import { FiFileText } from "react-icons/fi";
import { MdOutlineFileDownload } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { motion } from 'framer-motion';

const Card = ({ data, reference }) => {
    return (
        <>
            <motion.div drag dragConstraints={reference} whileDrag={{ scale: 1.1 }} dragElastic={0.2} dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }} className="relative w-60 h-72 bg-zinc-900/90 rounded-[45px] text-white py-10 px-8 overflow-hidden">
                <FiFileText />
                <p className="text-sm leading-tight mt-5 font-semibold">{data.desc}</p>
                <div className="footer absolute bottom-0 left-0 w-full">
                    <div className="flex items-center justify-between px-8 py-3 mb-3">
                        <h5>{data.filesize}</h5>
                        <span className="w-7 h-7 rounded-full bg-zinc-600 flex items-center justify-center">
                            {data.close ? <IoClose /> : <MdOutlineFileDownload size=".8em" color='#fff' />}
                        </span>
                    </div>
                    {
                        data.tag.isOpen && (
                            <div className={`tag w-full py-4 flex items-center justify-center ${data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"}`}>
                                <h3 className="text-sm font-semibold">{data.tag.tagTitle}</h3>
                            </div>
                        )
                    }
                </div>
            </motion.div >
        </>
    )
}

export default Card;
