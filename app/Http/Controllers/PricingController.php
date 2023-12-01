<?php

namespace App\Http\Controllers;

use App\Models\Vepost_Plans;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PricingController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {

        $allPlans = Vepost_Plans::all();
       // dd($allPlans);
        return Inertia::render('Pricing/Index', [
            'plans' => $allPlans,
        ]);

    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
