import { Component, OnInit } from "@angular/core";
import { UntypedFormGroup, UntypedFormBuilder, Validators } from "@angular/forms";
import { ItemService } from "../../item.service";
import { Router, ActivatedRoute } from "@angular/router";
import { Item } from "../../item.model";
import { DialogoConfirmacaoComponent } from "src/app/_shared/dialogo-confirmacao/dialogo-confirmacao.component";
import { MatDialog } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";


@Component({
    selector: "app-item-cadastrar-editar",
    templateUrl: "./item-cadastrar-editar.component.html",
    styleUrls: ["./item-cadastrar-editar.component.scss"],
})

export class ItemCadastrarEditarComponent implements OnInit {
    formGroup: UntypedFormGroup;
    item: Item;

    constructor(
        private formBuilder: UntypedFormBuilder,
        private itemService: ItemService,
        private router: Router,
        private route: ActivatedRoute,
        public matDialog: MatDialog,
        public matSnackBar: MatSnackBar
    ) { }


    ngOnInit() {
        let result = this.route.snapshot.data['item'];
        console.log(result)
        console.log('result')
        this.item = result[0]
        this.formGroup = this.formBuilder.group({
            id: [(this.item && this.item.id) ? this.item.id : null],
            body: [(this.item && this.item.body) ? this.item.body : "", Validators.required]
            // status: [(this.item && (this.item.status == false)) ? this.item.status : "", Validators.required],
        });
        // setTimeout(this.foo, 2000);

    }

    foo() {
        console.log('item ->')
        console.log(this.item)
    }

    // salvar(){
    //     this.itemService.cadastrar(this.formGroup.value).subscribe(
    //         itemAdd => {    
    //             this.router.navigateByUrl("/itens")
    //         }
    //     )
    // }

    salvar() {
        // console.log(this.item)

        if (this.item && this.item.id) {
            console.log('form group')
            console.log(this.formGroup.value)
            this.itemService.atualizar(this.formGroup.value).subscribe({
                next: (tarefaAtualizado) => {
                    this.matSnackBar.open("Tarefa tualizada com sucesso!", null, {
                        duration: 5000,
                        panelClass: "green-snackbar",
                    });
                    this.router.navigateByUrl("/itens");
                },
                error: (error) => {
                    this.matSnackBar.open("Erro ao atualizar", null, {
                        duration: 5000,
                        panelClass: "red-snackbar",
                    });
                },
            });
        } else {
            this.itemService.cadastrar(this.formGroup.value).subscribe({
                next: (tarefaCadastrada) => {
                    this.matSnackBar.open("Criada com sucesso!", null, {
                        duration: 5000,
                        panelClass: "green-snackbar",
                    });
                    this.router.navigateByUrl("/itens");
                },
                error: (error) => {
                    this.matSnackBar.open("Erro ao criar", null, {
                        duration: 5000,
                        panelClass: "red-snackbar",
                    });
                },
            });
        }
    }

    deletar() {
        this.itemService.deletar(this.formGroup.value).subscribe({
            next: (response) => {
                this.matSnackBar.open("Tarefa deletada com sucesso!", null, {
                    duration: 5000,
                    panelClass: "green-snackbar",
                });
                this.router.navigateByUrl("/itens");
            },
            error: (error) => {
                this.matSnackBar.open("Erro ao deletar tarefa", null, {
                    duration: 5000,
                    panelClass: "red-snackbar",
                });
            },
        });

    }

    buscaStatus() {
        let listItens = document.querySelectorAll(".item-status")
        let totalItens = listItens.length

        for (let i = 0; i < totalItens; i++) {
            let item = listItens[i];
            // console.log(item)
            if (item instanceof HTMLAnchorElement) {
                // console.log(item.innerText)
                if (item.innerText == 'true') {
                    item.innerText = 'Concluida'
                } else if (item.innerText == 'false') {
                    item.innerText = 'Pendente'
                };
            }
        }

    }

    fooPendente() {
        this.formGroup.value.status = false
        console.log(this.formGroup.value)
    }

    fooConcluida() {
        this.formGroup.value.status = true
        console.log(this.formGroup.value)
    }
}

