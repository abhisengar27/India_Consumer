import { Component,OnInit,AfterViewInit } from '@angular/core';
import {PaginatePipe,  PaginationService} from 'ng2-pagination';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Observable,Subscription } from "rxjs";
import { Router } from "@angular/router";
import { OAOadminService} from "../../../services/OAOadmin.service";
import { ProductsTypeInterface} from "../../../interfaces/productType.interface";
declare var jQuery:any;
declare var moment: any;

@Component({
    templateUrl:'./productsTypedisplaycomponent.component.html',
    
})

export class productsDisplayComponent {
    private products_v: ProductsTypeInterface[];
    editprod = new ProductsTypeInterface('', '')
    isLoading: boolean = false;
    productTypes: ProductsTypeInterface[] = [];
    uxThemes: ProductsTypeInterface[]= [];
    addOns: ProductsTypeInterface[]= [];
    productTypeLength:number;
    constructor(private loginservice: OAOadminService, private router: Router) {

        new Promise((resolve, reject) => {
            this.loginservice.getProductTypeAll().subscribe(
                (products: any) => {
                    this.products_v = products;
                    this.productTypeLength=this.products_v.length;
                    console.log("Product types: ", this.products_v);
                    resolve("done");
                }

            )
             }).then((e)=>{
                 console.log(e);
                 console.log(this.products_v);
            for (var i = 0; i < (this.products_v).length; i++) {
            if (this.products_v[i].category == 'product') {
                this.productTypes.push(this.products_v[i]);
            }
            if (this.products_v[i].category == 'add-on') {
                this.addOns.push(this.products_v[i]);
            }
            if (this.products_v[i].category == 'ux-theme') {
                this.uxThemes.push(this.products_v[i]);
            }
        }
         });
            

//console.log("length: "+this.productTypes.length);
       



    }
    ngAfterViewInit() {
        jQuery("body").on("click", "#myImg", function () {
            console.log("clicked image");

            jQuery('.modal1').css("display", "block");

            jQuery("#img01").attr("src", this.src);

        });

        jQuery("body").on("click", ".close2", function () {

            jQuery('.modal1').css("display", "none");
        });
    }
    addProd(formRecord: ProductsTypeInterface) {
        this.isLoading = true
        this.loginservice.AddProduct(formRecord).subscribe(
            data => {
                console.log(data);
                this.loginservice.getProductAll().subscribe(
                    (products: any) => {
                        this.products_v = products;
                        console.log(this.products_v);
                        this.isLoading = false;
                        jQuery('#editProd_modal').modal('hide');
                    }
                )
            }
        )
    }
    fetchAppn(Prod_id: string) {
        console.log(Prod_id)
        this.loginservice.getProductDetails(Prod_id).subscribe(
            (editprod_v: ProductsTypeInterface) => {
                this.editprod = editprod_v[0];
                console.log(this.editprod);
                jQuery('#editProd_modal').modal('show');
            });
    }
}
