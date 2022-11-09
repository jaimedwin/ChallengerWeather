import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler } from "@angular/common/http";
import { AuthService } from "../auth/auth.service";
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    
    constructor(private authService: AuthService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        const authToken = this.authService.getToken();
        
        if(!authToken) return next.handle(req);

        req = req.clone({
            setHeaders: {
                Authorization: authToken
            }
        });
        return next.handle(req);
        
        
    }
}