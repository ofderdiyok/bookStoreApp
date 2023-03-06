import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { INavbarItem } from "../models/Inavbar-item";

Injectable()
export class NavbarItemService{
    url = "http://localhost:3000/navbarItem";

    constructor(private http: HttpClient){};

    getNavbarItems(): Observable<INavbarItem[]>{
        return this.http.get<INavbarItem[]>(this.url);
    }
}