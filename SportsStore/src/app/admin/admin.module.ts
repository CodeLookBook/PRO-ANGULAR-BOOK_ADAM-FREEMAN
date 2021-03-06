import { RouterModule } from "@angular/router";
import { AuthComponent } from "./auth.component";
import { AdminComponent } from "./admin.component";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AuthGuard } from "./auth.guard";
import { ProductEditorComponent } from "./product-editor.component";
import { ProductTableComponent } from "./product-table.component";
import { OrderTableComponent } from "./order-table.component";

const routing = RouterModule.forChild([
    { path: "auth", component: AuthComponent },
    {
        path: "main",
        component: AdminComponent,
        canActivate: [AuthGuard],
        children: [
            { path: "products/:mode/:id", component : ProductEditorComponent },
            { path: "products/:mode"    , component : ProductEditorComponent },
            { path: "products"          , component : ProductTableComponent  },
            { path: "orders"            , component : OrderTableComponent    },
            { path: "**"                , redirectTo: "products"             }
        ]
    },
    { path: "**" , redirectTo: "auth" }
]);

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        routing
    ],
    providers: [
        AuthGuard
    ],
    declarations: [
        AuthComponent,
        AdminComponent,
        ProductTableComponent,
        ProductEditorComponent,
        OrderTableComponent
    ]
})
export class AdminModule { }
