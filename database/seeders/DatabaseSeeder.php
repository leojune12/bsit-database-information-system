<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Database\Seeders\CommentSeeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);

        $this->call([
            RolesDatabaseSeeder::class,
            AdminUserDatabaseSeeder::class,
            StudentUserSeeder::class,
            CommentSeeder::class,
            // CategoryDatabaseSeeder::class,
            // SubcategoryDatabaseSeeder::class,
            AddressDatabaseSeeder::class,
            SubjectSeeder::class,
            UserDatabaseSeeder::class,
        ]);
    }
}
