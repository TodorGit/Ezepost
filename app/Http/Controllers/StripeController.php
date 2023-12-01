<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Stripe\Stripe;

class StripeController extends Controller
{
    public function createCheckoutSession(Request $request)
    {
        // Set your secret key. Remember to switch to your live secret key in production!
        // See your keys here: https://dashboard.stripe.com/apikeys

        Stripe::setApiKey(env('STRIPE_KEY'));

        $checkoutSession = \Stripe\Checkout\Session::create([
            'payment_method_types' => ['card'],
            'line_items' => [[
                'price' => $request->stripePlanId,
                'quantity' => 1,
            ]],
            'mode' => 'subscription',
            'success_url' => url('/payment/success'), // URL to which the customer is redirected after a successful payment
            'cancel_url' => url('/payment/cancel'), // URL to which the customer is redirected if they cancel payment
        ]);

        return response()->json(['checkoutUrl' => $checkoutSession->url]);
    }
}
