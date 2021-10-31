import { Component, OnInit } from '@angular/core';
import { APIService } from '../../services/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  products: any = []
  activeProduct: any = {}
  names = []
  constructor(
    private apiService: APIService
  ) { }

  ngOnInit(): void {
    this.getProductsData()
  }
  getProductsData() {
    this.apiService.GetProductData()
    .subscribe((response: any)=> {
      this.activeProduct = response[0]
      this.names = response.map((product: any) => product.title)
      response.forEach((product: any, index: number) => {
        if(index < 4) {
          this.products.push(product)
        }
      })
    }, err => console.log(err))
  }
}
