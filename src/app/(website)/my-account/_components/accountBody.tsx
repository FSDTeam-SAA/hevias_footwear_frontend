import { ChevronRight } from 'lucide-react'
import React from 'react'

const AccountBody = () => {
    return (
        <div>
            <h1 className='text-[#1C2228] font-semibold text-[40px] text-center mt-24 mb-11'>Buyer Profile</h1>
            <div className='space-y-5'>
                <div className='border rounded-xl items-center border-[#BABABA] cursor-pointer py-4 px-4 flex justify-between  bg-[#F2F1F0]'>
                    <h1 className='text-[#212121] font-semibold text-[24px] '>Profile Edit</h1>
                    <ChevronRight />
                </div>
                <div className='border rounded-xl border-[#BABABA] cursor-pointer items-center py-4 px-4 flex justify-between  bg-[#F2F1F0]'>
                    <h1 className='text-[#212121] font-semibold text-[24px]  '>Change Password</h1>
                    <ChevronRight />
                </div>
            </div>
        </div>
    )
}

export default AccountBody