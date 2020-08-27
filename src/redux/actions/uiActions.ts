import { uiTypes, UiActionsTypes } from '../types/uiTypes'

export const openModal = (): UiActionsTypes => ({
  type: uiTypes.OPEN_MODAL,
  payload: null
})

export const closeModal = (): UiActionsTypes => ({
  type: uiTypes.CLOSE_MODAL,
  payload: null
})