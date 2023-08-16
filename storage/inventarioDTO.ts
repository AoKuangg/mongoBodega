import { Expose, Transform } from "class-transformer";
import { IsDefined } from "class-validator";  

export class Inventario{
  @Expose({name: "inventory_ID"})
  @Transform(({value})=> {if (value) return value; else 1})
  ID:number;

  @Expose({name: "inventory_winery_ID"})
  @IsDefined({message:()=>{throw {status: 422, message: "El parametro inventory_winery_ID es obligatorio y de tipo number"}}})
  ID_winery:number;

  @Expose({name: "inventory_product_ID"})
  @IsDefined({message:()=>{throw {status: 422, message: "El parametro inventory_product_ID es obligatorio y de tipo number"}}})
  ID_product:number;  

  @Expose({name: "inventory_cantity"})
  @IsDefined({message:()=>{throw {status: 422, message: "El parametro inventory_cantity es obligatorio y de tipo number"}}})
  cantity:number;  


  @Expose({ name: "inventory_created_by" })
  @IsDefined({ message: () => { throw { status: 422, message: "El parametro inventory_created_by es obligatorio y de tipo number" } } })
  created_by: number;

  @Expose({ name: "inventory_updated_by" })
  @Transform(({ value }) => { if (value) return value; else 1 })
  updated_by: number;

  @Expose({ name: "inventory_created_at" })
  @IsDefined({ message: () => { throw { status: 422, message: "El parametro inventory_created_at es obligatorio y de tipo date" } } })
  created_at: string;

  @Expose({ name: "inventory_updated_at" })
  @Transform(({ value }) => { if (value) return value; else new Date() })
  updated_at: string;

  @Expose({ name: "inventory_deleted_at" })
  @Transform(({ value }) => { if (value) return value; else new Date() })
  deleted_at: string;

  constructor(data:Partial<Inventario>){
    Object.assign(this, data)
    this.ID_winery = 1;
    this.ID_product = 1;
    this.cantity = 1;
    this.created_by = 1;
    this.created_at = "2023-08-16";
  }
}