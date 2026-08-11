'use client';

import { useState } from 'react';
import { useContadorDeTarefas } from '../../hooks/useContadorDeTarefas';
import styles from '../page.module.css';
import Title from './Title';
import NovaTarefa from './novatarefa';
import ListaDeTarefas from './ListaDeTarefas';
import type { Tarefa } from '../../types';
type Props = {
	tarefasIniciais: Tarefa[];
};

export default function TarefaClient({ tarefasIniciais }: Props) {
	const [tarefas, setTarefas] = useState<Tarefa[]>(tarefasIniciais);
	const tarefasConcluidas = useContadorDeTarefas(tarefas);

	const adicionarTarefa = (tarefa: Tarefa) => {
		setTarefas((tarefasAtuais) => [...tarefasAtuais, tarefa]);
	};

	const removerTarefa = (id: number) => {
		setTarefas((tarefasAtuais) => tarefasAtuais.filter((tarefa) => tarefa.id !== id));
	};

	const atualizarTarefa = (id: number, tarefaAtualizada: Tarefa) => {
		setTarefas((tarefasAtuais) =>
			tarefasAtuais.map((tarefa) => (tarefa.id === id ? tarefaAtualizada : tarefa)),
		);
	};

	return (
		<main className={styles.page}>
			<div className={styles.shell}>
				<header className={styles.hero}>
					<Title />
					<p className={styles.subtitle}>
						Organize suas tarefas em um painel com visual mais limpo, contraste melhor e foco nas ações.
					</p>
				</header>
				<div className={styles.content}>
					<NovaTarefa adicionarTarefa={adicionarTarefa} />
					<p>Tarefas concluídas: {tarefasConcluidas}</p>
					<ListaDeTarefas
						tarefas={tarefas}
						removerTarefa={removerTarefa}
						atualizarTarefa={atualizarTarefa}
					/>
				</div>
			</div>
		</main>
	);
}
