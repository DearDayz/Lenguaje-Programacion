<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class ProductServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        // Register the migrations
        $this->loadMigrationsFrom(__DIR__.'/migrations');

        // Register the routes
        $this->loadRoutesFrom(base_path('routes/api.php'));
    }
}