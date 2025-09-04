"use client"
import { Mail, MapPin, Phone } from 'lucide-react'
import React, { useState } from 'react'

const ContactUsBody = () => {
    const [data, setData] = useState({
        name: '',
        email: '',
        message: ''

    })

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log(data);
    }

    return (
        <div className='container mx-auto '>
            <div className="flex flex-col gap-4 mb-52 items-center justify-center mt-24">
                <h2 className="text-[#333333] text-4xl font-semibold">Contact us</h2>
                <p className="text-[#424242] font-normal text-[16px]  max-w-[700px] text-center">
                    Our team is always ready to assist you with any questions or concerns you might have.
                    Fill out the form below and we&apoch;ll get back to you as soon as possible
                </p>
            </div>
            <div className=''>
                <h3 className='text-center font-bold text-[#2A3037] text-5xl'>Contact Information</h3>
                <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 mt-16'>
                    <div className='flex flex-col md:flex-col items-center  gap-4 mt-16'>
                        <Mail width={60} hanging={48} className='text-[#00B4D8] w-14 h-12' />
                        <p className='text-[#2A3037] text-3xl font-semibold'>E-mail Address</p>
                        <span className='text-[#494E53] font-medium text-[18px]'>hello@fastlanetrade.com</span>
                    </div>
                    <div className='flex flex-col md:flex-col items-center  gap-4 mt-16'>
                        <Phone width={60} hanging={48} className='text-[#03B754] w-14 h-12' />
                        <p className='text-[#2A3037] text-3xl font-semibold'>Phone Number</p>
                        <span className='text-[#494E53] font-medium text-[18px]'>(123)9950-9697</span>
                    </div>
                    <div className='flex flex-col md:flex-col items-center  gap-4 mt-16'>
                        <MapPin width={60} hanging={48} className='text-[#D80004] w-14 h-12' />
                        <p className='text-[#2A3037] text-3xl font-semibold'>E-mail Address</p>
                        <span className='text-[#494E53] font-medium text-[18px]'>Ljfhfjuitjv,NK B.232</span>
                    </div>
                </div>
            </div>
            <hr className='border border-[#B9BABC] mt-8' />
            <div>
                <form className='max-w-4xl mt-16 mb-52'>
                    <div className='grid grid-cols-1  gap-6'>
                        <div className='flex flex-col gap-2'>
                            <label htmlFor="name" className='text-[#2A3037] font-medium text-[18px]'>Name</label>
                            <input value={data.name} onChange={(e) => setData({ ...data, name: e.target.value })} type="text" id='name' className='border border-[#B9BABC] bg-transparent rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#00B4D8]' placeholder='Your Name' />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label htmlFor="email" className='text-[#2A3037] font-medium text-[18px]'>Email</label>
                            <input value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })} type="email" id='email' className='border border-[#B9BABC] bg-transparent rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#00B4D8]' placeholder='Your Email' />
                        </div>

                        <div className='flex flex-col gap-2 '>
                            <label htmlFor="message" className='text-[#2A3037] font-medium text-[18px]'>Message</label>
                            <textarea value={data.message} onChange={(e) => setData({ ...data, message: e.target.value })} id='message' rows={5} className='border border-[#B9BABC] rounded-md p-3 bg-transparent focus:outline-none focus:ring-2 focus:ring-[#00B4D8]' placeholder='Your Message'></textarea>
                        </div>
                    </div>
                    <button onClick={onSubmit} type='submit' className='mt-8 bg-btnPrimary text-white font-semibold  py-3 px-6 rounded-md hover:bg-[#0096c7] transition-colors duration-300'>Send Message</button>

                </form>

            </div>
        </div>
    )
}

export default ContactUsBody