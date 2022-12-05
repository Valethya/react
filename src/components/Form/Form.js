import { useContext, useState } from "react";
import { cartContext } from "../../context/cartContext";
import Button from "../Buttons/Button";
import Input from "./Input";

export default function Form(props) {
  const { data, onInputChange } = useContext(cartContext);

  function onSubmit(e) {
    if (data.name.length === 0) return;

    e.preventDefault();
    props.onSubmit(e, data);
  }

  return (
    <form onSubmit={onSubmit}>
      <h3>Ingresa tus datos porfavor</h3>
      <Input
        name="name"
        type="text"
        value={data.name}
        label="Nombre"
        htmlfor="name"
        onChange={onInputChange}
      ></Input>
      <Input
        name="email"
        type="email"
        value={data.email}
        label="Email"
        htmlfor="email"
        onChange={onInputChange}
      ></Input>

      <Input
        name="phone"
        type="phone"
        value={data.phone}
        label="Telefono"
        htmlfor="phone"
        onChange={onInputChange}
      ></Input>
      <Button
        oneTouchButton={(e) => onSubmit(e, data)}
        data={data}
        type="submit"
      >
        Finalizar compra
      </Button>
    </form>
  );
}
