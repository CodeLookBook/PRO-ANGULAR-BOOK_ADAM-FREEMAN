import { BrowserModule  } from "@angular/platform-browser";
import { NgModule       } from "@angular/core";
import { RouterModule   } from "@angular/router";

import { AppComponent   } from "./app.component";
import { StoreModule    } from "./store/store.module";
import { StoreComponent } from "./store/store.component";
import { CartDetailComponent } from "./store/cart-detail.component";
import { CheckoutComponent } from "./store/checkout.component";
import { StoreFirstGuard } from "./store-first.guard";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule,
    RouterModule.forRoot([
      {
        path: "store"   , component: StoreComponent,
        canActivate: [StoreFirstGuard]
      },
      {
        path: "cart"    , component: CartDetailComponent,
        canActivate: [StoreFirstGuard]
      },
      {
        path: "checkout", component: CheckoutComponent,
        canActivate: [StoreFirstGuard]
      },
      /**
       * Новый маршрут сообщает Angular, что при переходе
       * приложения на URL /admin следует загрузить
       * функциональный модуль, определяемый классом с именем
       * AdminModule из файла /app/admin/admin.module.ts
       **/
      {
        path: "admin",
        loadChildren: "app/admin/admin.module#AdminModule",
        canActivate: [StoreFirstGuard]
      },
      {
        path: "**"      , redirectTo: "/store",
      }
    ])
  ],
  providers: [StoreFirstGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
