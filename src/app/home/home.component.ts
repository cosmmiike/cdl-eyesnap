import {Component, OnInit} from '@angular/core';
import {PRODUCTS} from '../mock-products';
import {ModalService} from '../modal.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  products = PRODUCTS;

  constructor(private modalService: ModalService) {
  }

  ngOnInit() {
  }

  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }
}
