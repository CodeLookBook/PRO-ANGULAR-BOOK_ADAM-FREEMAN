import { Injectable       } from "@angular/core";
import { StaticDataSource } from "./static.datasource";
import { Order            } from "./order.model";
import { Observable       } from "rxjs/Observable";
import { RestDataSource } from "./rest.datasource";

@Injectable()
export class OrderRepository {
    private orders : Order[] = [];
    private loaded = false;

    constructor(private dataSource : RestDataSource) { }

    loadOrders() {
        this.loaded = true;
        this.dataSource
            .getOrders()
            .subscribe(orders => {
                this.orders = orders;
            });
    }

    getOrders(): Order[] {

        if (!this.loaded) {
            this.loadOrders();
        }

        return this.orders;
    }

    updateOrder(order : Order) {
        this.dataSource
            .updateOrder(order)
            .subscribe(o => {
                this.orders
                    .splice(this.orders.findIndex(or => {
                        return or.id === or.id;
                    }), 1, o);
            });
    }

    saveOrder(order : Order): Observable<Order> {
        return this.dataSource.saveOrder(order);
    }

    deleteOrder(id : number) {
        this.dataSource
            .deleteOrder(id)
            .subscribe(order => {
                this.orders.splice(this.orders.findIndex(o => {
                    return id === o.id;
                }));
            });
    }
}
