import { Expose, Transform } from "class-transformer";
import { IsDefined } from "class-validator";

export class Bodega {
  @Expose({ name: "winery_id" })
  @Transform(({ value }) => { if (value) return value; else 1 })
  ID: number;

  @Expose({ name: "winery_name" })
  @IsDefined({ message: () => { throw { status: 422, message: "El parametro winery_name es obligatorio y de tipo string" } } })
  name: string;

  @Expose({ name: "responsible_id" })
  @IsDefined({ message: () => { throw { status: 422, message: "El parametro responsible_id es obligatorio y de tipo number" } } })
  ID_responsable: number;

  @Expose({ name: "winery_state" })
  @IsDefined({ message: () => { throw { status: 422, message: "El parametro winery_state es obligatorio y de tipo string" } } })
  state: string;

  @Expose({ name: "winery_created_by" })
  @IsDefined({ message: () => { throw { status: 422, message: "El parametro winery_created_by es obligatorio y de tipo number" } } })
  created_by: number;

  @Expose({ name: "winery_updated_by" })
  @Transform(({ value }) => { if (value) return value; else 1 })
  updated_by: number;

  @Expose({ name: "winery_created_at" })
  @IsDefined({ message: () => { throw { status: 422, message: "El parametro winery_created_at es obligatorio y de tipo date" } } })
  created_at: string;

  @Expose({ name: "winery_updated_at" })
  @Transform(({ value }) => { if (value) return value; else new Date() })
  updated_at: string;

  @Expose({ name: "winery_deleted_at" })
  @Transform(({ value }) => { if (value) return value; else new Date() })
  deleted_at: string;


  constructor(data: Partial<Bodega>) {
    Object.assign(this, data);
    this.name = "a";
    this.ID_responsable = 1;
    this.state = "a";
    this.created_by = 1;
    this.created_at = "2020-10-23T03:45:04Z";
  }
}