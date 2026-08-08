 # Lista de Tarefas

Projeto em Next.js para gerenciamento de tarefas com foco em simplicidade, organização e um visual mais moderno.

## O que o app faz

- Exibe uma lista inicial de tarefas.
- Permite adicionar novas tarefas com título, descrição e status de conclusão.
- Permite remover tarefas.
- Permite marcar e desmarcar tarefas como concluídas.
- Usa um hook separado para contar quantas tarefas estão concluídas.

## Estrutura principal

- `src/app/page.tsx`: página inicial.
- `src/app/component/tarefaclient.tsx`: estado principal da lista e integração entre componentes.
- `src/app/component/novatarefa.tsx`: formulário de criação de tarefas.
- `src/app/component/ListaDeTarefas.tsx`: renderização da lista.
- `src/hooks/useContadorDeTarefas.ts`: hook que calcula o total de tarefas concluídas.
- `src/app/data/tarefa.ts`: dados iniciais exibidos na página.

## Como executar

Dentro da pasta do projeto, rode:

```bash
npm install
npm run dev
```

Depois abra:

```text
http://localhost:3000
```

## Como testar

```bash
npm test
```

## Descrição do visual

A interface foi organizada com um layout centralizado em formato de painel, com fundo em gradiente, cartões com bordas suaves e estilos mais contrastantes para melhorar a leitura e a navegação.

## Tecnologias usadas

- Next.js
- React
- TypeScript
- Vitest
- React Testing Library
