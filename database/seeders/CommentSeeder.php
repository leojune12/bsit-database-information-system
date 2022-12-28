<?php

namespace Database\Seeders;

use App\Models\Comment;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Faker\Generator;
use Illuminate\Container\Container;

class CommentSeeder extends Seeder
{
    protected $faker;

    public function __construct()
    {
        $this->faker = $this->withFaker();
    }

    protected function withFaker()
    {
        return Container::getInstance()->make(Generator::class);
    }

    public function run()
    {
        // $faker = Faker\Factory::create();

        // Comment::factory(100)->create()->each(function($comment) {

            // Comment::insert([
            //     'user_name' => $this->faker->name(),
            //     'comment' => $this->faker->sentence(),
            //     'parentable_id' => $comment->id,
            //     'parentable_type' => 'App\Models\Comment',
            //     'created_at' => $comment->created_at,
            //     'updated_at' => $comment->updated_at,
            // ]);

            // Comment::factory(rand(1, 3))->create([
            //     'user_name' => $this->faker->name(),
            //     'comment' => $this->faker->sentence(),
            //     'parentable_id' => $comment->id,
            //     'parentable_type' => 'App\Models\Comment',
            //     'created_at' => $comment->created_at,
            //     'updated_at' => $comment->updated_at,
            // ]);
        // });
    }
}
