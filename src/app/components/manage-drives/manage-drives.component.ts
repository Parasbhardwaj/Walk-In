import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ApiServiceService } from '../../services/api-service.service';
import { Drive } from '../../models/drive';
import { DatePipe } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-drives',
  standalone: true,
  imports: [DatePipe,MatDividerModule,MatIconModule,MatTooltipModule, MatTableModule, MatPaginatorModule,MatInputModule,MatFormFieldModule],
  templateUrl: './manage-drives.component.html',
  styleUrl: './manage-drives.component.scss'
})
export class ManageDrivesComponent implements OnInit {
  displayedColumns: string[] = ['driveid', 'date', 'time', 'address'];
  dataSource = new MatTableDataSource<Drive>();

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private rest: ApiServiceService, private router:Router) { }

  ngOnInit(): void {
    const getAllDrivesUrl = "/drive/getall"
    this.rest.get(getAllDrivesUrl).subscribe((res:any)=>{
      console.log(res);
      this.dataSource = res.data
      // this.dataSource.paginator = this.paginator;
    },(err)=>{
      console.log(err);
      
    })
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  createDrive(){
    console.log("drive create start");
    this.router.navigate(['/create-drive'])
    // this.router.navigate(['/dashboard']);
  }

  viewDrive(){
    console.log("drive id clicked");
    
  }
}

