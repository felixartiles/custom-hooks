import { useEffect,useState } from "react";

export const useFetch = (url) => {
  const [state, setstate] = useState({
    data: null,
    isLoading: true,
    hasError: false,
  });
  const getFetch = async () => {
    // esperando por la data
    setstate({
      ...state,
      isLoading: true,
    });

    const resp = await fetch(url);
    const data = await resp.json();

    //cargando data de la respuesta
    setstate({
      data,
      isLoading: false,
      hasError: null,
    });
    
    console.log(state);
  };

  useEffect(() => {
    getFetch();
  }, [url]);

  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError,
  };
};
