import React, { useState, useEffect } from "react";
import "./listarRemedio.css";
import Navbar from "../../components/navbar";
import firebase from "../../config/firebase";
import { Link } from 'react-router-dom';

function ListarRemedio() {

  const [excluido, setExcluido] = useState(0);
  const [remedios, setRemedios] = React.useState([]);





  React.useEffect(() => {
    const fetchData = async () => {

      const db = firebase.firestore();
      const data = await db.collection("remedios");
      data.onSnapshot(snapshot => {
        setRemedios(snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })));
        const dados = snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));



      });


    };
    fetchData();

  }, []);

  function remover(id) {
    const db = firebase.firestore();
    db.collection('remedios').doc(id).delete();
  }

  function renderRows(remedios) {


    let loadedRemedios = remedios.map((remedio, index) => (
      <tr key={index}>
        <td>{remedio.nomeRemedio}</td>
        <td>{remedio.nomePaciente}</td>
        <td>{remedio.vencimento}</td>
        <td>{remedio.quantidade}</td>
        <td>{remedio.lote}</td>
        <td>
          <Link to={`/editarremedio/${remedio.id}`} className="btn-editar "><i className="fas fa-pen-square fa-3x"></i></Link>

          <Link to={`/entregaRemedio/${remedio.id}`} className="btn-editar "><i className="fas fa-diagnoses fa-2x ml-2"></i></Link>

          <button className="btn btn-danger ml-2 mb-3" onClick={() => remover(remedio.id)}> <i className="fas fa-trash "></i></button>
        </td>
      </tr>
    )
    );

    return loadedRemedios;
  }





  return (
    <>
      <Navbar />
      <table className="table mt-5">
        <thead>
          <tr>
            <th>Nome Remedio</th>
            <th>Nome Paciente</th>
            <th>Validade</th>
            <th>Quantidade</th>
            <th>Lote</th>
            <th className="ml-5">Acoes</th>
          </tr>
        </thead>
        <tbody>{renderRows(remedios)}</tbody>
      </table>
      )
    </>
  );
}
export default ListarRemedio;