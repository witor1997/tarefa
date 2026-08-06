import TarefaClient from './component/tarefaclient';
import { tarefa as tarefasIniciais } from './data/tarefa';

export default function Home() {
  return <TarefaClient tarefasIniciais={tarefasIniciais} />;
}