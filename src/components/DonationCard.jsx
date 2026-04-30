import React from 'react'

export default function DonationCard({ Coins, title, Money }) {
    return (
        <div className='border border-gray-200 flex justify-between flex-col rounded-md bg-white  shadow-sm  p-2  h-full'>
            <div >
            {Coins}
            </div>
            <div >
                <h1 className='text-sm text-gray-400'>{title}</h1>
                <h2 className='font-semibold text-lg'>{Money}</h2>
            </div>
        </div>
    )
}
