import * as mongoose from 'mongoose'
import * as mongoosePluginCreatedAt from 'mongoose-plugin-createdat'

mongoose.plugin(mongoosePluginCreatedAt);
console.log(mongoose.Mongoose)
export default mongoose;
