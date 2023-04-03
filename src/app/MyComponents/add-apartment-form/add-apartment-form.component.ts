import { Component } from '@angular/core';
// import { AddApartmentDataArrayShareService } from 'src/app/add-apartment-data-array-share.service';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-apartment-form',
  templateUrl: './add-apartment-form.component.html',
  styleUrls: ['./add-apartment-form.component.scss']
})
export class AddApartmentFormComponent {
  // ngModel names
  apartmentName: string = '';
  totalFloors!: number;
  totalFlats!: number;

  // constructor(private sharedService: AddApartmentDataArrayShareService) { }
  constructor(private http: HttpClient) { }

  submitApartmentData(addApartmentForm: NgForm) {
    const apartmentDataObj = {
      apartmentName: this.apartmentName,
      totalFloors: this.totalFloors,
      totalFlats: this.totalFlats
    };
    // this.sharedService.submittedData.push(apartmentDataObj);
    this.http.post('http://localhost:3000/apartments', apartmentDataObj)
      .subscribe(() => {
        alert('Apartment data added successfully');
      });
// Reset form
    addApartmentForm.resetForm();
    this.apartmentName = '';
    this.totalFloors = 0;
    this.totalFlats = 0;
  }
}
