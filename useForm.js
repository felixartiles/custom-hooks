import { useState } from "react";

export const useForm = (formulario = {}) => {
  const [formstate, setFormstate] = useState(formulario);

  const onResetForm = () => {
    setFormstate(formulario)
  };
  
  const onInputChange = ({ target }) => {
    const { name, value } = target;

    setFormstate({
      ...formstate,
      [name]: value,
    });
  };

  return {
    ...formstate,
    formstate,
    onInputChange,
    onResetForm,
  };
};
