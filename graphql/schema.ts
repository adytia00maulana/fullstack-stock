import {builder} from './builder';
import './types/user'
import './types/links'
import './types/colors'
import './types/sizes'
import './types/products'

export const schema = builder.toSchema()