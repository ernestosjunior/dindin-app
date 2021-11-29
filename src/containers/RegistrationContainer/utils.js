export function validateForm(firstName, email, password, setError) {
  if (!email && !password && !firstName) {
    setError("firstName", "O campo é obrigatório.");
    setError("email", "O campo é obrigatório.");
    setError("password", "O campo é obrigatório.");
    return;
  }
  if (!firstName) return setError("firstName", "O campo é obrigatório.");
  if (!email) return setError("email", "O campo é obrigatório.");
  if (!password) return setError("password", "O campo é obrigatório.");
  if (!email.includes("@")) {
    return setError("email", "Insira um email válido. email@email.com");
  }

  setError("firstName", "");
  setError("email", "");
  setError("password", "");
  return true;
}
