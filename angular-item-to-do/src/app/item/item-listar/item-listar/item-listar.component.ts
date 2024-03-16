import { Component, OnInit } from "@angular/core";
import { ItemService } from "../../item.service";
import { Item } from "../../item.model";
import { Page, PageRequest } from "src/app/_util/Pagination";
import { PageEvent } from "@angular/material/paginator";
import { take } from "rxjs/operators";
import { Sort } from "@angular/material/sort";
import { MatSnackBar } from "@angular/material/snack-bar";
import { UntypedFormGroup, UntypedFormBuilder } from "@angular/forms";

@Component({
    selector: "app-item-listar",
    templateUrl: "./item-listar.component.html",
    styleUrls: ["./item-listar.component.scss"],
})
export class ItemListarComponent implements OnInit {
    colunasTabela = ["id", "status", "body", "editar"];

    page: Page<Item> = new Page([], 0);
    pageEvent: PageEvent;
    sortEvent: Sort;

    carregando = false;

    formGroupPesquisa: UntypedFormGroup;

    constructor(
        private itemService: ItemService,
        private matSnackBar: MatSnackBar,
        private formBuilder: UntypedFormBuilder
    ) {}

    ngOnInit() {
        this.formGroupPesquisa = this.formBuilder.group({
            nome: [null],
        });
        this.listarItens();
        setTimeout(this.trocarStatus, 1000)
    }

    limparPesquisa() {
        this.formGroupPesquisa.reset();
        this.listarItens();
        setTimeout(this.trocarStatus, 500)
    }

    listarItens() {
        this.carregando = true;
        const queryAdicional = new Map();
        if (this.formGroupPesquisa.value.nome) {
            queryAdicional.set("nome_like", this.formGroupPesquisa.value.nome);
        }
        this.itemService
            .listar(
                new PageRequest(
                    {
                        pageNumber: this.pageEvent ? this.pageEvent.pageIndex : 0,
                        pageSize: this.pageEvent ? this.pageEvent.pageSize : 5,
                    },
                    {
                        property: this.sortEvent ? this.sortEvent.active : "id",
                        direction: this.sortEvent ? this.sortEvent.direction : "asc",
                    },
                    queryAdicional
                )
            )
            .pipe(take(1))
            .subscribe({
                next: (page) => {
                    this.page = page;
                    this.carregando = false;
                },
                error: (error) => {
                    this.page = new Page([], 0);
                    this.carregando = false;
                    this.matSnackBar.open("Erro ao listar itens", null, {
                        duration: 5000,
                        panelClass: "red-snackbar",
                    });
                },
            });
    }

    trocarStatus() {
        let listItens = document.querySelectorAll(".item-status")
        let totalItens = listItens.length

        for(let i = 0; i < totalItens; i++){
            let itemEl = listItens[i];
            const tdEl = itemEl.parentElement as HTMLTableCellElement;
            // console.log(item)
            if (itemEl instanceof HTMLAnchorElement) {
                // console.log(item.innerText)
                if (itemEl.innerText == 'true'){
                    itemEl.innerText = 'Concluída'
                    tdEl.classList.add('done')
                } else if(itemEl.innerText == 'false'){
                    itemEl.innerText = 'Pendente'
                    tdEl.classList.add('do')
                };
            }
        }
        
    }
}


