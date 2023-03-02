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
  const cep = useForm('cep');//cep
  const nome = useForm('nome');//nome
  const senha = useForm('senha');//senha
  const email = useForm('email');//email

  const vazio = () => {
    return cep.valor.length === 0 || nome.valor.length === 0 || senha.valor.length === 0 || email.valor.length === 0;
  };
  const erro = () => {
    return cep.erro || nome.erro || senha.erro || email.erro;
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    //usar o método every para checar se todos os inputs não possuem erros
    if(!erro() && !vazio()){
      setFormulario('Formulário enviado com sucesso');
    }
    else{
      setFormulario('* Erro ao enviar o formulário, preencha todos os campos corretamente');
    }
  };

  return (
    <div className='application'>
      <header>
        <nav>
          <Logo className="logo" content="Cadastro <ReactJS/>" />
          <ul>
            <Link href="https://github.com/pauloesmelos/validador-formularios-hooks-componentes-reactjs.git" content="Projeto" className="btn-link" />
            <Link href="https://github.com/pauloesmelos" content="Github" className="btn-link" />
            <Link href="https://www.linkedin.com/in/pauloeduardomelos/" content="Linkedin" className="btn-link" />
            <Link href="#" content="DEV" className="btn-link" />
          </ul>
        </nav>
      </header>
      <form onSubmit={handleSubmit}>
        <h2>Cadastro de um <span style={{color: "rgb(10, 218, 72)"}}>novo</span> usuário</h2>
        <div className='inputs'>
          <div className='d1'>
            <Input type="text" placeholder="Digite seu nome" id="nome" label="Nome" onChange={nome.onChange} value={nome.valor} onBlur={nome.onBlur} erro={nome.erro} />
            <Input type="password" placeholder="Digite sua senha" id="senha" label="Senha" onChange={senha.onChange} value={senha.valor} onBlur={senha.onBlur} erro={senha.erro}/>
          </div>
          <div className='d2'>
            <Input type="email" placeholder="Digite seu email" id="email" label="Email" onChange={email.onChange} value={email.valor} onBlur={email.onBlur} erro={email.erro} />
            <Input type="text" placeholder="00000-000" id="cep" label="Cep" onChange={cep.onChange} value={cep.valor} onBlur={cep.onBlur} erro={cep.erro} />
          </div>
        </div>
        <Button content="Cadastrar" className="button" />
      </form>
      {formulario && <p className='mensagem-formulario'>{formulario}</p>}
      <Footer />
    </div>
  );
}

export default App;