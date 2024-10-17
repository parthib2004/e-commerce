/* eslint-disable react/no-unescaped-entities */

const Testimonial = () => {
    return (
        <div>
            <section className="mb-10 text-gray-600 body-font">
                {/* main  */}
                <div className="container px-5 py-10 mx-auto">
                    {/* Heading  */}
                    <h1 className='text-3xl font-bold text-center text-black ' >Testimonial</h1>
                    {/* para  */}
                    <h2 className='mb-10 text-2xl font-semibold text-center ' >What our <span className='text-pink-500 '>customers</span> are saying</h2>

                    <div className="flex flex-wrap -m-4">
                        {/* Testimonial 1 */}
                        <div className="p-4 mb-6 lg:w-1/3 lg:mb-0">
                            <div className="h-full text-center">
                                <p className="leading-relaxed">The E-Commerce platform MyStore built for us is nothing short of exceptional. The user interface is intuitive, and the checkout process is smooth and secure. Our customers love the experience, and we’ve seen a significant boost in sales since launching. I highly recommend Parthib Sarkar for his professionalism and technical expertise!</p>
                                <span className="inline-block w-10 h-1 mt-6 mb-4 bg-pink-500 rounded" />
                                <h2 className="text-sm font-medium tracking-wider text-gray-900 uppercase title-font"></h2>
                                <p className="text-gray-500"></p>
                            </div>
                        </div>

                        {/* Testimonial 2 */}
                        <div className="p-4 mb-6 lg:w-1/3 lg:mb-0">
                            <div className="h-full text-center">
                                <p className="leading-relaxed">Working with Parthib Sarkar to build our e-commerce site was a breeze. They understood our vision and brought it to life with an easy-to-navigate platform that is both visually appealing and functional. The site handles traffic effortlessly, and the admin dashboard makes managing our products a joy. We couldn’t be happier!</p>
                                <span className="inline-block w-10 h-1 mt-6 mb-4 bg-pink-500 rounded" />
                                <h2 className="text-sm font-medium tracking-wider text-gray-900 uppercase title-font"></h2>
                                <p className="text-gray-500"></p>
                            </div>
                        </div>

                        {/* Testimonial 3 */}
                        <div className="p-4 lg:w-1/3 lg:mb-0">
                            <div className="h-full text-center">
                                <p className="leading-relaxed">Our new e-commerce store has been a game-changer, and we owe it all to Parthib Sarkar! From product listings to secure payments, everything works seamlessly. The platform is responsive, fast, and designed beautifully. I highly recommend Parthib Sarkar for anyone looking to build a robust online store.</p>
                                <span className="inline-block w-10 h-1 mt-6 mb-4 bg-pink-500 rounded" />
                                <h2 className="text-sm font-medium tracking-wider text-gray-900 uppercase title-font"></h2>
                                <p className="text-gray-500"></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Testimonial