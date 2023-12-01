import React, {useState} from 'react';
import GuestLayout from '@/Layouts/GuestLayout.jsx'
import {Head} from "@inertiajs/react";

const Index = ({plans}) => {
    const [planType, setPlanType] = useState('Personal');
    const [billingType, setBillingType] = useState('monthly');
    const priceMultiplier = billingType === 'yearly' ? 11 : 1;
    // console.log(plans)
    const currentPlans = plans.filter(plan => plan.type === planType);
    // console.log(currentPlans)

    const handleChoosePlan = async (stripePlanId) => {
        // Call your API endpoint to create the checkout session
        try {
            const response = await axios.post('/create-checkout-session', {stripePlanId});
            // Redirect to the URL returned from your backend
            window.location = response.data.checkoutUrl;
        } catch (error) {
            console.error('Error creating checkout session:', error);
            // Handle any errors here (e.g., display an error message)
        }
    };


    return (
        <GuestLayout
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Pricing</h2>}
        >
            <Head title="Pricing"/>

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <section className="px-6 xl:px-0">
                            <div className="mt-24 mx-auto container">
                                <div className="flex flex-col lg:items-center justify-center w-full">
                                    <h1 className="font-semibold text-gray-800 text-3xl md:text-4xl">The Right Plan
                                        for your business</h1>
                                    <p className="mt-2.5 lg:w-1/2 lg:text-center text-2xl">We have several plans to
                                        showcase your Business. Get everything you need</p>
                                </div>
                                <div className="flex items-center justify-center w-full">
                                    <div className="container mx-auto">
                                        <div
                                            className="rounded-full flex items-center justify-center mt-10">
                                            <button onClick={() => setPlanType('Personal')}
                                                    className={`bg-gray-100 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:outline-none text-base leading-none text-gray-600 rounded-full py-4 px-6 mr-1 ${planType === 'Personal' ? 'bg-blue-800 text-white' : ''}`}>
                                                Personal
                                            </button>
                                            <button onClick={() => setPlanType('Business')}
                                                    className={`bg-gray-100 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none text-base leading-none text-gray-600 rounded-full py-4 px-6 mr-1 ${planType === 'Business' ? 'bg-blue-800  text-white' : ''}`}>
                                                Business
                                            </button>
                                        </div>

                                        <div
                                            className="rounded-full flex items-center justify-center mt-5 mb-5">
                                            <button onClick={() => setBillingType('monthly')}
                                                    className={`bg-gray-100 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none text-base leading-none text-gray-600 rounded-full py-4 px-6 mr-1 ${billingType === 'monthly' ? 'bg-blue-800  text-white' : ''}`}>
                                                Monthly
                                            </button>
                                            <button onClick={() => setBillingType('yearly')}
                                                    className={`bg-gray-100 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none text-base leading-none text-gray-600 rounded-full py-4 px-6 mr-1 ${billingType === 'yearly' ? 'bg-blue-800  text-white' : ''}`}>
                                                Yearly
                                            </button>
                                        </div>


                                        <div
                                            className="flex flex-wrap mb-12 justify-between sm:justify-center mx-6">
                                            {currentPlans.map((plan) => (
                                                <div key={plan.id}
                                                     className="w-full xl:w-1/3 lg:w-1/3 md:w-1/2 sm:w-1/2 mb-4 px-6">
                                                    <div
                                                        className="py-5 px-4 bg-white border border-gray-200 shadow rounded-lg text-left">
                                                        <h4 className="text-2xl text-indigo-700 font-semibold pb-8">{plan.name}</h4>
                                                        <h6 className="text-md text-indigo-700 font-semibold pb-8">{plan.description}</h6>
                                                        <ul className="flex flex-col mb-6">
                                                            {/* Render options  */}
                                                            {JSON.parse(plan.options).map((option, index) => (
                                                                <li key={index}
                                                                    className="flex items-center mb-2.5">
                                                                    <p className="text-gray-800 text-base font-normal">{option}</p>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                        <p className="text-base text-indigo-700 relative pl-3">
                                                            <span className="font-light text-lg">$</span>
                                                            {/* One month free */}
                                                            <span className="text-2xl font-semibold">{(plan.price * priceMultiplier).toFixed(2)}</span>
                                                            <span className="font-light text-lg">/{billingType}</span>
                                                        </p>
                                                        <button
                                                            onClick={() => handleChoosePlan(plan.stripe_plan)}
                                                            className="mt-5 w-full bg-gray-200 hover:bg-gray-300 focus:outline-none transition duration-150 ease-in-out rounded text-indigo-700 px-8 py-3 text-base font-semibold py-3">
                                                            Choose
                                                        </button>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </GuestLayout>
    );
};

export default Index;
