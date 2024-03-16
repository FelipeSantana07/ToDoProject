<?php
declare(strict_types=1);

namespace App\Test\Fixture;

use Cake\TestSuite\Fixture\TestFixture;

/**
 * ItensFixture
 */
class ItensFixture extends TestFixture
{
    /**
     * Init method
     *
     * @return void
     */
    public function init(): void
    {
        $this->records = [
            [
                'id' => 1,
                'body' => 'Lorem ipsum dolor sit amet',
                'status' => 1,
                'created' => '2024-03-12 23:33:10',
                'modified' => '2024-03-12 23:33:10',
            ],
        ];
        parent::init();
    }
}
