import * as mongoose from 'mongoose'
import * as mongoosePluginCreatedAt from 'mongoose-plugin-createdat'

mongoose.plugin(mongoosePluginCreatedAt);
(mongoose as any).plugins.pop()
export default mongoose;
