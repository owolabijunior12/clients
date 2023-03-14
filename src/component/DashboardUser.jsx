import React from 'react'
import { useStateValue } from '../Context/StateProvider'


const DashboardUser = () => {
    const [{allUsers},dispstch ] = useStateValue()
  return (
    <div className="w-full p-4 flex items-center justify-center flex-col">
      <div className="relative w-full py-12 min-h[400px] overflow-x-scroll my-4 flex flex-col items-center justify-start p-4 border-gray-300 rounded-md gap-3">
          <div className='absolute top-4 left-4'>
                <p className='text-sm font-bold'>
                      count : <span className='text-xl font-bold text-textColor'>{allUsers?.length}</span>
                </p>
          </div>

          <div className='w-full min-w-[750px] flex items-center justify-between'>          
            <p className="text-sm text-textColor font-semibold w-275 min-w-[160px] text-center">Image</p>          
          <p className="text-sm text-textColor font-semibold w-275 min-w-[160px] text-center">Name</p>          
          <p className="text-sm text-textColor font-semibold w-275 min-w-[160px] text-center">Email</p>          
          <p className="text-sm text-textColor font-semibold w-275 min-w-[160px] text-center">Verified</p>          
          <p className="text-sm text-textColor font-semibold w-275 min-w-[160px] text-center">Created</p>          
          <p className="text-sm text-textColor font-semibold w-275 min-w-[160px] text-center">Role</p>
          </div>
      </div>
    </div>
  )
}

export default DashboardUser
