import React from 'react'

function WelcomeBanner() {
  return (
    <section aria-labelledby='WelcomeBanner' className='bg-red-500 p-10 min-h-[500px]'>
        <div className='bg-white'>
            {/* Left */}
            <div className="w-[50%] bg-yellow-200"> 
                <div className="">
                    <div className="">
                        <img src="" alt="" />
                    </div>
                </div>
            </div>
            {/* Right */}
            <div className="w-[50%] bg-green-400">right</div>
        </div>
    </section>
  )
}

export default WelcomeBanner