var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Expose, Transform } from "class-transformer";
import { IsDefined } from "class-validator";
export class Inventario {
    constructor(data) {
        Object.assign(this, data);
        this.ID_winery = 1;
        this.ID_product = 1;
        this.cantity = 1;
        this.created_by = 1;
        this.created_at = "2023-08-16";
    }
}
__decorate([
    Expose({ name: "inventory_ID" }),
    Transform(({ value }) => { if (value)
        return value;
    else
        1; }),
    __metadata("design:type", Number)
], Inventario.prototype, "ID", void 0);
__decorate([
    Expose({ name: "inventory_winery_ID" }),
    IsDefined({ message: () => { throw { status: 422, message: "El parametro inventory_winery_ID es obligatorio y de tipo number" }; } }),
    __metadata("design:type", Number)
], Inventario.prototype, "ID_winery", void 0);
__decorate([
    Expose({ name: "inventory_product_ID" }),
    IsDefined({ message: () => { throw { status: 422, message: "El parametro inventory_product_ID es obligatorio y de tipo number" }; } }),
    __metadata("design:type", Number)
], Inventario.prototype, "ID_product", void 0);
__decorate([
    Expose({ name: "inventory_cantity" }),
    IsDefined({ message: () => { throw { status: 422, message: "El parametro inventory_cantity es obligatorio y de tipo number" }; } }),
    __metadata("design:type", Number)
], Inventario.prototype, "cantity", void 0);
__decorate([
    Expose({ name: "inventory_created_by" }),
    IsDefined({ message: () => { throw { status: 422, message: "El parametro inventory_created_by es obligatorio y de tipo number" }; } }),
    __metadata("design:type", Number)
], Inventario.prototype, "created_by", void 0);
__decorate([
    Expose({ name: "inventory_updated_by" }),
    Transform(({ value }) => { if (value)
        return value;
    else
        1; }),
    __metadata("design:type", Number)
], Inventario.prototype, "updated_by", void 0);
__decorate([
    Expose({ name: "inventory_created_at" }),
    IsDefined({ message: () => { throw { status: 422, message: "El parametro inventory_created_at es obligatorio y de tipo date" }; } }),
    __metadata("design:type", String)
], Inventario.prototype, "created_at", void 0);
__decorate([
    Expose({ name: "inventory_updated_at" }),
    Transform(({ value }) => { if (value)
        return value;
    else
        new Date(); }),
    __metadata("design:type", String)
], Inventario.prototype, "updated_at", void 0);
__decorate([
    Expose({ name: "inventory_deleted_at" }),
    Transform(({ value }) => { if (value)
        return value;
    else
        new Date(); }),
    __metadata("design:type", String)
], Inventario.prototype, "deleted_at", void 0);
