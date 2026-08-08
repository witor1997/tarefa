'use client';
import { useState } from 'react';
import styles from './listaDeTarefas.module.css';
import type { Tarefa } from '../../types';

type Props = {
  tarefas: Tarefa[];
  removerTarefa: (id: number) => void;
  atualizarTarefa: (id: number, tarefa: Tarefa) => void;
};

export default function ListaDeTarefas({ tarefas, removerTarefa, atualizarTarefa }: Props) {
  const [editandoId, setEditandoId] = useState<number | null>(null);
  const [formulario, setFormulario] = useState<Tarefa | null>(null);

  const iniciarEdicao = (tarefa: Tarefa) => {
    setEditandoId(tarefa.id);
    setFormulario({ ...tarefa });
  };

  const cancelarEdicao = () => {
    setEditandoId(null);
    setFormulario(null);
  };

  const salvarEdicao = () => {
    if (!formulario) return;

    atualizarTarefa(formulario.id, formulario);
    cancelarEdicao();
  };

  const alterarCampo = <K extends keyof Tarefa>(campo: K, valor: Tarefa[K]) => {
    if (!formulario) return;

    setFormulario((estadoAtual) => (estadoAtual ? { ...estadoAtual, [campo]: valor } : estadoAtual));
  };

  return (
    <div className={styles.listaDeTarefasContainer}>
      <h2 className={styles.h2}>Lista de Tarefas</h2>
      <ul>
        {(tarefas ?? []).map((tarefa) => {
          if (!tarefa) return null;

          const editando = editandoId === tarefa.id;

          return (
            <li key={tarefa.id}>
              {editando && formulario ? (
                <div className={styles.formularioEdicao}>
                  <label className={styles.labelCampo}>
                    Título da tarefa
                    <input
                      className={styles.inputCampo}
                      value={formulario.titulo}
                      onChange={(event) => alterarCampo('titulo', event.target.value)}
                    />
                  </label>
                  <label className={styles.labelCampo}>
                    Descrição
                    <textarea
                      className={styles.inputCampo}
                      value={formulario.descricao}
                      onChange={(event) => alterarCampo('descricao', event.target.value)}
                    />
                  </label>
                <label className={styles.checkboxLinha}>
                    <input
                      type="checkbox"
                      checked={formulario.concluida}
                      onChange={(event) => alterarCampo('concluida', event.target.checked)}
                    />
                        <label className={styles.checkboxLinha}>
          
                        <label className={styles.checkboxLinha}>
                
                  </label>
                  </label>
                    Concluída
                  </label>
                  <div className={styles.botoesEdicao}>
                    <button className={styles.botaoAtualizar} onClick={salvarEdicao}>Salvar</button>
                    <button className={styles.botaoRemover} onClick={cancelarEdicao}>Cancelar</button>
                  </div>
                </div>
              ) : ( <div className={styles.itemTarefa}>
                  <strong>{tarefa.titulo}</strong>
                  <p>{tarefa.descricao}</p>
                  {tarefa.concluida ? <span className={styles.statusConcluida}>concluída</span> : null}
                  <div className={styles.botoesTarefa}>
                    <button className={styles.botaoRemover} onClick={() => removerTarefa(tarefa.id)}>
                      Remover
                    </button>
                    <button className={styles.botaoAtualizar} onClick={() => iniciarEdicao(tarefa)}>
                      Atualizar
                    </button>
                  </div>
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
