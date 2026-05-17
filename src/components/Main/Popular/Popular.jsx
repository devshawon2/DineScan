import React, { use, useMemo } from 'react';
import { StarIcon } from "@heroicons/react/20/solid";

const Popular = ({ menuPromise }) => {
    const popular = use(menuPromise);
    const popularItems = popular.foods;
    const topTen = useMemo(() => {
        return popularItems.toSorted((a, b) => b.ratingCount - a.ratingCount).slice(0, 6);
    }, [popularItems]);
    return (
        <div className='w-[70%] mx-auto my-10'>
            <div className='flex justify-between'>
                <h3 className='text-xl roboto-bold'>Popular Now</h3>
                <div className='btn border-none bg-base-100 shadow-none DineScan-primary'>View All &gt;</div>
            </div>
            <br />
            <div className='grid grid-cols-4 gap-3'>
                {
                    topTen.map((food) => {
                        const { name, image, rating, ratingCount, tags, price, description } = food;
                        return (
                            <a href="">
                                <div key={food.id} className="h-96 card bg-base-100 shadow-sm hover:shadow-lg hover:transition-transform hover:duration-500 hover:ease-out">
                                    <figure>
                                        <img className='w-full h-48 object-cover'
                                            src={image}
                                            alt="" />
                                    </figure>
                                    <div className="card-body">
                                        <h2 className="card-title">{name}</h2>
                                        <p>{description}</p>
                                        <div className="card-actions justify-start">
                                            {
                                                tags.map(tag => {
                                                    return (
                                                        <div key={tag.id} className="badge badge-outline p-3 border-none bg-gray-100">{tag}</div>
                                                    )
                                                })
                                            }
                                        </div>
                                        <div className="card-actions">
                                            <div className="w-full flex justify-between items-center">
                                                <div className='flex gap-2 items-center'>
                                                    <StarIcon className="h-6 w-6 text-[#ff6f00]" />
                                                    <p className='roboto-bold'>{rating}</p>
                                                    <p>({ratingCount})</p>
                                                </div>
                                                <div>
                                                    <h3 className='roboto-bold DineScan-primary'>৳<span>{price}</span></h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Popular;