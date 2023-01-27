<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Section>
 */
class SectionFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        $year = rand(1, 4);
        return [
            'curriculum_id' => rand(1, 2),
            'academic_year_id' => rand(1, 2),
            'name' => $year . '-' . fake()->regexify('[A-D]{1}'),
            'year' => $year,
        ];
    }
}
