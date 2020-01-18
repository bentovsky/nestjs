import * as mongoose from 'mongoose'
import * as mongoosePluginCreatedAt from 'mongoose-plugin-createdat'

mongoose.plugin(mongoosePluginCreatedAt, {key: 'value'});
console.log((mongoose as any).plugins)
export default mongoose;
