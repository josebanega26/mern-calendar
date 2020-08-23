import React from 'react';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};
Modal.setAppElement('#root');
const CalendarModal = () => {
  const modalIsOpen = true;

  const onRequestClose = () => {
    console.log('clossing modall');
  };
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={onRequestClose}
        closeTimeoutMS={200}
        style={customStyles}
        contentLabel="Modal">
        <h1 className="block w-full text-center text-xl text-gray-800 font-bold pb-1"> Nuevo evento </h1>
        <hr className="mb-3" />
        <form className="container">
          <div className="mb-4 mt-1">
            <label className="block text-gray-700 text-sm font-bold mb-2">Fecha y hora inicio</label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Fecha inicio"
            />
          </div>

          <div className="mb-4 mt-1">
            <label className="block text-gray-700 text-sm font-bold mb-2">Fecha y hora fin</label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Fecha inicio"
            />
          </div>

          <hr />
          <div className="mb-4 mt-1">
            <label className="block text-gray-700 text-sm font-bold mb-2">Titulo y notas</label>
            <input
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Título del evento"
              name="title"
              autoComplete="off"
            />
            <small id="emailHelp" className="text-gray-600 text-xs italic">
              Una descripción corta
            </small>
          </div>

          <div className="mb-4 mt-1">
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Notas"
              rows={5}
              name="notes"></textarea>
            <small id="emailHelp" className="text-gray-600 text-xs italic">
              Información adicional
            </small>
          </div>

          <button
            type="submit"
            className="w-full bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded">
            <i className="far fa-save"></i>
            <span> Guardar</span>
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default CalendarModal;
