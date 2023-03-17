import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter-product',
  templateUrl: './filter-product.component.html',
  styleUrls: ['./filter-product.component.css']
})
export class FilterProductComponent {

  @Output() textChanged = new EventEmitter<string>()
  submit(value: string) {
    this.textChanged.emit(value)
  }
}
