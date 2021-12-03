import axios from 'axios';

const getToken = () => {
  return `Bearer ${localStorage.getItem('token')}`;
};

// const executeRequest = async (options, resCallback, errCallback) => {
//   await axios.request(options).then(resCallback).catch(errCallback);
// };

// CRUD ARTICULOS

export const crearArticulo = async (data,  successCallback, errorCallback) => {
  const options = {
    method: 'POST',
    url: 'http://localhost:5000/articulos/',
    headers: { 'Content-Type': 'application/json', Authorization: getToken()  },
    data,
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const obtenerArticulos = async (successCallback, errorCallback) => {
  const options = {
    method: 'GET',
    url: 'http://localhost:5000/articulos/',
    headers: {
      Authorization: getToken(),
    },
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const editarArticulo = async (id, data, successCallback, errorCallback) => {
  const options = {
    method: 'PATCH',
    url: `http://localhost:5000/articulos/${id}/`,
    headers: { 'Content-Type': 'application/json', Authorization: getToken()  },
    data,
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const eliminarArticulo = async (id, successCallback, errorCallback) => {
  const options = {
    method: 'DELETE',
    url: `http://localhost:5000/articulos/${id}/`,
    headers: { 'Content-Type': 'application/json' },
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

//CRUD USUARIOS

export const obtenerUsuarios = async (successCallback, errorCallback) => {
  const options = {
    method: 'GET',
    url: 'http://localhost:5000/usuarios',
    headers: {
      Authorization: getToken(),
    },
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const obtenerDatosUsuario = async (successCallback, errorCallback) => {
  const options = {
    method: 'GET',
    url: 'http://localhost:5000/usuarios/self',
    headers: {
      Authorization: getToken(), // 3. enviarle el token a backend
    },
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const editarUsuario = async (id, data, successCallback, errorCallback) => {
  const options = {
    method: 'PATCH',
    url: `http://localhost:5000/usuarios/${id}/`,
    headers: { 'Content-Type': 'application/json', Authorization: getToken() },
    data,
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};


// CRUD VENTAS

export const crearVenta = async (data, successCallback, errorCallback) => {
  const options = {
    method: 'POST',
    url: 'http://localhost:5000/ventas',
    headers: { 'Content-Type': 'application/json', Authorization: getToken() },
    data,
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};