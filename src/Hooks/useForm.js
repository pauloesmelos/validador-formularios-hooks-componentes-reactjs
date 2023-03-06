import React from 'react';

const validacoes = {
    cep: {
        regexp: /^\d{5}-?\d{3}$/,
        mensagem: 'Digite um cep válido',
        mascara: '00000-000'
    },
    nome: {
        regexp: /\D+/,
        mensagem: `Digite um nome sem conter dígitos`,
        mascara: ''
    },
    senha: {
        regexp: /^((\S+)(\D+)?){5,20}$/,
        mensagem: 'Digite uma senha - 5 a 20 caracteres',
        mascara: '******'
    },
    email: {
        regexp:  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        mensagem: 'Digite um email válido',
        mascara: ''
    },
    telefone: {
      regexp: /^\(?[1-9]{2}\)? ?(?:[2-8]|9[1-9])[0-9]{3}\-?[0-9]{4}$/,
      mensagem: 'Digite um telefone válido',
      mascara: ''
    }
}
const useForm = (tipo) => {
  const [valor,setValor] = React.useState('');
  const [erro,setErro] = React.useState('');
  
  const validar = (value) => {
    let boolean = false;
    if(value.length === 0){
        setErro(`O campo ${tipo} não pode ser vazio.`);
        boolean =  false;
    }
    else if(!validacoes[tipo].regexp.test(value)){
        setErro(validacoes[tipo].mensagem);
        boolean =  false;
    }
    else{
        setErro('');
        boolean =  true;
    }
    return boolean;
  };
  const mascaraTelefone = (expressao) => {//mascara input telefone
    console.log(expressao.length);
    switch(expressao.length){
      case 1:
        setValor(`(${expressao}`);
        break;
      case 3:
        setValor(`${expressao})`);
        break;
      case 9:
        setValor(`${expressao}-`);
        break;
      case 15: break;
      default:
        setValor(expressao);
        break;
    }
  };
  const onChange = (event) => {
    const {value} = event.target;
    tipo === 'telefone' ? mascaraTelefone(value) : setValor(value);
    if(erro)
      validar(value);
  }
  const onBlur = (event) => {
    validar(event.target.value);
  }; 
  const getMascara = () => {
    return validacoes[tipo].mascara;
  }
  return {valor,setValor,erro,setErro,validar,onBlur,onChange,getMascara: () => getMascara(tipo)};
}

export default useForm;