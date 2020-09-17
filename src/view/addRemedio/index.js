import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import "./addRemedio.css";
import Navbar from '../../components/navbar'
import firebase from '../../config/firebase';


function AddRemedio(props) {

  const [carregando, setCarregando] = useState();
  const [remedios, setRemedios] = React.useState([]);
  const [msgTipo, setMsgTipo] = useState();
  const [nomePaciente, setNomePaciente] = useState();
  const [nomeRemedio, setNomeRemedio] = useState();
  const [dosagem, setDosagem] = useState();
  const [uniMedidas, setUniMedidas] = useState();
  const [vencimento, setVencimento] = useState();
  const [quantidade, setQuantidade] = useState();
  const [lote, setLote] = useState();
  const usuarioEmail = useSelector(state => state.usuarioEmail);


  const db = firebase.firestore();



  React.useEffect(() => {
    if (props.match.params.id) {
      firebase.firestore().collection('remedios').doc(props.match.params.id).get().then(resultado => {
        setNomePaciente(resultado.data().nomePaciente)
        setNomeRemedio(resultado.data().nomeRemedio)
        setQuantidade(resultado.data().quantidade)
        setVencimento(resultado.data().vencimento)
        setLote(resultado.data().lote)
      })
    }
  }, []);

  function Atualizar() {
    setMsgTipo(null);
    setCarregando(1);

    db.collection('remedios').doc(props.match.params.id).update({

      nomePaciente: nomePaciente,
      nomeRemedio: nomeRemedio,
      vencimento: vencimento,
      quantidade: quantidade,
      lote: lote,
      criacao: new Date()


    }).then(() => {
      setMsgTipo('sucesso');
      setCarregando(0);
    }).catch(erro => {
      setMsgTipo('erro');
      setCarregando(0);


    });

  }


  function Cadastrar() {
    setMsgTipo(null);
    setCarregando(1);

    db.collection('remedios').add({

      nomePaciente: nomePaciente,
      nomeRemedio: nomeRemedio,
      usuario: usuarioEmail,
      vencimento: vencimento,
      quantidade: quantidade,
      lote: lote,
      criacao: new Date()


    }).then(() => {
      setMsgTipo('sucesso');
      setCarregando(0);
    }).catch(erro => {
      setMsgTipo('erro');
      setCarregando(0);


    });

  }

  return (
    <>
      <Navbar />
      <spam><strong>Cadastro de Medicamento</strong></spam>
      <form>


        <div class="form-row fundo">
          <div class="form-group col-md-4">
            <label>Nome Paciente</label>
            <input onChange={(e) => setNomePaciente(e.target.value)} type="text" class="form-control" placeholder="Nome do Paciente" value={nomePaciente && nomePaciente} />
          </div>


          <div class="form-group col-md-4">
            <label>Nome do Medicamento</label>
            <input onChange={(e) => setNomeRemedio(e.target.value)} type="passtextword" className="form-control" placeholder="Nome do Remedio" value={nomeRemedio && nomeRemedio} />
          </div>
        </div>


        <div class="form-row">
          <div class="form-group col-md-4">
            <label>Quantidade</label>
            <input onChange={(e) => setQuantidade(e.target.value)} type="text" className="form-control" placeholder="Quantidade" value={quantidade && quantidade} />
          </div>



          <div class="form-group col-md-4">
            <label>Vencimento</label>
            <input onChange={(e) => setVencimento(e.target.value)} type="date" className="form-control" placeholder="Vencimento" value={vencimento && vencimento} />
          </div>
        </div>

        <div class="form-group col-md-4 ">
          <label>Lote:</label>
          <input onChange={(e) => setLote(e.target.value)} type="text" className="form-control" placeholder="Lote" value={lote && lote} />
        </div>


        <div className="row">
          {
            carregando > 0 ? <div class="spinner-border text-danger mx-auto" role="status"><span class="sr-only">Loading...</span></div>
              : <button onClick={props.match.params.id ? Atualizar : Cadastrar} type="button" className="btn btn-lg btn-block mt-3 mb-5 btn-cadastro">{props.match.params.id ? 'Atualizar' : 'Salvar'}</button>

          }
        </div>
      </form>
      <div className="msg-login  text-center my-1">
        {msgTipo === 'sucesso' && <span><h5><strong>WoW!</strong> Remedio Cadastrado! &#128526; </h5></span>}
        {msgTipo === 'erro' && <span><strong>Ops!</strong> Não foi possivel cadastrar o remedio! &#128546; </span>}

      </div>

    </>

  )
}
export default AddRemedio;