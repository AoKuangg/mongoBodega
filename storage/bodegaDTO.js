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
export class Bodega {
    constructor(data) {
        Object.assign(this, data);
        this.name = "a";
        this.ID_responsable = 1;
        this.state = "a";
        this.created_by = 1;
        this.created_at = "2020-10-23T03:45:04Z";
    }
}
__decorate([
    Expose({ name: "winery_id" }),
    Transform(({ value }) => { if (value)
        return value;
    else
        1; }),
    __metadata("design:type", Number)
], Bodega.prototype, "ID", void 0);
__decorate([
    Expose({ name: "winery_name" }),
    IsDefined({ message: () => { throw { status: 422, message: "El parametro winery_name es obligatorio y de tipo string" }; } }),
    __metadata("design:type", String)
], Bodega.prototype, "name", void 0);
__decorate([
    Expose({ name: "responsible_id" }),
    IsDefined({ message: () => { throw { status: 422, message: "El parametro responsible_id es obligatorio y de tipo number" }; } }),
    __metadata("design:type", Number)
], Bodega.prototype, "ID_responsable", void 0);
__decorate([
    Expose({ name: "winery_state" }),
    IsDefined({ message: () => { throw { status: 422, message: "El parametro winery_state es obligatorio y de tipo string" }; } }),
    __metadata("design:type", String)
], Bodega.prototype, "state", void 0);
__decorate([
    Expose({ name: "winery_created_by" }),
    IsDefined({ message: () => { throw { status: 422, message: "El parametro winery_created_by es obligatorio y de tipo number" }; } }),
    __metadata("design:type", Number)
], Bodega.prototype, "created_by", void 0);
__decorate([
    Expose({ name: "winery_updated_by" }),
    Transform(({ value }) => { if (value)
        return value;
    else
        1; }),
    __metadata("design:type", Number)
], Bodega.prototype, "updated_by", void 0);
__decorate([
    Expose({ name: "winery_created_at" }),
    IsDefined({ message: () => { throw { status: 422, message: "El parametro winery_created_at es obligatorio y de tipo date" }; } }),
    __metadata("design:type", String)
], Bodega.prototype, "created_at", void 0);
__decorate([
    Expose({ name: "winery_updated_at" }),
    Transform(({ value }) => { if (value)
        return value;
    else
        new Date(); }),
    __metadata("design:type", String)
], Bodega.prototype, "updated_at", void 0);
__decorate([
    Expose({ name: "winery_deleted_at" }),
    Transform(({ value }) => { if (value)
        return value;
    else
        new Date(); }),
    __metadata("design:type", String)
], Bodega.prototype, "deleted_at", void 0);
