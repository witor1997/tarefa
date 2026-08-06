'use client';
import styles from './listaDeTarefas.module.css';
type Tarefa    = {
  id: number;
  titulo: string;
  descricao: string;
  concluida: boolean;
};


type Props = {
  tarefas: Tarefa[];
  removerTarefa: (id: number) => void;
  atualizarTarefa: (id: number, tarefa: Tarefa) => void;
};


export default function ListaDeTarefas({ tarefas, removerTarefa, atualizarTarefa }: Props) {
  return (
    <div className={styles.listaDeTarefasContainer}>
        <h2 className={styles.h2}>Lista de Tarefas</h2>
        <ul>
          {tarefas.map((tarefa) => (
            <li key={tarefa.id}>
               <strong>{tarefa.titulo}</strong>: {tarefa.descricao}
               {tarefa.concluida ? " (Concluída)" : ""}
              <button className={styles.botaoRemover} onClick={() => removerTarefa(tarefa.id)}>Remover</button>
              <button className={styles.botaoAtualizar} onClick={() => atualizarTarefa(tarefa.id, tarefa)}>Atualizar</button>
            </li>
          ))}
        </ul>
      </div>
  );
}       