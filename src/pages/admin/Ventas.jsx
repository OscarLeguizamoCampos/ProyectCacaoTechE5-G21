import { nanoid } from 'nanoid';
import React, { useState, useEffect, useRef } from 'react';
import { crearVenta } from 'utils/api';
import { obtenerArticulos } from 'utils/api';
import { obtenerUsuarios } from 'utils/api';

// const Ventas = () => {
//   const form = useRef(null);
//   const [vendedores, setVendedores] = useState([]);
//   const [vehiculos, setVehiculos] = useState([]);
//   const [vehiculosTabla, setVehiculosTabla] = useState([]);

//   useEffect(() => {
//     const fetchVendores = async () => {
//       await obtenerUsuarios(
//         (response) => {
//           console.log('respuesta de usuarios', response);
//           setVendedores(response.data);
//         },
//         (error) => {
//           console.error(error);
//         }
//       );
//     };
//     const fetchVehiculos = async () => {
//       await obtenerVehiculos(
//         (response) => {
//           setVehiculos(response.data);
//         },
//         (error) => {
//           console.error(error);
//         }
//       );
//     };

//     fetchVendores();
//     fetchVehiculos();
//   }, []);

//   const modifyVeh = (v, e) => {
//     const vehs = vehiculos.map((ve) => {
//       if (ve._id === v._id) {
//         ve.cantidad = e;
//       }
//       return ve;
//     });
//     setVehiculos(vehs);
//   };

//   useEffect(() => {
//     console.log('vehiculos', vehiculos);
//   }, [vehiculos]);

//   return (
//     <table>
//       {vehiculos.map((v, index) => {
//         return <Vehiculo key={index} v={v} index={index} modifyVeh={modifyVeh} />;
//       })}
//     </table>
//   );
// };

// const Vehiculo = ({ v, index, modifyVeh }) => {
//   const [vehi, setVehi] = useState(v);
//   useEffect(() => {
//     console.log('v', vehi);
//   }, [vehi]);
//   return (
//     <tr>
//       <td>{vehi.name}</td>
//       <td>
//         <input
//           name={`cantidad_${index}`}
//           value={vehi.cantidad}
//           onChange={(e) => {
//             modifyVeh(vehi, e.target.value);
//             setVehi({ ...vehi, cantidad: e.target.value });
//           }}
//         />
//       </td>
//     </tr>
//   );
// };

const Ventas = () => {
  const form = useRef(null);
  const [vendedores, setVendedores] = useState([]);
  const [articulos, setArticulos] = useState([]);
  const [articulosTabla, setArticulosTabla] = useState([]);

  useEffect(() => {
    const fetchVendores = async () => {
      await obtenerUsuarios(
        (response) => {
          setVendedores(response.data);
        },
        (error) => {
          console.error(error);
        }
      );
    };
    const fetchArticulos = async () => {
      await obtenerArticulos(
        (response) => {
          setArticulos(response.data);
        },
        (error) => {
          console.error(error);
        }
      );
    };

    fetchVendores();
    fetchArticulos();
  }, []);

  const submitForm = async (e) => {
    e.preventDefault();
    const fd = new FormData(form.current);

    const formData = {};
    fd.forEach((value, key) => {
      formData[key] = value;
    });

    console.log('form data', formData);

    const listaArticulos = Object.keys(formData)
      .map((k) => {
        if (k.includes('articulo')) {
          return articulosTabla.filter((v) => v._id === formData[k])[0];
        }
        return null;
      })
      .filter((v) => v);

    const datosVenta = {
      vendedor: vendedores.filter((v) => v._id === formData.vendedor)[0],
      cantidad: formData.valor,
      vehiculos: listaArticulos,
    };

    await crearVenta(
      datosVenta,
      (response) => {
        console.log(response);
      },
      (error) => {
        console.error(error);
      }
    );
  };

  return (
    <div className='flex h-full w-full items-center justify-center'>
      <form ref={form} onSubmit={submitForm} className='flex flex-col h-full'>
        <h1 className='text-3xl font-extrabold text-gray-900 my-3'>Crear una nueva venta</h1>
        <label className='flex flex-col' htmlFor='vendedor'>
          <span className='text-2xl font-gray-900'>Vendedor</span>
          <select name='vendedor' className='p-2' defaultValue='' required>
            <option disabled value=''>
              Seleccione un Vendedor
            </option>
            {vendedores.map((el) => {
              return <option key={nanoid()} value={el._id}>{`${el.email}`}</option>;
            })}
          </select>
        </label>

        <TablaArticulos
          articulos={articulos}
          setArticulos={setArticulos}
          setArticulosTabla={setArticulosTabla}
        />

        <label className='flex flex-col'>
          <span className='text-2xl font-gray-900'>Valor Total Venta</span>
          <input
            className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2'
            type='number'
            name='valor'
            required
          />
        </label>
        <button
          type='submit'
          className='col-span-2 bg-green-400 p-2 rounded-full shadow-md hover:bg-green-600 text-white'
        >
          Crear Venta
        </button>
      </form>
    </div>
  );
};

const TablaArticulos = ({ articulos, setArticulos, setArticulosTabla }) => {
  const [articuloAAgregar, setArticuloAAgregar] = useState({});
  const [filasTabla, setFilasTabla] = useState([]);

  useEffect(() => {
    setArticulosTabla(filasTabla);
  }, [filasTabla, setArticulosTabla]);

  const agregarNuevoArticulo = () => {
    setFilasTabla([...filasTabla, articuloAAgregar]);
    setArticulos(articulos.filter((v) => v._id !== articuloAAgregar._id));
    setArticuloAAgregar({});
  };

  const eliminarArticulo = (articuloAEliminar) => {
    setFilasTabla(filasTabla.filter((v) => v._id !== articuloAEliminar._id));
    setArticulos([...articulos, articuloAEliminar]);
  };

  const modificarArticulo = (articulo, cantidad) => {
    setFilasTabla(
      filasTabla.map((ft) => {
        if (ft._id === articulo.id) {
          ft.cantidad = cantidad;
          ft.total = articulo.valor * cantidad;
        }
        return ft;
      })
    );
  };

  return (
    <div>
      <div className='flex '>
        <label className='flex flex-col' htmlFor='articulo'>
          <select
            className='p-2'
            value={articuloAAgregar._id ?? ''}
            onChange={(e) =>
              setArticuloAAgregar(articulos.filter((v) => v._id === e.target.value)[0])
            }
          >
            <option disabled value=''>
              Seleccione un Articulo
            </option>
            {articulos.map((el) => {
              return (
                <option
                  key={nanoid()}
                  value={el._id}
                >{`${el.name} ${el.brand} ${el.model}`}</option>
              );
            })}
          </select>
        </label>
        <button
          type='button'
          onClick={() => agregarNuevoArticulo()}
          className='col-span-2 bg-green-400 p-2 rounded-full shadow-md hover:bg-green-600 text-white'
        >
          Agregar Artículo
        </button>
      </div>
      <table className='tabla'>
        <thead>
          <tr>
            <th>Id</th>
            <th>Nombre</th>
            <th>Marca</th>
            <th>Modelo</th>
            <th>Cantidad</th>
            <th>Valor Unitario</th>
            <th>Total</th>
            <th>Eliminar</th>
            <th className='hidden'>Input</th>
          </tr>
        </thead>
        <tbody>
          {filasTabla.map((el, index) => {
            return (
              <FilaArticulo
                key={el._id}
                art={el}
                index={index}
                eliminarArticulo={eliminarArticulo}
                modificarArticulo={modificarArticulo}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

const FilaArticulo = ({ art, index, eliminarArticulo, modificarArticulo }) => {
  const [articulo, setArticulo] = useState(art);
  useEffect(() => {
    console.log('art', articulo);
  }, [articulo]);
  return (
    <tr>
      <td>{articulo._id}</td>
      <td>{articulo.name}</td>
      <td>{articulo.brand}</td>
      <td>{articulo.model}</td>
      <td>
        <label htmlFor={`valor_${index}`}>
          <input
            type='number'
            name={`cantidad_${index}`}
            value={articulo.cantidad}
            onChange={(e) => {
              modificarArticulo(articulo, e.target.value === '' ? '0' : e.target.value);
              setArticulo({
                ...articulo,
                cantidad: e.target.value === '' ? '0' : e.target.value,
                total:
                  parseFloat(articulo.valor) *
                  parseFloat(e.target.value === '' ? '0' : e.target.value),
              });
            }}
          />
        </label>
      </td>
      <td>{articulo.valor}</td>
      <td>{parseFloat(articulo.total ?? 0)}</td>
      <td>
        <i
          onClick={() => eliminarArticulo(articulo)}
          className='fas fa-minus text-red-500 cursor-pointer'
        />
      </td>
      <td className='hidden'>
        <input hidden defaultValue={articulo._id} name={`articulo_${index}`} />
      </td>
    </tr>
  );
};

export default Ventas;
