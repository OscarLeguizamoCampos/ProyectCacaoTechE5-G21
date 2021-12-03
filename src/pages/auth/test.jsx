import React, { useEffect, useState, useRef } from 'react';
import { nanoid } from 'nanoid';
import { obtenerUsuarios } from 'utils/api';
import { obtenerArticulos } from 'utils/api';
import { crearVenta } from 'utils/api';

const Test = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [articulos, setArticulos] = useState([]);
  const form = useRef(null);

  useEffect(() => {
    obtenerArticulos(setArticulos);
    obtenerUsuarios((res) => {
      setUsuarios(res.data);
    });
  }, []);

  useEffect(() => {
    console.log(articulos);
  }, [articulos]);

  useEffect(() => {
    console.log(usuarios);
  }, [usuarios]);

  const submitForm = async (e) => {
    e.preventDefault();
    const fd = new FormData(form.current);

    const nuevaVenta = {};
    fd.forEach((value, key) => {
      nuevaVenta[key] = value;
    });

    const informacionConsolidada = {
      valor: nuevaVenta.cantidadVenta,
      articulo: articulos.filter((el) => el._id === nuevaVenta.articulo)[0],
      vendedor: usuarios.filter((el) => el._id === nuevaVenta.vendedor)[0],
    };
    console.log(informacionConsolidada);
    crearVenta(
      informacionConsolidada,
      (response) => {
        setArticulos(response.data);
      },
      (error) => {
        console.log(error);
      }
    );
  };

  return (
    <div>
      Crear nueva venta
      <form ref={form} onSubmit={submitForm} className='flex flex-col'>
        <label>
          Seleccionar Articulo
          <select name='vendedor'>
            {usuarios.map((u) => {
              return (
                <option key={nanoid()} value={u._id}>
                  {u.email}
                </option>
              );
            })}
          </select>
        </label>
        <label>
          Seleccionar articulo
          <select name='articulo'>
            {articulos.map((v) => {
              return (
                <option value={v._id} key={nanoid()}>
                  {v.name}
                </option>
              );
            })}
          </select>
        </label>
        <input type='number' name='cantidadVenta' />
        <button type='submit'>Enviar venta</button>
      </form>
    </div>
  );
};

export default Test;
