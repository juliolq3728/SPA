import React, { useState, useEffect } from "react";
import style from "../Styles/abctask.module.css";
import { VscAdd, VscCheck } from "react-icons/vsc";
import Popup from "reactjs-popup";
import Tables from "./Tables.jsx";
import { addtask } from "../request.js";
import { Spiner } from "./Spiner.jsx";

function AbcTask(props) {
  const [open, setOpen] = useState(false);
  const [task, settask] = useState([]);
  const closeModal = () => setOpen(false);
  const [Servicio, setServicio] = useState(props.Servicio);
  const [Cliente, setCliente] = useState(props.Cliente);
  const [Descripcion, setDescripcion] = useState(props.Descripcion);
  const [spiner, setspiner] = useState(true);


  const Tareas = {
    Servicio: Servicio,
    Cliente: Cliente,
    Descripcion: Descripcion,
    Staus: "pendiente",
  };

  useEffect(() => {
    fetch("/api/task")
      .then((dat) => {
        return dat.json();
      })
      .then((datos) => {
        settask(datos);
        setspiner(false)
      })
      .catch((err) => console.log("ocurrio el error: " + err));
  }, []);

  
  if(spiner){
    return <Spiner></Spiner>
}
  return (
    <div className={style.abc}>
      <Popup open={open} closeOnDocumentClick onClose={closeModal}>
        <div className={style.modal}>
          <div className={style.cerrar}>
            <a className="close" onClick={closeModal}>
              &times;
            </a>
          </div>
          <div className={style.container}>
            <form
              className={style.formulario}
              onSubmit={(e) => {
                e.preventDefault()
                addtask(Tareas);
              }}
            >
              <input
                type="text"
                name="servicio"
                id="servicio"
                placeholder="servicio"
                onChange={(e) => {
                  setServicio(e.target.value);
                }}
              />
              <br />
              <br />
              <input
                type="text"
                name="Cliente"
                id="Cliente"
                placeholder="Cliente"
                onChange={(e) => {
                  setCliente(e.target.value);
                }}
              />
              <br />
              <br />
              <textarea
                type="text"
                name="Descripcion"
                id="Descripcion"
                placeholder="Descripcion"
                style={{ height: 90 }}
                onChange={(e) => {
                  setDescripcion(e.target.value);
                }}
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
      <br />
      <br />
      <div id="create-tareas">
        <div
          className={style.task}
          onClick={() => {
            setOpen(true);
          }}
        >
          <h1>Crear tarea</h1>
          <VscAdd size={30}></VscAdd>
        </div>
      </div>
          
      <div id="show-task">
        <table className={style.table}>
          <tbody >
            <tr className={style.cabeceratable}>
              <th>ID</th>
              <th>Servicio</th>
              <th>Cliente</th>
              <th>Descripcion</th>
              <th>Staus</th>
              <th>acciones</th>
            </tr>
            {task.map((e, i) => {

              return <Tables props={e} key={i}></Tables>;
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AbcTask;
