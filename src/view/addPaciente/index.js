import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import "./addPaciente.css";
import Navbar from '../../components/navbar'
import firebase from '../../config/firebase';

function AddPaciente(props) {


  const [carregando, setCarregando] = useState();
  const [msgTipo, setMsgTipo] = useState();
  const [n1, setN1] = useState("");
  const [n2, setN2] = useState("");
  const [n3, setN3] = useState("");
  const [n4, setN4] = useState("");
  const [n5, setN5] = useState("");
  const [n6, setN6] = useState("");
  const [n7, setN7] = useState("");
  const [n8, setN8] = useState("");
  const [n9, setN9] = useState("");

  const [n12, setN12] = useState("");
  const [n13, setN13] = useState("");
  const [n14, setN14] = useState("");
  const [n15, setN15] = useState("");
  const [n16, setN16] = useState("");
  const [n17, setN17] = useState("");
  const [n18, setN18] = useState("");
  const [n19, setN19] = useState("");
  const [n20, setN20] = useState("");
  const [n21, setN21] = useState("");
  const [n22, setN22] = useState("");
  const [n23, setN23] = useState("");
  const [n24, setN24] = useState("");
  const [n25, setN25] = useState("");
  const [n26, setN26] = useState("");
  const [n27, setN27] = useState("");
  const [n28, setN28] = useState("");
  const [n29, setN29] = useState("");
  const [n30, setN30] = useState("");
  const [n31, setN31] = useState("");
  const [n32, setN32] = useState("");
  const [n33, setN33] = useState("");
  const [n34, setN34] = useState("");
  const [n35, setN35] = useState("");
  const [n36, setN36] = useState("");
  const [n37, setN37] = useState("");
  const [n38, setN38] = useState("");
  const [n39, setN39] = useState("");
  const [n40, setN40] = useState("");
  const [n41, setN41] = useState("");
  const [n42, setN42] = useState("");
  const [n43, setN43] = useState("");
  const [n44, setN44] = useState("");
  const [n45, setN45] = useState("");
  const [n46, setN46] = useState("");
  const [n47, setN47] = useState("");
  const [n48, setN48] = useState("");
  const [n49, setN49] = useState("");
  const [n50, setN50] = useState("");
  const [n51, setN51] = useState("");
  const [n52, setN52] = useState("");
  const [n53, setN53] = useState("");
  const [n54, setN54] = useState("");
  const [n55, setN55] = useState("");
  const [n56, setN56] = useState("");
  const [n57, setN57] = useState("");
  const [n58, setN58] = useState("");
  const [n59, setN59] = useState("");
  const [n61, setN61] = useState("");
  const [n62, setN62] = useState("");
  const usuarioEmail = useSelector(state => state.usuarioEmail);

  const db = firebase.firestore();

  React.useEffect(() => {
    if (props.match.params.id) {
      firebase.firestore().collection('moradores').doc(props.match.params.id).get().then(resultado => {
        setN1(resultado.data().n1)
        setN2(resultado.data().n2)
        setN3(resultado.data().n3)
        setN4(resultado.data().n4)
        setN5(resultado.data().n5)
        setN6(resultado.data().n6)
        setN7(resultado.data().n7)
        setN8(resultado.data().n8)
        setN9(resultado.data().n9)
        setN12(resultado.data().n12)
        setN13(resultado.data().n13)
        setN14(resultado.data().n14)
        setN15(resultado.data().n15)
        setN16(resultado.data().n16)
        setN17(resultado.data().n17)
        setN18(resultado.data().n18)
        setN19(resultado.data().n19)
        setN20(resultado.data().n20)
        setN21(resultado.data().n21)
        setN22(resultado.data().n22)
        setN23(resultado.data().n23)
        setN24(resultado.data().n24)
        setN25(resultado.data().n25)
        setN26(resultado.data().n26)
        setN27(resultado.data().n27)
        setN28(resultado.data().n28)
        setN29(resultado.data().n29)
        setN30(resultado.data().n30)
        setN31(resultado.data().n31)
        setN32(resultado.data().n32)
        setN33(resultado.data().n33)
        setN34(resultado.data().n34)
        setN35(resultado.data().n35)
        setN36(resultado.data().n36)
        setN37(resultado.data().n37)
        setN38(resultado.data().n38)
        setN39(resultado.data().n39)
        setN40(resultado.data().n40)
        setN41(resultado.data().n41)
        setN42(resultado.data().n42)
        setN43(resultado.data().n43)
        setN44(resultado.data().n44)
        setN45(resultado.data().n45)
        setN46(resultado.data().n46)
        setN47(resultado.data().n47)
        setN48(resultado.data().n48)
        setN49(resultado.data().n49)
        setN50(resultado.data().n50)
        setN51(resultado.data().n51)
        setN52(resultado.data().n52)
        setN53(resultado.data().n53)
        setN54(resultado.data().n54)
        setN55(resultado.data().n55)
        setN56(resultado.data().n56)
        setN57(resultado.data().n57)
        setN58(resultado.data().n58)
        setN59(resultado.data().n59)
        setN61(resultado.data().n61)
        setN62(resultado.data().n62)
      })
    }
  }, []);



  function Atualizar() {
    setMsgTipo(null);
    setCarregando(1);

    db.collection('moradores').doc(props.match.params.id).update({

      n1: n1,
      n2: n2,
      n3: n3,
      n4: n4,
      n5: n5,
      n6: n6,
      n7: n7,
      n8: n8,
      n9: n9,
      n12: n12,
      n13: n13,
      n14: n14,
      n15: n15,
      n16: n16,
      n17: n17,
      n18: n18,
      n19: n19,
      n20: n20,
      n21: n21,
      n22: n22,
      n23: n23,
      n24: n24,
      n25: n25,
      n26: n26,
      n27: n27,
      n28: n28,
      n29: n29,
      n30: n30,
      n31: n31,
      n32: n32,
      n33: n33,
      n34: n34,
      n35: n35,
      n36: n36,
      n37: n37,
      n38: n38,
      n39: n39,
      n40: n40,
      n41: n41,
      n42: n42,
      n43: n43,
      n44: n44,
      n45: n45,
      n46: n46,
      n47: n47,
      n48: n48,
      n49: n49,
      n50: n50,
      n51: n51,
      n52: n52,
      n53: n53,
      n54: n54,
      n55: n55,
      n56: n56,
      n57: n57,
      n58: n58,
      n59: n59,
      n61: n61,
      n62: n62,
      usuario: usuarioEmail,



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

    db.collection('moradores').add({

      n1: n1,
      n2: n2,
      n3: n3,
      n4: n4,
      n5: n5,
      n6: n6,
      n7: n7,
      n8: n8,
      n9: n9,
      n12: n12,
      n13: n13,
      n14: n14,
      n15: n15,
      n16: n16,
      n17: n17,
      n18: n18,
      n19: n19,
      n20: n20,
      n21: n21,
      n22: n22,
      n23: n23,
      n24: n24,
      n25: n25,
      n26: n26,
      n27: n27,
      n28: n28,
      n29: n29,
      n30: n30,
      n31: n31,
      n32: n32,
      n33: n33,
      n34: n34,
      n35: n35,
      n36: n36,
      n37: n37,
      n38: n38,
      n39: n39,
      n40: n40,
      n41: n41,
      n42: n42,
      n43: n43,
      n44: n44,
      n45: n45,
      n46: n46,
      n47: n47,
      n48: n48,
      n49: n49,
      n50: n50,
      n51: n51,
      n52: n52,
      n53: n53,
      n54: n54,
      n55: n55,
      n56: n56,
      n57: n57,
      n58: n58,
      n59: n59,
      n61: n61,
      n62: n62,

      usuario: usuarioEmail,
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

      <h5 className="text-center font-weight-bold">Cadastro do Morador:</h5>
      <div className="form-group ml-5 mr-5">
        <label>Nome:</label>
        <input onChange={(e) => setN1(e.target.value)} type="text" className="form-control" value={n1 && n1} />
      </div>

      <div className="row ml-1">
        <div className=" ml-5 mr-5">
          <label >Data de Nascimento:</label>
          <input onChange={(e) => setN2(e.target.value)} type="date"  className="form-control" value={n2 && n2} />
        </div>


        <div className="p ml-5 mr-5">
          <label>Idade:</label>
          <input onChange={(e) => setN3(e.target.value)} type="text" className="form-control" required pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}" value={n3 && n3} />
        </div>

        <div className=" ml-5 mr-5">
          <label>RG:</label>
          <input onChange={(e) => setN4(e.target.value)} type="text" className="form-control" value={n4 && n4} />
        </div>

        <div className=" ml-5 mr-5">
          <label>CPF:</label>
          <input onChange={(e) => setN5(e.target.value)} type="text" className="form-control" value={n5 && n5} />
        </div>
      </div>

      <div className="row mt-3 ml-2">
        <div className="ml-5 mr-">
          <label>Endereço:</label>
          <input onChange={(e) => setN6(e.target.value)} type="text" className="form-control endereco" value={n6 && n6} />
        </div>

        <div className=" ml-5 mr-5">
          <label>Numero:</label>
          <input onChange={(e) => setN7(e.target.value)} type="text" className="form-control" value={n7 && n7} />
        </div>

        <div className="ml-5 mr-">
          <label>Cidade Natal:</label>
          <input onChange={(e) => setN8(e.target.value)} type="text" className="form-control " value={n8 && n8} />
        </div>

        <div className="enz ml-5 mr-5">
          <label>Estado:</label>
          <input onChange={(e) => setN9(e.target.value)} type="text" className="form-control" value={n9 && n9} />
        </div>
      </div>





      <div className="row">
        <div className="form txt">
          <label className="ml-5 mt-3"> 2 - Estado de Saude<br /> </label>
          <div className="row">
            <label className="ml-5 mt-3">Bom estado de saúde, não usa medicamentos</label>
            <select onChange={(e) => setN12(e.target.value)} className="row select" value={n12 && n12}>
              <option>Escolha</option>
              <option>Sim</option>
              <option>Não</option>
            </select>
          </div>

          <div className="row">
            <label className="ml-5 mt-3">Bom estado de saúde, usa medicamentos e é <br /> autonomo em atividades diarias</label>
            <select onChange={(e) => setN13(e.target.value)} className="row select2" value={n13 && n13}>
              <option>Escolha</option>
              <option>Sim</option>
              <option>Não</option>
            </select>
          </div>



          <div className="row">
            <label className="ml-5 mt-3">Estado de saúde delicada onde necessita de <br />auxilio em atividades diarias e usa medicamentos<br /></label>
            <select onChange={(e) => setN14(e.target.value)} className="row select3" value={n14 && n14}>
              <option>Escolha</option>
              <option>Sim</option>
              <option>Não</option>
            </select>
          </div>
        </div>
        <div className="form txt">
          <label className="ml-5 mt-3">3 - Equipamentos de Auto ajuda<br /> </label>
          <div className="row">
            <label className="ml-5 mt-3">Faz uso de cadeira de rodas</label>
            <select onChange={(e) => setN15(e.target.value)} className="row select" value={n15 && n15}>
              <option>Escolha</option>
              <option>Sim</option>
              <option>Não</option>
            </select>
          </div>

          <div className="row">
            <label className="ml-5 mt-3">Faz uso de andador</label>
            <select onChange={(e) => setN16(e.target.value)} className="row select2" value={n16 && n16}>
              <option>Escolha</option>
              <option>Sim</option>
              <option>Não</option>
            </select>
          </div>



          <div className="row">
            <label className="ml-5 mt-3">Faz uso de muleta ou bengala</label>
            <select onChange={(e) => setN17(e.target.value)} className="row select3" value={n17 && n17} >
              <option>Escolha</option>
              <option>Sim</option>
              <option>Não</option>
            </select>
          </div>


          <div className="row">
            <label className="ml-5 mt-3">Faz uso de fraldas</label>
            <select onChange={(e) => setN18(e.target.value)} className="row select3" value={n18 && n18}>
              <option>Escolha</option>
              <option>Sim</option>
              <option>Não</option>
            </select>
          </div>


        </div>

        <div className="form txt">
          <label className="ml-5 mt-3"> 4 - Dependencia<br /> </label>
          <div className="row">
            <label className="ml-5 mt-3">Fumante</label>
            <select onChange={(e) => setN19(e.target.value)} className="row select" value={n19 && n19}>
              <option>Escolha</option>
              <option>Sim</option>
              <option>Não</option>
            </select>
          </div>

          <div className="row">
            <label className="ml-5 mt-3"> Alcoolatra</label>
            <select onChange={(e) => setN20(e.target.value)} className="row select2" value={n20 && n20}>
              <option>Escolha</option>
              <option>Sim</option>
              <option>Não</option>
            </select>
          </div>



          <div className="row">
            <label className="ml-5 mt-3">Drogas ilicitas<br /></label>
            <select onChange={(e) => setN21(e.target.value)} className="row select3" value={n21 && n21}>
              <option>Escolha</option>
              <option>Sim</option>
              <option>Não</option>
            </select>
          </div>

        </div>

        <div className="form txt">
          <label className="ml-5 mt-3"> 5 - Relacionamento<br /> </label>
          <div className="row">
            <label className="ml-5 mt-3">Facilidade de Relacionamento</label>
            <select onChange={(e) => setN22(e.target.value)} className="row select" value={n22 && n22}>
              <option>Escolha</option>
              <option>Sim</option>
              <option>Não</option>
            </select>
          </div>

          <div className="row">
            <label className="ml-5 mt-3"> Isolamento Social</label>
            <select onChange={(e) => setN23(e.target.value)} className="row select2" value={n23 && n23}>
              <option>Escolha</option>
              <option>Sim</option>
              <option>Não</option>
            </select>
          </div>



          <div className="row">
            <label className="ml-5 mt-3"> Possui manias que comprometem <br />o convivio em grupo</label>
            <select onChange={(e) => setN24(e.target.value)} className="row select3" value={n24 && n24}>
              <option>Escolha</option>
              <option>Sim</option>
              <option>Não</option>
            </select>
          </div>
        </div>
        <div className="form txt4">
          <label className="ml-5 mt-5">7-  Acompanhamento médico<br /> </label>
          <div className="row">
            <label className="ml-5 mt-3">Realiza acompanhamento medico</label>
            <select onChange={(e) => setN25(e.target.value)} className="row select ml-3" value={n25 && n25}>
              <option>Escolha</option>
              <option>Sim</option>
              <option>Não</option>
            </select>



          </div>

          <div className="row">
            <label className="ml-5 mt-3"> Realiza acompanhamento odontológico</label>
            <select onChange={(e) => setN26(e.target.value)} className="row select2  ml-3" value={n26 && n26} >
              <option>Escolha</option>
              <option>Sim</option>
              <option>Não</option>
            </select>
          </div>



          <div className="row">
            <label className="ml-5 mt-3"> Possui exames recentes</label>
            <select onChange={(e) => setN27(e.target.value)} className="row select3" value={n27 && n27}>
              <option>Escolha</option>
              <option>Sim</option>
              <option>Não</option>
            </select>
          </div>
        </div>

        <div className="form">
          <div className="row mt-4">
            <label className=" mt-3"> 8 - Possui Alergias?</label>
            <select onChange={(e) => setN28(e.target.value)} className="row select2" value={n28 && n28}>
              <option >Escolha</option>
              <option>Sim</option>
              <option>Não</option>
            </select>
          </div>
          <label > Qual?</label>
          <input onChange={(e) => setN29(e.target.value)} type="text" className="form-control" value={n29 && n29} />
        </div>

        <div className="row">

          <div className="form txt66">
            <label className="ml-5 mt-5">6 -Doenças crônicas<br /> </label>
            <div className="row">
              <label className="ml-5 mt-3">Hipertensão Arterial <br />Sistêmica</label>
              <select onChange={(e) => setN30(e.target.value)} className="row select" value={n30 && n30}>
                <option>Escolha</option>
                <option>Sim</option>
                <option>Não</option>
              </select>
            </div>

            <div className="row">
              <label className="ml-5 mt-3">DPOC</label>
              <select onChange={(e) => setN31(e.target.value)} className="row select2" value={n31 && n31}>
                <option>Escolha</option>
                <option>Sim</option>
                <option>Não</option>
              </select>
            </div>



            <div className="row">
              <label className="ml-5 mt-3">Diabetes</label>
              <select onChange={(e) => setN32(e.target.value)} className="row select3" value={n32 && n32}>
                <option>Escolha</option>
                <option>Sim</option>
                <option>Não</option>
              </select>
            </div>

            <div className="row">
              <label className="ml-5 mt-3">Alzheimer</label>
              <select onChange={(e) => setN33(e.target.value)} className="row select3" value={n33 && n33}>
                <option>Escolha</option>
                <option>Sim</option>
                <option>Não</option>
              </select>
            </div>

            <div className="row">
              <label className="ml-5 mt-3">Parkinson</label>
              <select onChange={(e) => setN34(e.target.value)} className="row select3" value={n34 && n34}>
                <option>Escolha</option>
                <option>Sim</option>
                <option>Não</option>
              </select>
            </div>

            <div className="row">
              <label className="ml-5 mt-3">Sequela de AVC</label>
              <select onChange={(e) => setN35(e.target.value)} className="row select3" value={n35 && n35}>
                <option>Escolha</option>
                <option>Sim</option>
                <option>Não</option>
              </select>
            </div>
            <label> Qual Sequela?</label>
            <input onChange={(e) => setN36(e.target.value)} type="text" className="form-control ml-2" value={n36 && n36} />





          </div>



          <div className=" ml-5 mr-5 mt-5 ml-5">
            <label>9-Historico de Saude</label>
            <input onChange={(e) => setN37(e.target.value)} type="text-area" className="form-control texto" value={n37 && n37} />
            <div className=" ml-1 mr-5 mb-5 txt10">
              <label>10-Se o candidato fizer uso de medicamento descrever a relação de medicamentos utilizados</label>
              <input onChange={(e) => setN38(e.target.value)} type="text-area" className="form-control texto" value={n38 && n38} />
            </div>
          </div>



        </div>


      </div>
      <div className="row">
        <div className="form mt-3 ml-5">

          <div className="row">
            <label className="ml-4 mt-4">11- Aposentado</label>
            <select onChange={(e) => setN39(e.target.value)} className="row select3" value={n39 && n39}>
              <option>Escolha</option>
              <option>Sim</option>
              <option>Não</option>
            </select>
          </div>

          <div className="row">
            <label className="ml-4 mt-3"> 11-Pensionista</label>
            <select onChange={(e) => setN40(e.target.value)} className="row select3" value={n40 && n40}>
              <option>Escolha</option>
              <option>Sim</option>
              <option>Não</option>
            </select>
          </div>

          <label className="ml-2"> Valor?</label>
          <input onChange={(e) => setN41(e.target.value)} type="text" className="form-control ml-2" value={n41 && n41} />
        </div>


        <div className="form ml-5">
          <div className="row mt-5">
            <label className="ml-5 mt-4"> 12 - Possui plano de saude?</label>
            <select onChange={(e) => setN42(e.target.value)} className="row select2" value={n42 && n42}>
              <option >Escolha</option>
              <option>Sim</option>
              <option>Não</option>
            </select>
          </div>
          <label className="ml-5 mr-5"> Qual?</label>
          <input onChange={(e) => setN43(e.target.value)} type="text" className="form-control ml-5" value={n43 && n43} />
        </div>




        <div className="form ml-5">
          <div className="row mt-4 ml-4">
            <label className="ml-3 mt-2"> 13 - Possui plano funerario</label>
            <select onChange={(e) => setN44(e.target.value)} className="row select22" value={n44 && n44}>
              <option >Escolha</option>
              <option>Sim</option>
              <option>Não</option>
            </select>
          </div>
          <label className="ml-5 mr-5"> Qual?</label>
          <input onChange={(e) => setN45(e.target.value)} type="text" className="form-row ml-5" value={n45 && n45} />
        </div>

        <div className="form ml-5">
          <div className="row mt-2">
            <label className="ml-5 mt-4"> 14- Deseja de livre vontade residir nesse lar</label>

            <select onChange={(e) => setN46(e.target.value)} className="row nx14" value={n46 && n46}>
              <option >Escolha</option>
              <option>Sim</option>
              <option>Não</option>
            </select>
          </div>

        </div>
      </div>

      <div className="row">
        <div className="form ml-5">
          <div className="row mt-4 ml-3">
            <label className="ml-1 mt-2"> 15 - Recebe beneficio integral</label>
            <select onChange={(e) => setN47(e.target.value)} className="row select22" value={n47 && n47}>
              <option >Escolha</option>
              <option>Sim</option>
              <option>Não</option>
            </select>
          </div>
          <label className="ml-4 mr-5"> Valor?</label>
          <input onChange={(e) => setN48(e.target.value)} type="text" className="form-row ml-3" value={n48 && n48} />
        </div>


        <div className="form txt">
          <label className="ml-5 mt-3"> 16 - Atualmente reside com quem<br /> </label>
          <div className="row">
            <label className="ml-5 mt-3">Sozinho</label>
            <select onChange={(e) => setN49(e.target.value)} className="row select" value={n49 && n49}>
              <option>Escolha</option>
              <option>Sim</option>
              <option>Não</option>
            </select>
          </div>

          <div className="row">
            <label className="ml-5 mt-3">Familia</label>
            <select onChange={(e) => setN50(e.target.value)} className="row select2" value={n50 && n50}>
              <option>Escolha</option>
              <option>Sim</option>
              <option>Não</option>
            </select>
          </div>



          <div className="row">
            <label className="ml-5 mt-3">Outros</label>
            <select onChange={(e) => setN51(e.target.value)} className="row select3 ml-5" value={n51 && n51}>
              <option>Escolha</option>
              <option>Sim</option>
              <option>Não</option>
            </select>
          </div>
          <label className="ml-5 mr-5"> Quem?</label>
          <input onChange={(e) => setN52(e.target.value)} type="text" className="form-row ml-5" value={n52 && n52} />
        </div>



        <div className="form ml-5">
          <div className="row mt-4 ml-3">
            <label className="ml-1 mt-2"> 17- Possui representante legal</label>
            <select onChange={(e) => setN53(e.target.value)} className="row select22" value={n53 && n53}>
              <option >Escolha</option>
              <option>Sim</option>
              <option>Não</option>
            </select>
          </div>
          <label className="ml-4 mr-5"> Nome:</label>
          <input onChange={(e) => setN54(e.target.value)} type="text" className="form-row ml-3" value={n54 && n54} />
          <label className="ml-4 mr-5"> Telefone:</label>
          <input onChange={(e) => setN55(e.target.value)} type="text" className="form-row ml-3" value={n55 && n55} />
        </div>

        <div className="form txt">
          <label className="ml-5 mt-4"> 18 - Estado civil<br /> </label>
          <div className="row">
            <label className="ml-5 mt-3">Solteiro</label>
            <select onChange={(e) => setN56(e.target.value)} className="row select" value={n56 && n56}>
              <option>Escolha</option>
              <option>Sim</option>
              <option>Não</option>
            </select>
          </div>

          <div className="row">
            <label className="ml-5 mt-3">Casado</label>
            <select onChange={(e) => setN57(e.target.value)} className="row select2" value={n57 && n57}>
              <option>Escolha</option>
              <option>Sim</option>
              <option>Não</option>
            </select>
          </div>



          <div className="row">
            <label className="ml-5 mt-3">Viuvo</label>
            <select onChange={(e) => setN58(e.target.value)} className="row select3" value={n58 && n58}>
              <option>Escolha</option>
              <option>Sim</option>
              <option>Não</option>
            </select>
          </div>
        </div>
        <div className="form txt">
        </div>

      </div>


      <div className="row">




        <div className="row ml-5 mr-4">
          <label className="ml-2 mt-2 ">20- Resposavel pelo preenchimento<br />
            <label> Nome:</label>
            <input onChange={(e) => setN59(e.target.value)} type="text" className="form-control" value={n59 && n59} />

            <label> Data do preenchimento:</label>
            <input onChange={(e) => setN61(e.target.value)} type="date" className="form-control" value={n61 && n61} />
          </label>
        </div>


        <div className=" ml-5 mr-5 mt-2">
          <label>19 Referencia de Contatos</label>
          <input onChange={(e) => setN62(e.target.value)} type="text-area" className="form-control texto3" value={n62 && n62} />
        </div>
      </div>
      <div className="row">
        {
          carregando > 0 ? <div class="spinner-border text-danger mx-auto " role="status"><span class="sr-only">Loading...</span></div>
            : <button onClick={props.match.params.id ? Atualizar : Cadastrar} type="button" className="btn btn-lg btn-block mt-3 mb-5 btn-cadastro">{props.match.params.id ? 'Atualizar ' : 'Cadastrar'}</button>


        }
      </div>

      <div className="msg-login  text-center my-1">
        {msgTipo === 'sucesso' && <span><h5><strong>WoW!</strong> Paciente Cadastrado! &#128526; </h5></span>}
        {msgTipo === 'erro' && <span><strong>Ops!</strong> Não foi possivel cadastrar o paciente! &#128546; </span>}

      </div>


    </>

  )
}
export default AddPaciente;
