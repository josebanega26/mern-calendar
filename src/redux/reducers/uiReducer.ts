import { uiTypes, UiActionsTypes } from '../types/uiTypes'
import { UiState } from '../../models/uiState'

const initialState: UiState = {
  modalActive: false
}

export default (state = initialState, { type, payload }: UiActionsTypes): UiState => {
  switch (type) {
    case uiTypes.OPEN_MODAL:
      return { ...state, modalActive: true }
    case uiTypes.CLOSE_MODAL:
      return { ...state, modalActive: false }
    default:
      return state
  }
}