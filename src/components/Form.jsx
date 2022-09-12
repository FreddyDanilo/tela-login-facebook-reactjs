import "./Form.css";

const Form = () => {
  return (
    <>
      <div className="form-container">
        <form>
          <input type="text" placeholder="Email ou Telefone" />
          <input type="text" placeholder="Senha" />
          <button className="login">Entrar</button>
          <a href="./">Esqueceu a senha?</a>
          <div className="separator"></div>
          <button className="new-account">Criar nova conta</button>
        </form>
        <span>
          <a href="./">Criar uma Página</a> para uma celebridade, uma marca ou
          uma <br />
          empresa.
        </span>
      </div>
    </>
  );
};

export default Form;
