import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head, Link} from '@inertiajs/react';

export default function Dashboard({auth}) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard"/>
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="bg-gray-100 p-10">
                            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
                                {/* Received Packages Card */}
                                <div className="bg-white p-4 rounded-lg shadow flex">
                                    <div className="flex-shrink-0 mr-4">
                                        <svg className="w-28 h-28" viewBox="0 0 20 10">
                                            <path
                                                fillRule="evenodd"
                                                d="M14.854 4.854a.5.5 0 000-.708l-4-4a.5.5 0 00-.708.708L13.293 4H3.5A2.5 2.5 0 001 6.5v8a.5.5 0 001 0v-8A1.5 1.5 0 013.5 5h9.793l-3.147 3.146a.5.5 0 00.708.708l4-4z"
                                            />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold">Received Packages</h3>
                                        <p className="text-sm text-gray-600">Here are the biggest enterprise technology
                                            acquisitions of 2021 so far, in reverse chronological order.</p>
                                        <Link href={route('packages.category', {category: 'received'})}
                                              className="mt-4 bg-blue-600 text-white rounded py-2 px-4 flex items-center">
                                            RECEIVED PACKAGES
                                            <span className="ml-2 bg-blue-700 py-1 px-3 rounded-full text-xs">65</span>
                                        </Link>
                                    </div>
                                </div>

                                {/* Sent Packages Card */}
                                <div className="bg-white p-4 rounded-lg shadow flex">
                                    <div className="flex-shrink-0 mr-4">
                                        <svg className="w-28 h-28" viewBox="0 0 20 10">
                                            <path
                                                fillRule="evenodd"
                                                d="M1.146 4.854a.5.5 0 010-.708l4-4a.5.5 0 11.708.708L2.707 4H12.5A2.5 2.5 0 0115 6.5v8a.5.5 0 01-1 0v-8A1.5 1.5 0 0012.5 5H2.707l3.147 3.146a.5.5 0 11-.708.708l-4-4z"
                                            />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold">SENT Packages</h3>
                                        <p className="text-sm text-gray-600">Here are the biggest enterprise technology
                                            acquisitions of 2021 so far, in reverse chronological order.</p>
                                        <Link href={route('packages.category', {category: 'sent'})}
                                              className="mt-4 bg-blue-600 text-white rounded py-2 px-4 flex items-center">
                                            SENT PACKAGES
                                            <span className="ml-2 bg-blue-700 py-1 px-3 rounded-full text-xs">65</span>
                                        </Link>
                                    </div>
                                </div>

                                {/*Viewed Packages Card */}

                                <div className="bg-white p-4 rounded-lg shadow flex">
                                    <div className="flex-shrink-0 mr-4">
                                        <svg className="w-28 h-28" viewBox="0 0 20 12">
                                            <path
                                                d="M11 1a2 2 0 00-2 2v4a2 2 0 012 2v5a2 2 0 01-2 2H3a2 2 0 01-2-2V9a2 2 0 012-2h5V3a3 3 0 016 0v4a.5.5 0 01-1 0V3a2 2 0 00-2-2zM3 8a1 1 0 00-1 1v5a1 1 0 001 1h6a1 1 0 001-1V9a1 1 0 00-1-1H3z"/>

                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold">Viewed Packages</h3>
                                        <p className="text-sm text-gray-600">Here are the biggest enterprise technology
                                            acquisitions of 2021 so far, in reverse chronological order.</p>
                                        <Link href={route('packages.category', {category: 'viewed'})}
                                              className="mt-4 bg-blue-600 text-white rounded py-2 px-4 flex items-center">
                                            VIEWED PACKAGES
                                            <span className="ml-2 bg-blue-700 py-1 px-3 rounded-full text-xs">65</span>
                                        </Link>
                                    </div>
                                </div>

                                {/* All Packages */}

                                <div className="bg-white p-4 rounded-lg shadow flex">
                                    <div className="flex-shrink-0 mr-4">
                                        <svg className="w-28 h-28" viewBox="0 0 20 10">
                                            <path
                                                fill="currentColor"
                                                d="M16 5L8 1 0 5l8 4 8-4zM8 2.328L13.345 5 8 7.672 2.655 5 8 2.328zm6.398 4.871L16 8l-8 4-8-4 1.602-.801L8 10.398zm0 3L16 11l-8 4-8-4 1.602-.801L8 13.398z"
                                            />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold">All Packages</h3>
                                        <p className="text-sm text-gray-600">Here are the biggest enterprise technology
                                            acquisitions of 2021 so far, in reverse chronological order.</p>
                                        <Link href={route('packages.category', {category: 'all'})}
                                              className="mt-4 bg-blue-600 text-white rounded py-2 px-4 flex items-center">
                                            ALL PACKAGES
                                            <span className="ml-2 bg-blue-700 py-1 px-3 rounded-full text-xs">65</span>
                                        </Link>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
