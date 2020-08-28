import React, { ChangeEvent } from 'react';
import Modal from 'react-modal';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../redux/reducers/index';
import { closeModal } from '../../redux/actions/uiActions';
import { cleanActiveEvent } from '../../redux/actions/calendarActions';

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
const initValue = {
  title: 'Evento',
  note: '',
  startDate: moment().toDate(),
  endDate: moment().add(1, 'days').toDate()
};
Modal.setAppElement('#root');

const CalendarModal = () => {
  const { modalActive } = useSelector((state: RootState) => state.ui);
  const dispatch = useDispatch();

  const [form, setForm] = React.useState(initValue);

  const { title, note, startDate, endDate } = form;

  const handleForm = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const {
      target: { name, value }
    } = e;
    setForm((oldValues) => ({
      ...oldValues,
      [name]: value
    }));
  };

  React.useEffect(() => {
    setForm((formValues) => ({ ...formValues, endDate: moment(startDate).add(1, 'days').toDate() }));
  }, [startDate]);

  const onRequestClose = () => {
    dispatch(cleanActiveEvent());
    dispatch(closeModal());
  };

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('form :>> ', form);
  };

  const handleDateChange = (date: Date, key: string) => {
    setForm((formValues) => ({
      ...formValues,
      [key]: date
    }));
  };
  return (
    <div>
      <Modal
        isOpen={modalActive}
        onRequestClose={onRequestClose}
        closeTimeoutMS={200}
        style={customStyles}
        overlayClassName="modal-fondo"
        contentLabel="Modal">
        <h1 className="block w-full text-center text-xl text-gray-800 font-bold pb-1"> Nuevo evento </h1>
        <hr className="mb-3" />

        <form onSubmit={handleSubmit} className="container">
          <div className="mb-4 mt-1">
            <label className="block text-gray-700 text-sm font-bold mb-2">Fecha y hora inicio</label>
            <DatePicker
              selected={startDate}
              onChange={(date) => handleDateChange(date as Date, 'startDate')}
              timeInputLabel="Time:"
              dateFormat="MM/dd/yyyy h:mm aa"
              showTimeInput
              showTimeSelect
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="mb-4 mt-1">
            <label className="block text-gray-700 text-sm font-bold mb-2">Fecha y hora fin</label>
            <DatePicker
              selected={endDate}
              onChange={(date) => handleDateChange(date as Date, 'endDate')}
              timeInputLabel="Time:"
              dateFormat="MM/dd/yyyy h:mm aa"
              showTimeInput
              showTimeSelect
              minDate={startDate}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
              value={title}
              onChange={handleForm}
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
              name="note"
              value={note}
              onChange={handleForm}></textarea>
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
