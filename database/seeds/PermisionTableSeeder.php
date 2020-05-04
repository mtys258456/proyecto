<?php
use Caffeinated\Shinobi\Models\Permission;
use Illuminate\Database\Seeder;

class PermisionTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Permission::create([
            'name' => "acceder a categorias",
            'slug' => "categorias.index",
            'description' => "mostrar el menu de categorias"
        ]);
    }
}
