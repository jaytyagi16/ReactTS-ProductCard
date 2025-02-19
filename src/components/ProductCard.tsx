import React from 'react'
import courseImage from "../assets/course_1662795698.jpg"
import avatar from "../assets/avatar.jpg"
import heart from "../assets/heart.png"
import eye from "../assets/view.png"

const ProductCard: React.FC = () => {
  return (
    <div className='w-96'>

        <div className='flex flex-col gap-4'>
            {/* image container */}
            <div className='rounded-xl flex overflow-hidden'>
                <img src={courseImage} alt="Image" loading='lazy' className=' object-cover'/>
            </div>

            {/* additional info */}
            <div className='flex items-center justify-between'>
                <div className='flex items-center gap-2'>
                    <img src={avatar} alt="Avatar" loading='lazy' width={20} height={20} className='rounded-full' />
                    <p className='font-bold'>Mako Tserteli</p>
                    <div className='bg-gray-400 px-1 rounded-sm'>
                        <p className='text-white font-bold text-sm'>PRO</p>
                    </div>
                </div>
                <div className='flex gap-4 items-center'>
                    <div className='flex items-center gap-1'>
                        <img src={heart} alt="Likes" loading='lazy' height={20} width={20} />
                        <p>76</p>
                    </div>
                    <div className='flex items-center gap-1'>
                        <img src={eye} alt="Views" loading='lazy' height={20} width={20} />
                        <p>12.3k</p>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default ProductCard