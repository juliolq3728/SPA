import React, { useState } from "react";
import { VscTrash, VscEdit, VscCheck } from "react-icons/vsc";
import Popup from "reactjs-popup";
import style from "../Styles/abctask.module.css";
import { eddittask, deletedtask } from "../request.js";

function Tables({ props }) {
  const closeModal = () => setOpen(false);
  const [open, setOpen] = useState(false);
  const [Servicio, setServicio] = useState(props.Servicio);
  const [Cliente, setCliente] = useState(props.Cliente);
  const [Descripcion, setDescripcion] = useState(props.Descripcion);
  const [satus, setsatus] = useState(props.Staus);
  const Tareas = {
    _id: props._id,
    Servicio: Servicio,
    Cliente: Cliente,
    Descripcion: Descripcion,
    Staus: satus,
  };

  function pup(params) {
    return (
      <Popup open={open} closeOnDocumentClick onClose={closeModal}>
        <div className={style.modal}>
          <div className={style.cerrar}>
            <a className="close" onClick={closeModal}>
              &times;
            </a>
          </div>
          <div className={style.container}>
            <form
              onSubmit={(e) => {
                e.preventDefault()
                eddittask(Tareas);
              }}
              className={style.formulario}
            >
              <h1>ID: {params._id}</h1>
              <input
                type="text"
                name="Servicio"
                id="Servicio"
                defaultValue={params.Servicio}
                onChange={(e) => setServicio(e.target.value)}
              />
              <br />
              <br />
              <input
                type="text"
                name="Cliente"
                id="Cliente"
                defaultValue={params.Cliente}
                onChange={(e) => setCliente(e.target.value)}
              />
              <br />
              <br />
              <p>
                Pendinte{" "}
                <input
                  type="radio"
                  name="satus"
                  onChange={(e) => setsatus(e.target.value)}
                  value="Pendiente"
                />{" "}
                Completado{" "}
                <input
                  type="radio"
                  name="satus"
                  onChange={(e) => setsatus(e.target.value)}
                  value="Completado"
                />
              </p>
              <textarea
                type="text"
                name="Descripcion"
                id="Descripcion"
                defaultValue={params.Descripcion}
                style={{ height: 90 }}
                onChange={(e) => setDescripcion(e.target.value)}
              />
              <br />
              <br />
              <br />

              <button type="submit">
                <VscCheck size={30}></VscCheck>
              </button>
            </form>
          </div>
        </div>
      </Popup>
    );
  }
  return (
    <tr className={style.filas}>
      {pup(props)}
      <td>{props._id}</td>
      <td>{props.Servicio}</td>
      <td>{props.Cliente}</td>
      <td>{props.Descripcion}</td>
      <td>{props.Staus}</td>
      <td>
        <VscTrash
          size={20}
          onClick={(e) => {
            if (confirm("¿Estas seguro de eliminar la tarea seleccionada?")){
                deletedtask(Tareas);
            }
          }}
        />{" "}
        <VscEdit
          size={20}
          onClick={() => {
            setOpen(true);
          }}
        />
      </td>
    </tr>
  );
}

export default Tables;
