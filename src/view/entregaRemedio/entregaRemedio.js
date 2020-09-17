import React, { useState } from 'react';
import "./entregaRemedio.css";
import Navbar from '../../components/navbar'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import firebase from '../../config/firebase';



function EntregaRemedio(props) {  

    const [carregando, setCarregando] = useState();
    const [remedios, setRemedios] = React.useState([]);
    const [msgTipo, setMsgTipo] = useState();
    const [nomePaciente, setNomePaciente] = useState();
    const [nomeRemedio, setNomeRemedio] = useState();
    const [dosagem, setDosagem] = useState();
    const [uniMedidas, setUniMedidas] = useState();
    const [vencimento, setVencimento] = useState();
    const [quantidade, setQuantidade] = useState();
    const [quantidadeEntrega, setQuantidadeEntrega] = useState();
    const [lote, setLote] = useState();
    const usuarioEmail = useSelector(state => state.usuarioEmail);

  
  
    const db = firebase.firestore();
  
    
  
    React.useEffect(() => {  
      if(props.match.params.id){                   
          firebase.firestore().collection('remedios').doc(props.match.params.id).get().then(resultado => {
              setNomePaciente(resultado.data().nomePaciente)       
              setNomeRemedio(resultado.data().nomeRemedio)  
              setLote(resultado.data().lote)                           
              setQuantidade(resultado.data().quantidade)  
              setVencimento(resultado.data().vencimento)                                                                                                  
  })
  }
  },  []);
  




  function AtualizaQuantidade(id) {
    const db = firebase.firestore();
    
    let quantidadeTotal = null;
    quantidadeTotal = quantidade;
    console.log(quantidadeTotal)
    let novaQuantidade = null ;
    novaQuantidade = quantidadeTotal - quantidadeEntrega; 
    console.log(novaQuantidade)

    db.collection('remedios').doc(props.match.params.id).update({

      
      quantidade: novaQuantidade,
     
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
      <spam><strong>Dispensação Medicamento</strong></spam>
      <form className="formEntrega">
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="inputEmail4">Nome Paciente</label>
            <input type="text" class="form-control" id="inputEmail4" placeholder="Nome do Paciente" value={nomePaciente && nomePaciente} />
          </div>

          <div class="form-group col-md-6">
            <label for="inputPassword4">Nome do Medicamento</label>
            <input type="text" class="form-control" id="inputPassword4" placeholder="Nome do Remedio" value={nomeRemedio && nomeRemedio} />
          </div>
        </div>

        <div class="form-row">
          
          <div class="form-group col-md-6">
            <label for="inputEmail4">Quantidade de Comprimidos</label>
          <input onChange={(e) => setQuantidade(e.target.value)} type="text" className="form-control" placeholder="Quantidade" value={quantidade && quantidade}/>
          </div>


          <div class=" form-group col-md-6">
            <label for="inputEmail4">Quantidade Entrega</label>            
          <input onChange={(e) => setQuantidadeEntrega(e.target.value)} type="text" name="qtdeEntrega" className="form-control" placeholder="Quantidade"/>
          </div>

        </div>


        
        <div className="row">
          {
           carregando > 0 ? <div class="spinner-border text-danger mx-auto" role="status"><span class="sr-only">Loading...</span></div>
           : <button onClick={props.match.params.id , AtualizaQuantidade} type="button" className="btn btn-lg btn-block mt-3 mb-5 botaoSalvar">{props.match.params.id , 'Entregar'}</button>

          }
        </div>

      <div className="msg-login  text-center my-1">
        {msgTipo === 'sucesso' && <span><h5><strong>WoW!</strong> Remedio Entregue! &#128526; </h5></span>}
        {msgTipo === 'erro' && <span><strong>Ops!</strong> Não foi possivel cadastrar o remedio! &#128546; </span>}

      </div> 
      
      </form>


    </>

  )
}
export default EntregaRemedio;
