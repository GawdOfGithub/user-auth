import {TypedUseSelectorHook,useDispatch,useSelector} from 'react-redux'
import type { AppDispatch,RootState } from '../app/services/store'

export const useTypedSelector:TypedUseSelectorHook<RootState> =useSelector
export const useAppDispatch = ()=>useDispatch<AppDispatch>()