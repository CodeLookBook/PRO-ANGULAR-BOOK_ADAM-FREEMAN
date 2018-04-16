import { NgModule          } from "@angular/core";
import { ProductRepository } from "./product.repository";
import { StaticDataSource  } from "./static.datasource";
import { Cart } from "./cart.model";
import { Order } from "./order.model";

/*
Декоратор @NgModule используется для создания функциональных
модулей, а его свойства сообщают Angular о том, как должен
использоваться модуль. В данном случае модуль содержит всего
одно свойство providers, которое сообщает, какие классы
должны использоваться в качестве служб для механизма внедрения
зависимостей.
*/
@NgModule({
    providers: [
        ProductRepository,
        StaticDataSource ,
        Cart,
        Order
    ]
})
export class ModelModule { }




