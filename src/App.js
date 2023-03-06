import './App.css';
import React from 'react';
import Link from './Header/Link';
import Logo from './Header/Logo';
import Input from './Form/Input';
import Button from './Form/Button';
import useForm from './Hooks/useForm';
import Footer from './Footer/Footer';

const App = () => {
  const [formulario,setFormulario] = React.useState('');
  const [envio,setEnvio] = React.useState(false);
  const cep = useForm('cep');//cep
  const nome = useForm('nome');//nome
  const senha = useForm('senha');//senha
  const email = useForm('email');//email
  const telefone = useForm('telefone');//telefone

  const vazio = () => {
    return cep.valor.length === 0 || nome.valor.length === 0 || senha.valor.length === 0 || email.valor.length === 0 || telefone.valor.length === 0;
  };
  const erro = () => {
    return cep.erro || nome.erro || senha.erro || email.erro || telefone.erro;
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    //usar o método every para checar se todos os inputs não possuem erros
    if(!erro() && !vazio()){
      setFormulario('Formulário enviado com sucesso');
      setEnvio(true);
    }
    else{
      setFormulario('* Erro ao enviar o formulário, preencha todos os campos corretamente');
      setEnvio(false);
    }
  };

  return (
    <div className='application'>
      <header>
        <nav>
          <Logo className="logo" content="<ReactJS/>" />
          <ul>
            <Link href="https://github.com/pauloesmelos/validador-formularios-hooks-componentes-reactjs.git" content="Projeto" className="btn-link" />
            <Link href="https://github.com/pauloesmelos" content="Github" className="btn-link" />
            <Link href="https://www.linkedin.com/in/pauloeduardomelos/" content="Linkedin" className="btn-link" />
            <Link href="#" content="DEV" className="btn-link" />
          </ul>
        </nav>
      </header>
      <div className='div-form'>
        <form onSubmit={handleSubmit}>
          <h2>Formulario de cadastro de um <span style={{color: "rgb(10, 218, 72)"}}>novo</span> usuário</h2>
          <div className='inputs'>
              <Input type="text" placeholder="Digite seu nome" id="nome" label="Nome" onChange={nome.onChange} value={nome.valor} onBlur={nome.onBlur} erro={nome.erro} getMascara={nome.getMascara}/>
              <Input type="password" placeholder="Digite sua senha" id="senha" label="Senha" onChange={senha.onChange} value={senha.valor} onBlur={senha.onBlur} erro={senha.erro} getMascara={senha.getMascara}/>
              <Input type="email" placeholder="Digite seu email" id="email" label="Email" onChange={email.onChange} value={email.valor} onBlur={email.onBlur} erro={email.erro} getMascara={email.getMascara} />
              <Input type="text" placeholder="00000-000" id="cep" label="CEP" onChange={cep.onChange} value={cep.valor} onBlur={cep.onBlur} erro={cep.erro} getMascara={cep.getMascara} />
              <Input type="text" placeholder="Digite seu telefone" id="telefone" label="Telefone" onChange={telefone.onChange} value={telefone.valor} onBlur={telefone.onBlur} erro={telefone.erro} getMascara={telefone.getMascara} />
          </div>
          <Button content="Concluir Cadastro" className="button" />
        </form>
      </div>
      {formulario && <p className='mensagem-formulario' style={envio ? {color: 'green'} : {color: 'tomato'}}>{formulario}</p>}
      <Footer />
    </div>
  );
}

export default App;