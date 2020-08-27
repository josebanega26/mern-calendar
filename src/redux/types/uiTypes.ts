export const uiTypes = {
  SET_ERROR: '[UI] SetError',
  REMOVE_ERROR: '[UI] RemoveError',
  START_LOADING: '[UI] StarLoading',
  STOP_LOADING: '[UI] StopLoading',
  OPEN_MODAL: '[UI] OpenModal',
  CLOSE_MODAL: '[UI] CloseModal',
};

export interface SetError {
  type: typeof uiTypes.SET_ERROR;
  payload: string;
}

export interface RemoveError {
  type: typeof uiTypes.REMOVE_ERROR;
  payload: null;
}
export interface StartLoading {
  type: typeof uiTypes.START_LOADING;
  payload: null;
}
export interface StopLoading {
  type: typeof uiTypes.STOP_LOADING;
  payload: null;
}
export interface OpenModal {
  type: typeof uiTypes.OPEN_MODAL;
  payload: null;
}
export interface CloseModal {
  type: typeof uiTypes.CLOSE_MODAL;
  payload: null;
}


export type UiActionsTypes = SetError | RemoveError | StartLoading | StopLoading | OpenModal | CloseModal;
