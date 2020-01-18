import * as mongoose from 'mongoose'
import * as mongoosePluginCreatedAt from 'mongoose-plugin-createdat'

mongoose.plugin(mongoosePluginCreatedAt);
console.log(mongoose)
export default mongoose;
