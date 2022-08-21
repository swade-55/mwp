import React from 'react'

const Contact = () => {
  return (
    <div name = 'contact' className='w-full h-screen bg-[#301728FF] flex justify-center items-center p-4'>
        <form method = 'POST' action="https://getform.io/f/53c563d5-9461-4aff-bd4a-b5cfc05ad19a" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#93385FFF] text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'>Email me at samuelrcwade@gmail.com</p>
            </div>
            <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#ccd6f6] p-2' name="message" placeholder='Message' rows="10"></textarea>
            <button className='text-white border-2 hover:bg-[#93385FFF] hover:border-[#93385FFF] px-4 py-3 my-8 mx-auto flex items-center'> Let's Collaborate</button>
        </form>

    </div>
  )
}

export default Contact