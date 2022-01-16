import { _post } from '@/utils'
import { IUser, IResponse } from '@/types'

export const login = (payloads: IUser) => {
  return _post<IResponse<{ token: string }>>('/api/login', payloads)
}
