<?php
/**
 * @var \App\View\AppView $this
 * @var \App\Model\Entity\Iten $iten
 */
?>
<div class="row">
    <aside class="column">
        <div class="side-nav">
            <h4 class="heading"><?= __('Actions') ?></h4>
            <?= $this->Html->link(__('Delete Itens'), ['action' => 'delete']) ?>
        </div>
    </aside>
    <div class="column-responsive column-80">
        <div class="itens form content">
            <?= $this->Form->delete($iten) ?>
            <fieldset>
                <legend><?= __('delete Item') ?></legend>
                <?php
                    echo $this->Form->control('body');
                    echo $this->Form->control('status');
                ?>
            </fieldset>
            <?= $this->Form->button(__('Submit')) ?>
            <?= $this->Form->end() ?>
        </div>
    </div>
</div>
