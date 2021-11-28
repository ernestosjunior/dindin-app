export function validateForm(email, password, setError) {
  if (!email && !password) {
    setError("email", "O campo é obrigatório.");
    setError("password", "O campo é obrigatório.");
    return;
  }
  if (!email) return setError("email", "O campo é obrigatório.");
  if (!password) return setError("password", "O campo é obrigatório.");

  setError("email", "");
  setError("password", "");
  return true;
}
