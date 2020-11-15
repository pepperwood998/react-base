import { Getable } from "../interfaces/mappable.interface";

export default class BaseModel implements Getable<BaseModel> {
  id = "";

  get(data: any): BaseModel {
    this.id = data?.id;

    return this;
  }
}
