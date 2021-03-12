import { prop } from '@typegoose/typegoose';

export class User {
    @prop()
    public id?: string;
  
    @prop({ type: () => [String] })
    public jobs?: string[];
  }