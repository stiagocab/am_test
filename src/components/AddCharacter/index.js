import PropTypes from "prop-types";
import React, { useState } from "react";

import Modal from "../Modal";
import Input, { Radio } from "../Input";
import Close from "../../assets/close.png";

// styles
import styles from "./add.module.scss";
import { API_URL } from "../../constants";

export default function AddCharacter({ isOpen, close }) {
  const onSubmit = (e) => {
    e.preventDefault();

    const { name, birth, eyes, hair, gender, position } = e.target.elements;

    const newCharacter = {
      name: name.value,
      dateOfBirth: birth.value,
      eyeColour: eyes.value,
      hairColour: hair.value,
      gender: gender.value,
      hogwartsStudent: position.value === "student",
      hogwartsStaff: position.value === "staff",
    };

    handleSendata(newCharacter);

    e.target.reset();
    close();
  };

  const handleSendata = (info) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    var urlencoded = new URLSearchParams();

    Object.keys(info).map((k) => {
      urlencoded.append(k, info[k]);
    });

    fetch(`${API_URL}/characters`, {
      method: "POST",
      headers: myHeaders,
      body: urlencoded,
    });

  };

  return (
    <Modal isOpen={isOpen} title="Agrega un personaje">
      <div className={styles.addForm}>
        <div className={styles.head}>
          <p>Agrega un personaje</p>

          <button onClick={close}>
            <img src={Close} />
          </button>
        </div>

        <form onSubmit={onSubmit} className={styles.form}>
          <div className={styles.element}>
            <Input required label="Nombre" name="name" />
          </div>
          <div className={styles.element}>
            <Input required label="Cumpleaños" type="date" name="birth" />
          </div>
          <div className={styles.element}>
            <Input required label="Color de ojos" name="eyes" />
          </div>
          <div className={styles.element}>
            <Input required label="Color de pelo" name="hair" />
          </div>

          <div className={styles.element}>
            <label>Género</label>
            <div className={styles.radioContainer}>
              <div className={styles.radioItem}>
                <Radio required label="Mujer" name="gender" value="female" />
              </div>
              <div className={styles.radioItem}>
                <Radio required label="Hombre" name="gender" value="male" />
              </div>
            </div>
          </div>

          <div className={styles.element}>
            <label>Posición</label>
            <div className={styles.radioContainer}>
              <div className={styles.radioItem}>
                <Radio label="Estudiante" name="position" value="student" />
              </div>
              <div className={styles.radioItem}>
                <Radio label="Staff" name="position" value="staff" />
              </div>
            </div>
          </div>
          <div className={styles.buttonContainer}>
            <button className={styles.button}>GUARDAR</button>
          </div>
        </form>
      </div>
    </Modal>
  );
}

AddCharacter.propTypes = {
  close: PropTypes.func,
  isOpen: PropTypes.bool,
};
