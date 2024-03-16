import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Item } from './item.model';
import { Page, QueryBuilder } from '../_util/Pagination';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class ItemService {

    private baseURL = 'http://localhost/item-to-do';
    private endpoint = 'itens';
    private view = 'view';
    private add = 'add';
    private edit = 'edit';
    private del = 'delete';


    constructor(private httpClient: HttpClient) { }

    listar(queryBuilder: QueryBuilder): Observable<Page<Item>> {

        return this.httpClient
        .get<Item[]>(`${this.baseURL}/${this.endpoint}?${queryBuilder.buildQueryString()}`, {observe: 'response'})
        .pipe(
            map(response => <Page<Item>>Page.fromResponse(response))
        );

    }

    cadastrar(item: Item): Observable<Item> {
        return this.httpClient.post<Item>(`${this.baseURL}/${this.endpoint}/${this.add}`, item);
    }

    pesquisarPorId(id: string): Observable<Item> {
        return this.httpClient.get<Item>(`${this.baseURL}/${this.endpoint}/${this.view}/${id}`);
    }

    atualizar(item: Item):Observable<Item> {
        return this.httpClient.put<Item>(`${this.baseURL}/${this.endpoint}/${this.edit}/${item.id}`, item);
    }

    deletar(item: Item):Observable<{}> {
        return this.httpClient.delete<Item>(`${this.baseURL}/${this.endpoint}/${this.del}/${item.id}`);
    }

}
