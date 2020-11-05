import React, { useState, useEffect } from "react";
import "./listarPaciente.css";
import Navbar from "../../components/navbar";
import firebase from "../../config/firebase";
import { Link } from 'react-router-dom';




function ListarPaciente(props) {
  const [excluido, setExcluido] = useState(0);
  const [moradores, setMoradores] = React.useState([]);
  const [remedios, setRemedios] = React.useState([]);

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
          <Link to={`/editarpaciente/${morador.id}`} className="btn-editar ml-2 mr-2 "><i className="fas fa-pen-square fa-3x"></i></Link>
          <Link to={`/addRemedio/${morador.id}`} className="btn-editar ml-2 mr-2"><i className="fas fa-prescription-bottle-alt fa-3x ml-2"></i></Link>
          <Link to={{ pathname: 'listarRemedio/', n1: { name: morador.n1}}} className="btn-editar "><i className="fas fas fa-list-ul fa-3x ml-2"></i></Link>
          <button className="botaoExcluir btn btn-danger ml-5 "onClick={() => remover(morador.id)}><i className=" fa fa-trash"></i></button>
            
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
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>{renderRows(moradores)}</tbody>
      </table>
      )
    </>
  );
}
export default ListarPaciente;
