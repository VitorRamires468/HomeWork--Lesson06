import { useState } from "react";

function Form3() {
  const [info, setInfo] = useState({
    nome: "",
    email: "",
    senha: "",
    confirmaSenha: "",
  });

  const [errors, setErrors] = useState({});

  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};

    if (!info.nome) {
      newErrors.nome = "Nome é obrigatório";
    }
    if (!info.email) {
      newErrors.email = "Email é obrigatório";
    } else if (!/\S+@\S+\S+.\S+/.test(info.email)) {
      newErrors.email = "Email inválido ";
    }

    if (!info.senha) {
      newErrors.senha = "O campo de senha é obrigatório";
    } else if (info.senha.length < 8) {
      newErrors.senha = "O campo de senha precisa de ao menos 8 caracteres";
    }

    if (!info.confirmaSenha) {
      newErrors.confirmaSenha = "O campo de senha é obrigatório";
    } else if (info.senha !== info.confirmaSenha) {
      newErrors.confirmaSenha = "O campo de senha precisa coincidir";
    }

    return newErrors;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInfo((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event) => {
    "";
    event.preventDefault();
    const validateErrors = validate();

    if (Object.keys(validateErrors).length === 0) {
      setSubmitted(true);
    } else {
      setErrors(validateErrors);
    }
    alert(`Nome: ${info.nome}\nEmail: ${info.email}\nSenha: ${info.senha}`);
  };

  return (
    <>
      {submitted && <p>Registrado com sucesso</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Nome:
          <input
            type="text"
            name="nome"
            value={info.nome}
            onChange={handleChange}
          />
          {errors.nome && <p>{errors.nome}</p>}
        </label>

        <br />
        <label>
          Email:
          <input
            type="text"
            name="email"
            value={info.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </label>
        <br />
        <label>
          Senha:
          <input
            type="text"
            name="senha"
            value={info.senha}
            onChange={handleChange}
          />
          {errors.senha && <p>{errors.senha}</p>}
        </label>
        <br />
        <label>
          Confirmar Senha:
          <input
            type="text"
            name="confirmaSenha"
            value={info.confirmaSenha}
            onChange={handleChange}
          />
          {errors.confirmaSenha && <p>{errors.confirmaSenha}</p>}
        </label>
        <br />
        <button type="submit">Enviar</button>
      </form>
    </>
  );
}

export default Form3;
