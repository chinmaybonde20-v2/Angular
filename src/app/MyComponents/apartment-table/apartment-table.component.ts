import { Component, OnInit } from '@angular/core';
// import { AddApartmentDataArrayShareService } from 'src/app/add-apartment-data-array-share.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-apartment-table',
  templateUrl: './apartment-table.component.html',
  styleUrls: ['./apartment-table.component.scss']
})
export class ApartmentTableComponent implements OnInit {
  columns = [
    'Apartment Name',
    'Total Floors',
    'Total Flats',
    'Action'
  ];
  
  // submittedData: any[] = [];
  apartments: any[] = [];

  // constructor(private sharedService: AddApartmentDataArrayShareService) { }
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // this.submittedData = this.sharedService.submittedData;
    this.http.get<any[]>('http://localhost:3000/apartments')
      .subscribe(data => {
        this.apartments = data;
      });
  }

}
