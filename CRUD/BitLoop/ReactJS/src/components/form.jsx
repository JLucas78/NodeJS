import { useState } from "react";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [user, setUser] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();

    // Verifica se os campos estão preenchidos
    if (!email || !password) {
      setError("Preencha todos os campos");
      return;
    }

    // Validação de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    if (!emailRegex.test(email)) {
      setError("Email inválido");
      return;
    }

    // Validação de senha (mínimo 6 caracteres, incluindo letras maiúsculas, minúsculas, números e caracteres especiais)
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    if (!passwordRegex.test(password)) {
      setError("Senha inválida. A senha deve ter pelo menos 6 caracteres, incluindo letras maiúsculas, minúsculas, números e caracteres especiais.");
      return;
    }

    // Chama a API para realizar o login
    try {
      const response = await axios.post(
        "http://localhost:3000/login",  // URL da API que será chamada
        { email, password },             // Dados que serão enviados no corpo da requisição
        {
          headers: {
            "Content-Type": "application/json",  // Define o tipo de conteúdo como JSON
          },
        }
      );

      // Verifica a resposta do servidor
      if (response.status === 200) {  // Se a resposta for 200, significa que o login foi bem-sucedido
        alert(response.data.message);
        setError("");  // Limpa qualquer mensagem de erro anterior
        setUser(response.data.user); // Atualiza o estado com os dados do usuário
      } else {
        setError("Erro ao realizar login. Verifique suas credenciais.");
      }
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      if (!error?.response) {
        setError("Erro ao acessar a API. Tente novamente mais tarde.");
      } else if (error.response.status === 400) {
        setError("Email ou senha inválidos.");
      } else {
        setError(`Ocorreu um erro inesperado: ${error.response.data.message || "Tente novamente."}`);
      }
    }
  };

  return (
    <div className="login-form-wrap">
      {user === null ? (
        <div>
          <h2>Login</h2>
          <form className="login-form" onSubmit={handleLogin}>
            <input
              type="email"
              name="email"
              placeholder="Digite seu email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              name="password"
              placeholder="Digite sua senha"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" className="btn-login">
              Login
            </button>
          </form>
          {error && <p className="error-message">{error}</p>}
        </div>
      ) : (
        <div className="login-form-success">
          <h2>Login realizado com sucesso!</h2>
          <p>Bem-vindo, {user.name}!</p>
          <p>Email: {user.email}</p>
          <p>Id: {user.id}</p>
          <button className="btn-login" onClick={() => setUser(null)}>
            Logout
          </button>
        </div>
      )}
    </div>
  );
}

export default Login;
