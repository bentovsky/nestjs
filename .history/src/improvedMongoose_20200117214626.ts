import * as mongoose from 'mongoose'
import * as mongoosePluginCreatedAt from 'mongoose-plugin-createdat'

mongoose.plugin(mongoosePluginCreatedAt);
console.log((mongoose as any).plugins[0][0]())
export default mongoose;
