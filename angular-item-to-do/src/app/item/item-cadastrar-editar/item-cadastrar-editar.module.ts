import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemCadastrarEditarRoutingModule } from './item-cadastrar-editar-routing.module';
import { ItemCadastrarEditarComponent } from './item-cadastrar-editar/item-cadastrar-editar.component';

import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { DialogoConfirmacaoModule } from 'src/app/_shared/dialogo-confirmacao/dialogo-confirmacao.module';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';

@NgModule({
    declarations: [ItemCadastrarEditarComponent],
    imports: [
        CommonModule,
        ItemCadastrarEditarRoutingModule,
        DialogoConfirmacaoModule,

        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatRadioModule,

        MatToolbarModule,
        MatButtonModule,
        MatSelectModule
    ]
})
export class ItemCadastrarEditarModule { }
