import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head, Link} from '@inertiajs/react';
import {IoCloudDownloadSharp, IoReceiptSharp} from "react-icons/io5";

const Index = ({auth, packages}) => {
    console.log(packages)
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Packages</h2>}
        >
            <Head title="Packages"/>

            <div className="py-12">
                <div className="max-w-8xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg px-4 py-4">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead>
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    File Name
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    From
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    File Size
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Sent Time
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Actions
                                </th>
                            </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                            {packages.data.map((pakage) => (
                                <tr key={pakage.id}>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        {pakage.file_name}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        {pakage.sender_displayname} ({pakage.sender_vepost_addr})
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        {pakage.file_size_original}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        {pakage.time_send_start}
                                    </td>
                                    <td className="px-4 py-4 whitespace-nowrap text-right text-sm font-medium flex">
                                        <a href={'home'} className="mr-4 text-blue-500 hover:text-purple-900">
                                            <IoCloudDownloadSharp size={30}/>
                                        </a>
                                        <a href={'home'} className="text-yellow-500 hover:text-red-700 ml-2">
                                            <IoReceiptSharp size={30}/>
                                        </a>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="mt-10">
                        <nav className="flex justify-between items-center">
                            <ul className="flex list-none">
                                {packages.links.map((link, index) => {
                                    const isActive = link.active;
                                    return (
                                        <li key={index}>
                                            <Link
                                                as="button"
                                                href={link.url ? link.url : '#'}
                                                className={`mx-1 px-2 py-1 text-md font-medium rounded-md
                                        ${isActive ? 'bg-blue-500 text-white' : 'text-blue-500 bg-white hover:bg-gray-100'}`}
                                                dangerouslySetInnerHTML={{__html: link.label}}
                                                disabled={!link.url}
                                            ></Link>
                                        </li>
                                    );
                                })}
                            </ul>

                        </nav>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Index;
