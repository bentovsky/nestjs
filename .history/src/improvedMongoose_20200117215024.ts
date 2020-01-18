import * as mongoose from 'mongoose'
import * as mongoosePluginCreatedAt from 'mongoose-plugin-createdat'

export const setPlugins = (): mongoose.Mongoose => {
  const test = mongoose
  return test
}
// mongoose.plugin(mongoosePluginCreatedAt, {name: 'createdAt'});
// console.log((mongoose as any).plugins)
// export default mongoose;
