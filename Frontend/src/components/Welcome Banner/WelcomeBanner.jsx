import React from 'react'

function WelcomeBanner() {
  return (
    <section aria-labelledby='WelcomeBanner' className='p-10 pt-0 min-h-[500px]'>
        <div className='bg-Primary-Blue-100 flex flex-row h-[450px] rounded-xl p-10'>
            {/* Left */}
            <div className="w-[50%] bg-yellow-200 "> 
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