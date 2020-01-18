import { Schema, model, Model } from 'mongoose';

const UserSchema: Schema = new Schema({
  
});


const UserModel: Model<any> = model('document', UserSchema);
export { UserModel };
