import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {

  clientes = [
    {
      nome:"felipe",
      telefone:"22563754",
      endereco:"rua siqueira campos",
      pedidos: [12312,12312,43234,234,53253]
    },
    {
      nome:"Mickey",
      telefone:"44552223",
      endereco:"rua Aires Saldanha",
      pedidos: [322,3534,1125,43243,5677]
    },
    {
      nome:"Russel",
      telefone:"23332141",
      endereco:"rua Leopoldo miguez",
      pedidos: [11,22,33,44,55]
    }
  ]

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
  }

}
