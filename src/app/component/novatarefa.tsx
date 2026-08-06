'use client';

import styles from './novatarefa.module.css';

import { useState } from 'react';
import type { Tarefa } from '../../types';

type Props = {
    adicionarTarefa: (tarefa: Tarefa) => void;
};

export default function NovaTarefa({ adicionarTarefa }: Props) {
    const [titulo, setTitulo] = useState('');
    const [descricao, setDescricao] = useState('');
    const [concluida, setConcluida] = useState(false);
    const formularioValido = titulo.trim().length > 0 && descricao.trim().length > 0;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!formularioValido) {
            return;
        }

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

    return (
        <div className={styles.novaTarefaContainer}>
            <h2 className={styles.h2}>Nova Tarefa</h2>
            <form onSubmit={handleSubmit}>
                <input className={styles.tituloInput}
                    type="text"
                    placeholder="Título"
                    value={titulo}
                    required
                    onChange={(e) => setTitulo(e.target.value)}
                />
                <input className={styles.descricaoInput}
                    type="text"
                    placeholder="Descrição"
                    value={descricao}
                    required
                    onChange={(e) => setDescricao(e.target.value)}
                />
                <label>
                    <input className={styles.checkboxInput}
                        type="checkbox"
                        checked={concluida}
                        onChange={(e) => setConcluida(e.target.checked)}
                    />
                    Concluída
                </label>
                <button className={styles.botaoAdicionar} type="submit" disabled={!formularioValido}>
                    Adicionar
                </button>
            </form>
        </div>
    );
}