

import React from 'react'

const CardSkeleton = () => {
    return (
        <>
            <div className="flex flex-col items-center mt-4">
                <div className="user-avatar flex flex-col">
                    <div className="skeleton bg-zinc-500 animate-pulse  w-5 h-3 rounded-badge self-end"></div>
                    <div className="skeleton bg-zinc-500 animate-pulse  w-24 h-24 rounded-full" />
                </div>

                <div className="flex flex-col items-center mt-5">
                    <div className="skeleton bg-zinc-500 animate-pulse  w-32 h-6"></div>
                    <div className="skeleton bg-zinc-500 animate-pulse  w-20 h-3 mt-5 mb-4"></div>
                </div>

                <div className="sep-90 my-2" />

                <div className="user-contact w-full flex justify-center gap-x-10">
                    <div className="skeleton bg-zinc-500 animate-pulse  w-20 h-4 flex items-center justify-center my-3">
                    </div>
                    <div className="skeleton bg-zinc-500 animate-pulse  w-20 h-4 flex items-center justify-center my-3">
                    </div>
                </div>

                <div className="sep-90 my-2" />

                <div className="user-details w-full grid grid-cols-2 gap-y-4 gap-x-12 my-2 text-black/70">
                    {
                        Array.from({ length: 6 }).map((_, index) => (
                            <div key={index} className="mb-2" >
                                <div className="skeleton bg-zinc-500 animate-pulse  w-8 h-2 mb-2"></div>
                                <div className="skeleton bg-zinc-500 animate-pulse  w-28 h-3"></div>
                            </div>
                        ))
                    }
                    
                </div>

            </div>
        </>
    )
}

export default CardSkeleton