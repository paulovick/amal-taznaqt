
export const login = (username) => {
  localStorage.setItem('user', username)
}

export const logout = () => {
  localStorage.removeItem('user')
}

export const isLogged = () => {
  return localStorage.getItem('user') !== undefined && localStorage.getItem('user') !== null
}
