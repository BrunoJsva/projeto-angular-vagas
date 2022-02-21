import { Component, OnInit } from '@angular/core';
import { Vaga } from '../models/Vagas.models';
import { VagasService } from '../vagas.service';

@Component({
  selector: 'app-painel-vagas',
  templateUrl: './painel-vagas.component.html',
  styleUrls: ['./painel-vagas.component.css']
})
export class PainelVagasComponent implements OnInit {

  public vaga: Vaga = new Vaga(0,"","","",0);
  public vagas: Vaga [] = [];

  constructor(private vagasService: VagasService) { }

  ngOnInit(): void {
    this.listarVagas();
  } 

   cadastrar(){
    this.vagasService.cadastrarVaga(this.vaga).subscribe(
      vaga => {this.vaga = new Vaga(0,"","","",0)},
      err => {console.log("erro ao cadastrar")}
    );

    window.location.href = "/mural";

  }

  atualizar(id: number){
    this.vagasService.atualizarVaga(id,this.vaga).subscribe(
      vaga => {this.vaga = new Vaga(0,"","","",0)},
      err => {console.log("erro ao atualizar")}
    );

    window.location.href = "/mural";

  }

  excluir(id: number){
    this.vagasService.removerVaga(id).subscribe(
      vaga => {this.vaga = new Vaga(0,"","","",0)},
      err => {console.log("erro ao Excluir")}
    );

    window.location.href = "/mural";

  }

  listarVagas(){
    this.vagasService.getVagas()
    .subscribe(
      retornaVaga => {
        this.vagas = retornaVaga.map(
          item => {
            return new Vaga(
              item.id,
              item.nome,
              item.foto,
              item.descricao,
              item.salario
            );
          }
        )
      }
    )
  }
}