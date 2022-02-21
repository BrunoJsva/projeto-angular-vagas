import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vaga } from './models/Vagas.models';

@Injectable({
  providedIn: 'root'
})
export class VagasService {

  private url = "http://localhost:3000/vagas";

  constructor(private httpClient: HttpClient) { }

  getVagas(): Observable<Vaga[]>{
    return this.httpClient.get<Vaga[]>(this.url);
  }

  cadastrarVaga(vaga: Vaga):Observable<Vaga[]>{
    return this.httpClient.post<Vaga[]>(this.url,vaga);
  }

  atualizarVaga(id:any ,vaga: Vaga):Observable<Vaga[]>{
    const urlAtualizar = `${this.url}/${id}`;
    return this.httpClient.put<Vaga[]>(urlAtualizar,vaga);
  } 

  removerVaga(id:any):Observable<Vaga[]>{
    const urlDeletar = `${this.url}/${id}`;
    return this.httpClient.delete<Vaga[]>(urlDeletar);
  }
}
