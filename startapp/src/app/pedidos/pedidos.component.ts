import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.scss']
})
export class PedidosComponent implements OnInit {

  filtroPedidos;

  pedidos = [
    {
      pedido_id:12312,
      descricao:"samsonite",
      malas:[1234,67578,666]
    },
    {
      pedido_id:43234,
      descricao:"samtulio",
      malas:[12354374,68897578,6606]
    },
    {
      pedido_id:234,
      descricao:"snite",
      malas:[34,6778,6667487]
    },
    {
      pedido_id:322,
      descricao:"amsonityie",
      malas:[12,675436,66656]
    },
    {
      pedido_id:3534,
      descricao:"rola",
      malas:[123344,67578890,6661]
    },
    {
      pedido_id:44,
      descricao:"tetinha",
      malas:[120834,675078,1666]
    }
  ]
  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {

    this.filtraPedido();
    
  }
  
  filtraPedido() {
    const id = +this.route.snapshot.paramMap.get('pedido_id');    
    this.filtroPedidos = this.pedidos.filter(t=>t.pedido_id == id);
  }
}
