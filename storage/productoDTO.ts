import { Expose, Transform } from "class-transformer";
import { IsDefined } from "class-validator";

export class Producto {
  @Expose({ name: "product_id" })
  @Transform(({ value }) => { if (value) return value; else 1 })
  ID: number;

  @Expose({ name: "product_name" })
  @IsDefined({ message: () => { throw { status: 422, message: "El parametro product_name es obligatorio y de tipo string" } } })
  name: string;

  @Expose({ name: "product_description" })
  @IsDefined({ message: () => { throw { status: 422, message: "El parametro product_description es obligatorio y de tipo string" } } })
  description: string;

  @Expose({ name: "product_state" })
  @IsDefined({ message: () => { throw { status: 422, message: "El parametro product_state es obligatorio y de tipo string" } } })
  state: string;

  @Expose({ name: "product_created_by" })
  @IsDefined({ message: () => { throw { status: 422, message: "El parametro product_created_by es obligatorio y de tipo number" } } })
  created_by: number;

  @Expose({ name: "product_updated_by" })
  @Transform(({ value }) => { if (value) return value; else 1 })
  updated_by: number;

  @Expose({ name: "product_created_at" })
  @IsDefined({ message: () => { throw { status: 422, message: "El parametro product_created_at es obligatorio y de tipo string" } } })
  created_at: string;

  @Expose({ name: "product_updated_at" })
  @Transform(({ value }) => { if (value) return value; else new Date() })
  updated_at: string;

  @Expose({ name: "product_deleted_at" })
  @Transform(({ value }) => { if (value) return value; else new Date() })
  deleted_at: string;

  constructor(data: Partial<Producto>) {
    Object.assign(this, data);
    this.name = "a";
    this.description = "a";
    this.state = "a";
    this.created_by = 1;
    this.created_at = "a";
  }
}