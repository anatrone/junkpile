import { useState } from 'react';

function useForm(valoresIniciais) {
  const [values, setValues] = useState(valoresIniciais);

  function setValue(key, value) {
    // key: nome, descricao ...
    setValues({
      ...values,
      [key]: value, // key: 'value'
    });
  }

  function handleChange(event) {
    setValue(
      event.target.getAttribute('name'), // nome campo
      event.target.value, // valor digitado no input
    );
  }

  function clearForm() {
    setValues(valoresIniciais);
  }

  return {
    values,
    handleChange,
    clearForm,
  };
}

export default useForm;
