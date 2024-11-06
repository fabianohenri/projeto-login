
// Função para verificar se o usuário está logado
const ValidLogin = () => {
  if (!localStorage.getItem('logado')) {
    return false; // Retorna false se não estiver logado
  } else {
    return true; // Retorna true se estiver logado
  }
};

export default ValidLogin;
