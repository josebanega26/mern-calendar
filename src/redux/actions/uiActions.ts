import { uiTypes, UiInterface } from '../types/uiTypes'

export const openModal = (): UiInterface => ({
  type: uiTypes.OPEN_MODAL,
  payload: null
})

export const closeModal = (): UiInterface => ({
  type: uiTypes.CLOSE_MODAL,
  payload: null
})