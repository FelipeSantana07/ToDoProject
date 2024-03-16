<?php
declare(strict_types=1);

namespace App\Test\TestCase\Model\Table;

use App\Model\Table\ItensTable;
use Cake\TestSuite\TestCase;

/**
 * App\Model\Table\ItensTable Test Case
 */
class ItensTableTest extends TestCase
{
    /**
     * Test subject
     *
     * @var \App\Model\Table\ItensTable
     */
    protected $Itens;

    /**
     * Fixtures
     *
     * @var array<string>
     */
    protected $fixtures = [
        'app.Itens',
    ];

    /**
     * setUp method
     *
     * @return void
     */
    protected function setUp(): void
    {
        parent::setUp();
        $config = $this->getTableLocator()->exists('Itens') ? [] : ['className' => ItensTable::class];
        $this->Itens = $this->getTableLocator()->get('Itens', $config);
    }

    /**
     * tearDown method
     *
     * @return void
     */
    protected function tearDown(): void
    {
        unset($this->Itens);

        parent::tearDown();
    }

    /**
     * Test validationDefault method
     *
     * @return void
     * @uses \App\Model\Table\ItensTable::validationDefault()
     */
    public function testValidationDefault(): void
    {
        $this->markTestIncomplete('Not implemented yet.');
    }
}
