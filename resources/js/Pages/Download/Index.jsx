import React from 'react';
import GuestLayout from '@/Layouts/GuestLayout.jsx'
import {Head} from "@inertiajs/react";

const Index = () => {
    return (
        <GuestLayout
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">About</h2>}
        >
            <Head title="About"/>

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        {/*HERE IT WOULD GO THE content bascically ( children ) */}
                        <div className="p-6 text-gray-900">This is Download  page</div>
                    </div>
                </div>
            </div>
        </GuestLayout>
    );
};

export default Index;
