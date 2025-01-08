import { useState } from "react";

function Form() {
  function cadastrarUsuario(e) {
    e.preventDefault();
    console.log(name);
    console.log("Usuario cadastrado!");
    console.log(`O usuario ${name} foi registrado com a senha ${password}`)
  }

  const [name, setName] = useState();
  const [password, setPassword] = useState();

  return (
    <div>
      <form onSubmit={cadastrarUsuario}>
        <div>
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Digite seu nome"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="senha">Senha:</label>
          <input
            type="password"
            id="senha"
            name="senha"
            placeholder="Digite sua senha"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div>
          <input type="submit" placeholder="Enviar" />
        </div>
      </form>
    </div>
  );
}

export default Form;
