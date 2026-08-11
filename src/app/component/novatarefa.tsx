'use client';

import { useState } from 'react';
import styles from './novatarefa.module.css';
import type { Tarefa } from '../../types';

type Props = {
  adicionarTarefa: (tarefa: Tarefa) => void;
};

export default function NovaTarefa({ adicionarTarefa }: Props) {
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [concluida, setConcluida] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!titulo.trim()) return;

    adicionarTarefa({
      id: Date.now(),
      titulo: titulo.trim(),
      descricao: descricao.trim(),
      concluida,
    });

    setTitulo('');
    setDescricao('');
    setConcluida(false);
  };
  <label className={styles.checkboxLabel}>
        <input
          className={styles.checkbox}
          type="checkbox"
          checked={concluida}
          onChange={(event) => setConcluida(event.target.checked)}
        />
        Concluída
      </label>

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Nova Tarefa</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          className={styles.input}
          type="text"
          placeholder="Título"
          value={titulo}
          onChange={(event) => setTitulo(event.target.value)}
        />

        <textarea
          className={styles.input}
          placeholder="Descrição"
          value={descricao}
          onChange={(event) => setDescricao(event.target.value)}
        />

        

        <label>
          <input
            type="checkbox"
            checked={concluida}
            onChange={(event) => setConcluida(event.target.checked)}
          />
          Concluída
        </label>
        <button className={styles.button} type="submit" disabled={!titulo.trim()}>
          Adicionar
        </button>
      </form>
    </section>
  );
}
