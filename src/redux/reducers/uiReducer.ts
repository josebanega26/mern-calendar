import { uiTypes, UiInterface } from '../types/uiTypes'
import { IUi } from '../../models/ui.interface'

const initialState: IUi = {
  modalActive: false
}

export default (state = initialState, { type, payload }: UiInterface) => {
  switch (type) {
    case uiTypes.OPEN_MODAL:
      return { ...state, modalActive: true }
    case uiTypes.CLOSE_MODAL:
      return { ...state, modalActive: false }
    default:
      return state
  }
}