import { describe, it, expect } from 'vitest';
import { renderHook } from '@testing-library/react';
import { useContadorDeTarefas } from '../hooks/useContadorDeTarefas';

type Tarefa = {
    id: number;
    titulo: string;
    descricao: string;
    concluida: boolean;
};

const tarefasMock: Tarefa[] = [
    { id: 1, titulo: 'Tarefa 1', descricao: 'Descrição 1', concluida: true },
    { id: 2, titulo: 'Tarefa 2', descricao: 'Descrição 2', concluida: false },
    { id: 3, titulo: 'Tarefa 3', descricao: 'Descrição 3', concluida: true },
];

describe('useContadorDeTarefas', () => {
    it('deve retornar o número correto de tarefas concluídas', () => {
        const { result } = renderHook(({ tarefas }) => useContadorDeTarefas(tarefas), {
            initialProps: { tarefas: tarefasMock },
        });

        expect(result.current).toBe(2);
    });

    it('deve atualizar o contador quando as tarefas mudarem', () => {
        const novasTarefas: Tarefa[] = [
            { id: 1, titulo: 'Tarefa 1', descricao: 'Descrição 1', concluida: true },
        ];
        const { result, rerender } = renderHook(({ tarefas }) => useContadorDeTarefas(tarefas), {
            initialProps: { tarefas: tarefasMock },
        });

        rerender({ tarefas: novasTarefas });

        expect(result.current).toBe(1);
    });

    it('deve retornar zero quando não houver tarefas concluídas', () => {
        const tarefasSemConclusao: Tarefa[] = [
            { id: 1, titulo: 'Tarefa 1', descricao: 'Descrição 1', concluida: false },
            { id: 2, titulo: 'Tarefa 2', descricao: 'Descrição 2', concluida: false },
        ];

        const { result } = renderHook(({ tarefas }) => useContadorDeTarefas(tarefas), {
            initialProps: { tarefas: tarefasSemConclusao },
        });

        expect(result.current).toBe(0);
    });
});
