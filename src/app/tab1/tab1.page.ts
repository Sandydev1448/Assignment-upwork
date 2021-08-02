/* eslint-disable @typescript-eslint/prefer-for-of */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit, ViewChild } from '@angular/core';
import { RestService,LoadingService,CommonService,StorageService } from 'src/app/_services';
import { first } from 'rxjs/operators';
import { IonInfiniteScroll } from '@ionic/angular';
import { ActivatedRoute ,NavigationExtras,Router} from '@angular/router';
import { Location } from '@angular/common';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{
  page_number: any;
  page_record = 6;
  bind_data: any;
  totalPage=2;
  bind_post: any;
  constructor(public storage: StorageService,private router: Router,private navCtrl: NavController,private location: Location,private route: ActivatedRoute,public commonService: CommonService,public loadingService: LoadingService,public rest: RestService) {}
   ionViewDidEnter(){
    this.page_number=1;
    this.get_post();
    this.post_get();
  }
  ngOnInit() {
  }
  post_get(){
   this.bind_post=[];
    const data={ page:this.page_number, results :this.page_record};
   this.rest.getPost(data).subscribe((data: any) => {
    // alert(JSON.stringify(data));
     for (let i = 0; i <data.length; i++) {
          this.bind_post.push(data[i]);
        }
       },
      error => {
        //alert(JSON.stringify(error));
     });
  }
  get_post(){
    this.bind_data=[];
    const data={  page:this.page_number, results :this.page_record, seed :'feed'};
    this.rest.getData(data).subscribe((data: any) => {
    // alert(JSON.stringify(data));
     // eslint-disable-next-line @typescript-eslint/dot-notation
     for (let i = 0; i <data['results'].length; i++) {
          // eslint-disable-next-line @typescript-eslint/dot-notation
          this.bind_data.push(data['results'][i]);
        }
     },
      error => {
        //alert(JSON.stringify(error));
     });
   }

    doInfinite(event) {
     this.page_number=this.page_number+1;
     // alert(this.page_number);
     const data={  page:this.page_number, results :this.page_record, seed :'feed'};
     this.rest.getData(data).subscribe(data => {
     // eslint-disable-next-line @typescript-eslint/dot-notation
     for (let i = 0; i < data['results'].length; i++) {
          // eslint-disable-next-line @typescript-eslint/dot-notation
          this.bind_data.push(data['results'][i]);
        }
     // event.target.complete();
       }, error => {
       console.log(error);
       // alert("error");
       // event.target.complete();
     });
    const data2={  page:this.page_number, results :this.page_record};
    this.rest.getPost(data2).subscribe((data: any) => {
    // alert(JSON.stringify(data));
     for (let i = 0; i <data.length; i++) {
          this.bind_post.push(data[i]);
        }
   },
   error => {
        //alert(JSON.stringify(error));
     });
   }

}
