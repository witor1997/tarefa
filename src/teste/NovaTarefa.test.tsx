import  {   render, screen, fireEvent } from '@testing-library/react';
import NovaTarefa from '../app/component/novatarefa';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';

describe('NovaTarefa', () => {
    const adicionarTarefa = vi.fn();
 
    beforeEach(() => { 
    adicionarTarefa.mockClear();
    
    });

    afterEach(() => {
        vi.restoreAllMocks();
    });
it('deve renderizar o  botao do fomulario', () => {
 render(<NovaTarefa adicionarTarefa={adicionarTarefa} />);

expect(screen.getByText('Nova Tarefa')).toBeTruthy();

expect(screen.getByPlaceholderText('Título')).toBeTruthy();

expect(screen.getByPlaceholderText('Descrição')).toBeTruthy();

expect(screen.getByLabelText('Concluída')).toBeTruthy();

expect(screen.getByRole('button', { name: /adicionar/i })).toBeTruthy();
});

  it('deve manter o botão desabilitado e não submeter com input inválido', () => {
    
        render(<NovaTarefa adicionarTarefa={adicionarTarefa} />);

        const botaoAdicionar = screen.getByRole('button', { name: 'Adicionar' });

        expect((botaoAdicionar as HTMLButtonElement).disabled).toBe(true);

        fireEvent.click(botaoAdicionar);

        expect(adicionarTarefa).not.toHaveBeenCalled();
    });

    it('deve habilitar botão e submeter tarefa válida limpando formulário', () => {
        vi.spyOn(Date, 'now').mockReturnValue(123456);

        render(<NovaTarefa adicionarTarefa={adicionarTarefa} />);

        const inputTitulo = screen.getByPlaceholderText('Título') as HTMLInputElement;
        const inputDescricao = screen.getByPlaceholderText('Descrição') as HTMLInputElement;
        const inputConcluida = screen.getByLabelText('Concluída') as HTMLInputElement;
        const botaoAdicionar = screen.getByRole('button', { name: 'Adicionar' });

        fireEvent.change(inputTitulo, { target: { value: 'Estudar testes' } });
        fireEvent.change(inputDescricao, { target: { value: 'Cobrir os componentes com RTL' } });
        fireEvent.click(inputConcluida);

        expect((botaoAdicionar as HTMLButtonElement).disabled).toBe(false);

        fireEvent.click(botaoAdicionar);

        expect(adicionarTarefa).toHaveBeenCalledTimes(1);
        expect(adicionarTarefa).toHaveBeenCalledWith({
            id: 123456,
            titulo: 'Estudar testes',
            descricao: 'Cobrir os componentes com RTL',
            concluida: true,
        });

        expect(inputTitulo.value).toBe('');
        expect(inputDescricao.value).toBe('');
        expect(inputConcluida.checked).toBe(false);
    });
});
