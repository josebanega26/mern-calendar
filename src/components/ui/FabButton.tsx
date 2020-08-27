import React from 'react';
import { ReactComponent as Add } from '../../assets/icons/plus.svg';
import { useDispatch } from 'react-redux';
import { openModal } from '../../redux/actions/uiActions';

const FabButton = () => {
  const dispatch = useDispatch();

  const addNewEvent = () => {
    dispatch(openModal());
  };
  return (
    <button
      onClick={addNewEvent}
      className="fab p-0 w-16 h-16 bg-blue-600 rounded-full hover:bg-blue-700 active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none">
      <Add className="fab-icon w-6 h-6 inline-block"></Add>
    </button>
  );
};

export default FabButton;
