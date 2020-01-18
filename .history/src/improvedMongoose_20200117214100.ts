import * as mongoose from 'mongoose'
import * as mongoosePluginCreatedAt from 'mongoose-plugin-createdat'

mongoose.plugin(mongoosePluginCreatedAt);
console.log(mongoose.connections)
export default mongoose;
