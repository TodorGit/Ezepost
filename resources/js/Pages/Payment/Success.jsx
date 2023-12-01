import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head, Link} from '@inertiajs/react';

const Success = ({auth}) => {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Payment Successful</h2>}
        >
            <Head title="Payment Successful"/>
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg p-6">
                        <p>Your payment was successful. Thank you for your purchase!</p>
                        <Link href={route('dashboard')} className="bg-green-600 text-white">Go back to
                            dashboard</Link>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Success;
