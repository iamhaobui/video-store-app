import { Component, OnInit } from '@angular/core';
import { CUSTOMERS, CUSTOMER_HEADERS } from '../customers';
import { CustomerService} from '../services/customer.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  customer_headers = CUSTOMER_HEADERS;
  constructor(private customerService: CustomerService) { }

  customers: Object[] = [];
  ngOnInit() {
    this.customerService.loadCustomers().subscribe(data => {
      console.log(data);  
      for (let key in data) {
        this.customers.push(data[key]);
      }
    })
  }

}
