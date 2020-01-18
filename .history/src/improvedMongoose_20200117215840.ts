import * as mongoose from 'mongoose'
import * as mongoosePluginCreatedAt from 'mongoose-plugin-createdat'

mongoose.plugin(mongoosePluginCreatedAt, {name: 'createdAt'});

export const test = () => console.log('TEST FUNCTION',)

export default mongoose
// console.log((mongoose as any).plugins)
// export default mongoose;
