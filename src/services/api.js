import axios from 'axios';

const dominio = 'https://api.tccfatec.evshosting.net';

export const apiAvisos = axios.create({
  baseURL: dominio + ':80',
});

export const apiBd = axios.create({
  baseURL: dominio + ':81',
});

export const apiBdContatos = axios.create({
  baseURL: dominio + ':82',
});

export const apiContatos = axios.create({
  baseURL: dominio + ':83',
});

export const apiHistoricos = axios.create({
  baseURL: dominio + ':84',
});

export const apiMatriculas = axios.create({
  baseURL: dominio + ':85',
});

export const apiUser = axios.create({
  baseURL: dominio + ':86',
});

export const apiVagas = axios.create({
  baseURL: dominio + ':8007',
});

export default apiAvisos;
