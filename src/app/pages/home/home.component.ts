import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  servicos = [
    {
      titulo: 'PRIMEIRO EMPLACAMENTO',
      descricao: 'Nosso serviço inclui a emissão do documento e a estampagem da placa.',
      icone: 'assets/primeiro-emplacamento.png'
    },
    {
      titulo: 'TRANSFERÊNCIA DE PROPRIEDADE',
      descricao: 'Oferecemos serviços de transferência de veículos registrados no mesmo município ou estado.',
      icone: 'assets/transferencia-propriedade.png'
    },
    {
      titulo: 'ALTERAÇÃO DAS CARACTERÍSTICAS DO VEÍCULO',
      descricao: 'Regularize modificações no veículo com suporte completo em todo o processo.',
      icone: 'assets/alteracoes-carcteristicas.png'
    },
    {
      titulo: 'TRANSFERÊNCIA DE ESTADO/MUNICÍPIO',
      descricao: 'Transferência de município, mesmo em outro estado, sem mudar o proprietário.',
      icone: 'assets/transferenciade-estado.png'
    },
    {
      titulo: 'LICENCIAMENTO',
      descricao: 'Licenciamento garante que o veículo está apto para circular.',
      icone: 'assets/licenciamento.png'
    },
    {
      titulo: 'CERTIFICADO ANTT',
      descricao: 'Documentação essencial para iniciar uma transportadora de cargas.',
      icone: 'assets/ANTT.png'
    },
    {
      titulo: '2ª VIA (Licenciamento)',
      descricao: 'Para documentos perdidos, roubados ou danificados.',
      icone: 'assets/2A-via-CRLV.png'
    },
    {
      titulo: '2ª VIA (Recibo de Venda)',
      descricao: 'Solicitação da 2ª via em casos de perda, furto ou má conservação.',
      icone: 'assets/2A-via-CRLV-VENDA.png'
    },
    {
      titulo: 'REGULARIZAÇÃO DO NÚMERO DO MOTOR',
      descricao: 'Atualização do número do motor nos registros oficiais.',
      icone: 'assets/NUMERO-MOTOR.png'
    },
    {
      titulo: 'APREENSÃO',
      descricao: 'Suporte completo em caso de apreensão do veículo.',
      icone: 'assets/alteracoes-carcteristicas (1).png'
    }
  ];
  
}
