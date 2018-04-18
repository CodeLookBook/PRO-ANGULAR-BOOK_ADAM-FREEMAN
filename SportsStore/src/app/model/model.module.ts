import { NgModule          } from "@angular/core";
import { ProductRepository } from "./product.repository";
import { StaticDataSource  } from "./static.datasource";
import { Cart              } from "./cart.model";
import { Order             } from "./order.model";
import { OrderRepository   } from "./order.repository";
import { RestDataSource    } from "./rest.datasource";
import { HttpModule        } from "@angular/http";
import { AuthService       } from "./auth.service";

/*
Декоратор @NgModule используется для создания функциональных
модулей, а его свойства сообщают Angular о том, как должен
использоваться модуль. В данном случае модуль содержит всего
одно свойство providers, которое сообщает, какие классы
должны использоваться в качестве служб для механизма внедрения
зависимостей.
*/
@NgModule({
    imports: [
        HttpModule
    ],
    providers: [
        ProductRepository,
        Cart,
        Order,
        OrderRepository,
        { provide: StaticDataSource, useClass: RestDataSource },
        RestDataSource,
        AuthService
    ]
})
export class ModelModule { }




