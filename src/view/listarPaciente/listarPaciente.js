import React, { useState, useEffect } from "react";
import "./listarPaciente.css";
import Navbar from "../../components/navbar";
import firebase from "../../config/firebase";
import { Link } from 'react-router-dom';




function ListarPaciente() {
  const [excluido, setExcluido] = useState(0);
  const [moradores, setMoradores] = React.useState([]);


  React.useEffect(() => {
    const fetchData = async () => {
      
      const db = firebase.firestore();
      const data = await db.collection("moradores");
      data.onSnapshot(snapshot => {
         setMoradores(snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })));
    const dados = snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));

  
        
      });
     

    };
    fetchData();

  }, []);
  function remover(id) {
    const db = firebase.firestore();
    db.collection('moradores').doc(id).delete();
  }
 

  function renderRows(moradores) {
    let loadedmoradores = moradores.map((morador, index) => (
      <tr key={index}>
        <td>{morador.n1}</td>
        <td>{morador.n3}</td>
        <td>{morador.n2}</td>
        <td>{morador.n8}</td>

        <td>
          <Link to={`/editarpaciente/${morador.id}`} className="btn-editar "><i className="fas fa-pen-square fa-3x"></i></Link>
          <button
            className="btn btn-danger ml-2 "onClick={() => remover(morador.id)}><i className="fa fa-trash"></i></button>
        </td>
      </tr>
    ));
    return loadedmoradores;
  }






  return (
    <>
      <Navbar />
      <table className="table mt-5">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Idade</th>
            <th>Data de Nascimento</th>
            <th>Cidade</th>

            <th>Acoes</th>
          </tr>
        </thead>
        <tbody>{renderRows(moradores)}</tbody>
      </table>
      )
    </>
  );
}
export default ListarPaciente;
