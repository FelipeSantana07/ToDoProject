import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { ItemCadastrarEditarComponent } from "./item/item-cadastrar-editar/item-cadastrar-editar/item-cadastrar-editar.component";
import { ItemResolverService } from "./item/item-cadastrar-editar/item-resolver.service";

const routes: Routes = [
    { path: "", component: HomeComponent },
    {
        path: "itens",
        loadChildren: () => import("./item/item-listar/item-listar.module").then((modulo) => modulo.ItemListarModule),
    },
    {
        path: "itens/cadastrar",
        loadChildren: () =>
            import("./item/item-cadastrar-editar/item-cadastrar-editar.module").then(
                (modulo) => modulo.ItemCadastrarEditarModule
            ),
    },
    {
        path: "itens/editar/:id",
        loadChildren: () =>
            import("./item/item-cadastrar-editar/item-cadastrar-editar.module").then(
                (modulo) => modulo.ItemCadastrarEditarModule
            ),
    },
    // {
    //     path: "itens/editar/:id",
    //     component: ItemCadastrarEditarComponent,
    //     resolve: {
    //         item: ItemResolverService,
    //     },
    // },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
