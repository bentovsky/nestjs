import * as mongoose from 'mongoose'
import * as mongoosePluginCreatedAt from 'mongoose-plugin-createdat'

mongoose.plugin(mongoosePluginCreatedAt);
(mongoose as any).plugins[0][0](res => console.log(res))
export default mongoose;
