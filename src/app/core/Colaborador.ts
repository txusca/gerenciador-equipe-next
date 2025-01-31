export class Colaborador {
  id: number;
  nome: string;
  cargo: string;
  imagem: string;
  time: string;

  constructor(
    id: number,
    nome: string,
    cargo: string,
    imagem: string,
    time: string
  ) {
    this.id = id;
    this.nome = nome;
    this.cargo = cargo;
    this.imagem = imagem;
    this.time = time;
  }
}
