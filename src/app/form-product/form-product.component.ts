import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Product } from '../product';
import { HttpClient } from '@angular/common/http';
import { ProductService } from '../product.service';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.sass']
})

export class FormProductComponent implements OnInit {

  contactForm: FormGroup;
  selectedFile: File;
  picture: string;

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private productService: ProductService) {
    this.contactForm = this.createFormGroupWithBuilderAndModel(formBuilder);
  }

  ngOnInit() {
  }

  onFileChanged(event) {

    // const uploadData = new FormData();
    // uploadData.append('myFile', this.selectedFile, this.contactForm.value.name);
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      this.selectedFile = event.target.files[0];

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = () => {
        this.picture = event.target.result;
      };
    }
  }


  createFormGroupWithBuilderAndModel(formBuilder: FormBuilder) {
    return formBuilder.group({
      product: formBuilder.group(new Product()),
    });
  }

  onSubmit() {
    const result: Product = Object.assign({}, this.contactForm.value);
    result.picture = this.picture;
    this.productService.addProduct(result);
  }

  revert() {
    // Resets to blank object
    this.contactForm.reset();

    // Resets to provided model
    this.contactForm.reset({product: new Product()});
  }

}
