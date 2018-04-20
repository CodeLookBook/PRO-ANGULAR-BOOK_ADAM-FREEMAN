import { Component } from "@angular/core";
import { Product } from "../model/product.model";
import { ProductRepository } from "../model/product.repository";
import { Router, ActivatedRoute } from "@angular/router";
import { NgForm } from "@angular/forms";

@Component({
    moduleId: module.id,
    templateUrl: "product-editor.component.html"
})
export class ProductEditorComponent {
    editing = false;
    product = new Product();

    /**
     * @param activeRoute -  используеться для анализа
     * активизированного маршрута
     */
    constructor(
        private repository : ProductRepository,
        private router     : Router,
        activeRoute        : ActivatedRoute) {

        this.editing = activeRoute.snapshot
            .params["mode"] === "edit";

        if (this.editing) {
            Object.assign(
                this.product, this.repository.getProduct(
                    Number(activeRoute.snapshot.params["id"])
                )
            );
        }
    }

    /**
     * Сохраняет изменения, внесенные пользователем.
     */
    save(form : NgForm) {
        this.repository.saveProduct(this.product);
        this.router.navigateByUrl("/admin/main/products");
    }
 }
