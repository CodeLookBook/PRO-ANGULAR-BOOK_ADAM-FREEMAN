import { Injectable } from "@angular/core";
import { AuthService } from "../model/auth.service";
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";

/**
 * Не допускает прямых переходов к функциям администрирования.
 */

 @Injectable()
 export class AuthGuard {
    constructor(
        private router : Router,
        private auth   : AuthService
    ) { }

    canActivate(
        route : ActivatedRouteSnapshot,
        state : RouterStateSnapshot
    ): boolean {

        let canActivate = false;

        if (!this.auth.authenticated) {
            this.router.navigateByUrl("/admin/auth");
            canActivate = false;
        } else {
            canActivate = true;
        }

        return canActivate;
    }
 }
