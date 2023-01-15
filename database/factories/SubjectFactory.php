<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Subject>
 */
class SubjectFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'course_code' => fake()->jobTitle() . ' ' . rand(1, 4) . '0' . rand(1, 4),
            'descriptive_title' => fake()->catchPhrase(),
        ];
    }
}
