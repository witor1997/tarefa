// @vitest-environment jsdom
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import TarefaClient from '../app/component/tarefaclient';
import { tarefa as tarefasIniciais } from '../app/data/tarefa';

describe('TarefaClient', () => {
  afterEach(() => {
    cleanup();
  });

  it('deve editar o título e marcar a tarefa como concluída', () => {
    render(<TarefaClient tarefasIniciais={tarefasIniciais} />);

    fireEvent.click(screen.getAllByRole('button', { name: 'Atualizar' })[0]);

    const inputTitulo = screen.getByLabelText('Título da tarefa') as HTMLInputElement;
    fireEvent.change(inputTitulo, { target: { value: 'Estudar React atualizado' } });

    const inputConcluida = screen.getAllByLabelText('Concluída')[1] as HTMLInputElement;
    fireEvent.click(inputConcluida);
    fireEvent.click(screen.getByRole('button', { name: 'Salvar' }));

    expect(screen.getByText('Estudar React atualizado')).toBeTruthy();
    expect(screen.getAllByText(/Concluída/).length).toBeGreaterThan(0);
  });
});
