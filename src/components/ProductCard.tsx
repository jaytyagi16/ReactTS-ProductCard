import React from 'react'
import avatar from "../assets/avatar.jpg"
import heart from "../assets/heart.png"
import eye from "../assets/view.png"

interface ProductCardProps{
    image: string;
    likes: number;
    views: number;
    author: string;
}

const ProductCard: React.FC<ProductCardProps> = (props) => {
    const {image, likes, views, author} = props;
  return (
    <div className='w-96'>

        <div className='flex flex-col gap-4'>
            {/* image container */}
            <div className='rounded-xl flex overflow-hidden'>
                <img src={image} alt="Image" loading='lazy' className=' object-cover'/>
            </div>

            {/* additional info */}
            <div className='flex items-center justify-between'>
                <div className='flex items-center gap-2'>
                    <img src={avatar} alt="Avatar" loading='lazy' width={20} height={20} className='rounded-full' />
                    <p className='font-bold'>{author}</p>
                    <div className='bg-gray-400 px-1 rounded-sm'>
                        <p className='text-white font-bold text-sm'>PRO</p>
                    </div>
                </div>
                <div className='flex gap-4 items-center'>
                    <div className='flex items-center gap-1'>
                        <img src={heart} alt="Likes" loading='lazy' height={20} width={20} />
                        <p>{likes}</p>
                    </div>
                    <div className='flex items-center gap-1'>
                        <img src={eye} alt="Views" loading='lazy' height={20} width={20} />
                        <p>{views}k</p>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default ProductCard