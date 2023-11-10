import {Link, Head} from '@inertiajs/react';
import {useState} from "react";

export default function Welcome({auth}) {
    const [show, setShow] = useState(false);

    return (
        <>
            <Head title="Welcome"/>
            <div
                className="relative sm:flex sm:justify-center sm:items-center min-h-screen bg-center selection:bg-red-500 selection:text-black">
                <div className="sm:fixed sm:top-0 sm:right-0 p-6 text-right">
                    {auth.user ? (
                        <>
                            <Link
                                href={route('home')}
                                className="mr-4 font-semibold text-gray-600 hover:text-black dark:text-gray-400  focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                            >
                                Home
                            </Link>
                            <Link
                                href={route('pricing')}
                                className="mr-4 font-semibold text-gray-600 hover:text-black dark:text-gray-400  focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                            >
                                Pricing
                            </Link>
                            <Link
                                href={route('download')}
                                className="mr-4 font-semibold text-gray-600 hover:text-black dark:text-gray-400  focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                            >
                                Download
                            </Link>
                            <Link
                                href={route('contact-us')}
                                className="mr-4 font-semibold text-gray-600 hover:text-black dark:text-gray-400  focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                            >
                                Contact
                            </Link>
                            <Link
                                href={route('about')}
                                className="mr-4 font-semibold text-gray-600 hover:text-black dark:text-gray-400  focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                            >
                                About
                            </Link>
                            <Link
                                href={route('dashboard')}
                                className="mr-4 font-semibold text-gray-600 hover:text-black dark:text-gray-400  focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                            >
                                Dashboard
                            </Link>
                        </>
                    ) : (
                        <>
                            <Link
                                href={route('home')}
                                className="mr-4 font-semibold text-gray-600 hover:text-black dark:text-gray-400  focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                            >
                                Home
                            </Link>
                            <Link
                                href={route('pricing')}
                                className="mr-4 font-semibold text-gray-600 hover:text-black dark:text-gray-400  focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                            >
                                Pricing
                            </Link>
                            <Link
                                href={route('download')}
                                className="mr-4 font-semibold text-gray-600 hover:text-black dark:text-gray-400  focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                            >
                                Download
                            </Link>
                            <Link
                                href={route('contact-us')}
                                className="mr-4 font-semibold text-gray-600 hover:text-black dark:text-gray-400  focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                            >
                                Contact
                            </Link>
                            <Link
                                href={route('about')}
                                className="mr-4 font-semibold text-gray-600 hover:text-black dark:text-gray-400  focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                            >
                                About
                            </Link>
                            <Link
                                href={route('login')}
                                className="mr-4 font-semibold text-gray-600 hover:text-black dark:text-gray-400  focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                            >
                                Log in
                            </Link>
                            <Link
                                href={route('register')}
                                className="mr-4 font-semibold text-gray-600 hover:text-black dark:text-gray-400  focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                            >
                                Register
                            </Link>
                        </>
                    )}
                </div>
                <div className="flex justify-center items-center bg-white p-10">
                    <div className="max-w-4xl flex flex-col md:flex-row justify-between items-center">
                        {/* Text Content */}
                        <div className="md:w-1/2">
                            <h1 className="text-5xl font-bold mb-6">
                                Welcome to EzePost
                            </h1>
                            <p className="text-gray-600 mb-6">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras hendrerit sodales nibh, vel semper est elementum vitae. Pellentesque ornare justo quis dolor ultricies, in aliquet ipsum interdum. In hac habitasse platea dictumst. Duis dictum aliquam turpis eu iaculis. Cras venenatis efficitur lectus non sagittis.
                                Proin massa elit, tincidunt quis dignissim ac, venenatis eu neque. Maecenas fermentum purus eget eros faucibus malesuada. Maecenas lectus dolor, condimentum vitae quam ut, maximus tincidunt ex. Aliquam sed libero at purus mattis blandit eu non justo. Cras porta malesuada odio non ultrices.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700">
                                    Get Started
                                </button>
                                <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700">
                                   Request Live Demo
                                </button>
                            </div>
                        </div>

                        {/* Dotted Grid and Image */}
                        <div className="mt-10 md:mt-0 w-full md:w-1/2 lg:w-1/12">
                            {/* Dotted Grid */}
                            <div
                                className="hidden lg:block absolute bg-repeat"
                                style={{
                                    top: '300px',
                                    right: '100px', // Starts from the right edge
                                    bottom: '350px',
                                    left: '60%', // Starts from half the width of the container
                                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='10' cy='10' r='2' fill='%233b82f6'/%3E%3C/svg%3E")`,
                                    backgroundSize: '40px 40px'
                                }}
                            ></div>
                        </div>


                    </div>
                </div>
            </div>
        </>
    );
}
