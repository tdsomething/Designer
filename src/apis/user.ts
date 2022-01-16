import { _get } from '@/utils'
import { IUser } from '@/types'

export const getUserInfo = () => {
  return _get<IUser>('/user')
}
