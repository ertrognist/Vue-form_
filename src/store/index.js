import { createStore, createLogger } from 'vuex'
import Parcel from './modules/Parcel'


const debug = process.env.NODE_ENV !== 'production'

export default createStore({
  modules: {
    Parcel,
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})