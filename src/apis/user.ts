import { _get } from '@/utils'
import { IUser, IResponse } from '@/types'

export const getUserInfo = () => {
  return _get<IResponse<IUser>>('/user')
}
