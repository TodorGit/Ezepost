<?php

namespace App\Http\Controllers;

use App\Models\Vepost_tracking;
use Inertia\Inertia;

class PackageController extends Controller
{
    public function getPackages($category)
    {
        $receiver = '2334407987654321';
        $sender = '2334407123456789';
//        amount of packages to show per page
        $perPage = 10;

        if ($category == 'all') {
            $packages = Vepost_tracking::orderBy('ltime_recv_end', 'desc')->paginate($perPage);
        } elseif ($category == 'sent') {
            $packages = Vepost_tracking::where('sender_vepost_addr', $sender)->paginate($perPage);
        } elseif ($category == 'received') {
            $packages = Vepost_tracking::where('receiver_vepost_addr', $receiver)->paginate($perPage);
        } elseif ($category == 'viewed') {
            $packages = Vepost_tracking::where('view_once', '>=', 1)->paginate($perPage);
        } else {
            // Handle the case where the category is not valid
            return redirect()->route('dashboard');
        }

//        dd($packages);
        return Inertia::render('Packages/Index', [
            'packages' => $packages,
        ]);
    }
}
