import React from 'react'

const page = () => {
  return (
    <section className="py-10 lg:py-0 mx-8">
    <div className="px-0 mx-auto max-w-7xl">
        <div className="grid items-stretch grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12 xl:gap-x-24">
            <div className="h-full pr-12 lg:order-2 lg:mb-40">
                <div className="relative h-full lg:h-auto">
                    <div className="absolute w-full h-full -mb-12 overflow-hidden bg-gradient-to-r from-fuchsia-600 to-blue-600 top-12 left-12 xl:left-16 lg:top-6 lg:scale-y-105 lg:origin-top">
                        <img className="object-cover object-right w-full h-full scale-150" src="https://cdn.rareblocks.xyz/collection/celebration/images/content/2/lines.svg" alt="" />
                    </div>
                    <div className="relative lg:top-28">
                        <img className="" src="https://images.unsplash.com/photo-1639772823849-6efbd173043c?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-start py-10 lg:order-1 sm:py-16 lg:py-24 xl:py-48">
                <div>
                    {/* <p className="text-sm font-semibold tracking-widest uppercase">Our Mission</p> */}
                    <h2 className="mt-8 text-3xl font-bold leading-tight  sm:text-4xl lg:text-5xl lg:leading-tight">About Us</h2>
                    <p className="text-xl leading-relaxed mt-9">At Our Hope, we believe that every drop counts. We are a community-driven platform dedicated to saving lives by connecting voluntary blood donors with those in urgent need. Our mission is to streamline the exchange of blood and blood products by offering a reliable, user-friendly space where donors and recipients can find each other quickly during critical moments.</p>
                    <p className="text-sm font-semibold tracking-widest uppercase mt-6">Our Mission</p>
                    <ul className='my-6 list-disc'>
                        <li className='ml-6'><span className='font-bold'>Connect Donors and Recipients:</span> List comprehensive profiles of donors alongside urgent blood requests, ensuring that both parties can swiftly find a match in times of need.</li>
                        <li className='ml-6'><span className='font-bold'>Facilitate Timely Exchange:</span> In emergencies, every minute matters. Our platform is designed to help coordinate life-saving blood exchanges in the shortest possible time.</li>
                        <li className='ml-6'><span className='font-bold'>Promote Awareness:</span> We are committed to educating the public about the importance of blood donation and encouraging more people to join our community of lifesavers.</li>
                        <li className='ml-6'><span className='font-bold'>Ensure Safety and Reliability:</span> With strict verification measures and up-to-date listings, we strive to maintain a trustworthy environment for both donors and recipients.</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</section>

  )
}

export default page