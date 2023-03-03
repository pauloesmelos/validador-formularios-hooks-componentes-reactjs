import React from 'react';

const validacoes = {
    cep: {
        regexp: /^\d{5}-?\d{3}$/,
        mensagem: '* Digite um cep válido'
    },
    nome: {
        regexp: /\D+/,
        mensagem: '* Digite um nome sem conter dígitos'
    },
    senha: {
        regexp: /^((\S+)(\D+)?){5,20}$/,
        mensagem: '* Digite uma senha - 5 a 20 caracteres'
    },
    email: {
        regexp:  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        mensagem: '* Digite um email válido'
    }
}
const useForm = (tipo) => {
  const [valor,setValor] = React.useState('');
  const [erro,setErro] = React.useState('');
  
  const validar = (value) => {
    let boolean = false;
    if(value.length === 0){
        setErro(`* O campo ${tipo} não pode ser vazio.`);
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
  const onChange = (event) => {
    const {value} = event.target;
    setValor(value);
    if(erro)
      validar(value);
  }
  const onBlur = (event) => {
    validar(event.target.value);
  }; 
  return {valor,setValor,erro,setErro,validar,onBlur,onChange};
}

export default useForm;