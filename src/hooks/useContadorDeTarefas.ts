type Tarefa = {
    id: number;
    titulo: string;
    descricao: string;
    concluida: boolean;
};

export function useContadorDeTarefas(tarefas: Tarefa[]) {
    return tarefas.reduce((acc, tarefa) => {
        return tarefa.concluida ? acc + 1 : acc;
    }, 0);
}