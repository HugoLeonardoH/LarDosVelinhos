import React from "react";
import "./home.css";
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.jpg';
import Navbar from '../../components/navbar'

function Home() {
  return (
    <>
      <Navbar />
      <div className="fundo2">
        <form className="form-opcoes">
          <div className="botoes">    




            <Link  to="/addPaciente" className="mx-2 addPaciente"> Adicionar Paciente  </Link>
            <Link to="/addRemedio" className="mx-2 addRemedio">Adicionar Remedios</Link>
            <Link to="/listarPaciente" className="mx-2 listarPaciente">Listar Pacientes</Link>
            <Link to="/listarRemedio" className="mx-2 listarRemedio">Listar  Remedios</Link>
          


          </div>

        </form>
      </div>
    </>

  )
}
export default Home;
