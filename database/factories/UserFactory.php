<?php

namespace Database\Factories;

use Illuminate\Support\Str;
use Illuminate\Support\Facades\Hash;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\User>
 */
class UserFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'id_number' => date("Y") . fake()->regexify('[0-9]{6}'),
            'first_name' => fake()->firstName(),
            'last_name' => fake()->lastName(),
            'middle_name' => fake()->lastName(),
            'date_of_birth' => fake()->dateTimeBetween('-30 years', '-20 years'),

            'email' => fake()->unique()->safeEmail(),
            'contact_number' => fake()->phoneNumber(),
            'guardian_name' => fake()->name(),
            'guardian_relationship' => fake()->word(),
            'guardian_contact_number' => fake()->phoneNumber(),

            'email_verified_at' => now(),
            'password' => Hash::make("pw@12345"),
            'remember_token' => Str::random(10),
        ];
    }

    /**
     * Indicate that the model's email address should be unverified.
     *
     * @return static
     */
    public function unverified()
    {
        return $this->state(fn (array $attributes) => [
            'email_verified_at' => null,
        ]);
    }
}
