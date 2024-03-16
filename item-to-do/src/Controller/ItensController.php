<?php
declare(strict_types=1);

namespace App\Controller;

/**
 * Itens Controller
 *
 * @property \App\Model\Table\ItensTable $Itens
 * @method \App\Model\Entity\Iten[]|\Cake\Datasource\ResultSetInterface paginate($object = null, array $settings = [])
 */
class ItensController extends AppController
{
    /**
     * Index method
     *
     * @return \Cake\Http\Response|null|void Renders view
     */
    public function index()
    {
        $itens = $this->paginate($this->Itens);

        if ($this->request->is(['get'])) {
            $response = $this->response
                ->withType('applicatiotion/json')
                ->withStatus(200)
                // ->withHeader('Access-Control-Allow-Origin', '')
                ->withStringBody(json_encode($itens));
            return $response;
        }
        if ($this->request->is(['post'])) {
            $itens = $this->Itens->newEmptyEntity();
            $itens = $this->Itens->patchEntity($itens, $this->request->getData());
            if ($this->Itens->save($itens)) {
                // $this->Flash->success(__('The category has been saved.'));
                return $this->response
                    ->withStatus(200)
                    ->withType('application/json')
                    ->withStringBody(json_encode(['msg' => 'Item foi salvo']));
            }
            return $this->response
                ->withStatus(404)
                ->withType('applicationJson')
                ->withStringBody(json_encode(['msg' => 'Nenhum registro encontrado']));
        }
    }

    /**
     * View method
     *
     * @param string|null $id Iten id.
     * @return \Cake\Http\Response|null|void Renders view
     * @throws \Cake\Datasource\Exception\RecordNotFoundException When record not found.
     */
    public function view($id = null)
    {
        $itens = $this->Itens
            ->find('all')
            ->where(['id' => $id])
            ->toArray();

        if ($itens) {
            return $this->response
                ->withStatus(201)
                ->withType('applicatiotion/json')
                ->withStringBody(json_encode($itens));
        } else {
            return $this->response
                ->withStatus(405)
                ->withType('applicatiotion/json')
                ->withStringBody(json_encode(['msg' => 'Nenehum registro encontrado']));
        }
    }

    /**
     * Add method
     *
     * @return \Cake\Http\Response|null|void Redirects on successful add, renders view otherwise.
     */
    public function add()
    {
        $itens = $this->Itens->newEmptyEntity();
        if ($this->request->is('post')) {
            $itens = $this->Itens->patchEntity($itens, $this->request->getData());
            if ($this->Itens->save($itens)) {
                $this->Flash->success(__('Item salvo.'));

                return $this->response
                ->withStatus(200)
                ->withType('application/json')
                ->withStringBody(json_encode(['msg' => 'Tarefa criada']));
            }
            $this->Flash->error(__('Item não pode ser salvo. Tente novamente.'));
        }
        $this->set(compact('post'));
    }

    /**
     * Edit method
     *
     * @param string|null $id Iten id.
     * @return \Cake\Http\Response|null|void Redirects on successful edit, renders view otherwise.
     * @throws \Cake\Datasource\Exception\RecordNotFoundException When record not found.
     */
    public function edit($id = null)
    {
        if ($this->request->is(['put'])) {
            $itens = $this->Itens
                    ->find('all')
                    ->where(['id'=> $id])
                    ->first();
            $itens = $this->Itens->patchEntity($itens, $this->request->getData());
            if ($this->Itens->save($itens)) {
                return $this->response
                    ->withStatus(200)
                    ->withType('application/json')
                    ->withStringBody(json_encode(['msg' => 'Item foi alterado']));
            }
            return $this->response
                ->withStatus(404)
                ->withType('applicationJson')
                ->withStringBody(json_encode(['msg' => 'Nenhum registro encontrado']));
        }
    }

     public function delete($id = null)
     {

         if ($this->request->is(['delete'])) {
             $itens = $this->Itens
                     ->find('all')
                     ->where(['id'=> $id])
                     ->first();
             if ($this->Itens->delete($itens)) {
                 return $this->response
                     ->withStatus(200)
                     ->withType('application/json')
                     ->withStringBody(json_encode(['msg' => 'Item excluído']));
             }
             return $this->response
                 ->withStatus(404)
                 ->withType('applicationJson')
                 ->withStringBody(json_encode(['msg' => 'Nenhum registro encontrado']));
         }
     }
}
