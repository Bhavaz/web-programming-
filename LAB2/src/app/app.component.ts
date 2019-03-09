import {Component, ElementRef, Input} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ViewChild} from "@angular/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Google';
 @ViewChild('input') text: ElementRef;
  textv: any;
  name: any;
  describe: any;
  body: any;
  url: any;
  url1: any;

  constructor(private http:HttpClient){}
  ngOnInit() {
  }
search()
{
  alert("hi");
  this.textv=this.text.nativeElement.value;
  this.http.get('https://kgsearch.googleapis.com/v1/entities:search?query='+this.textv+'&key=AIzaSyCNxgbDr5kAFjAv3qGxdryLMrDPMfHzKOg&limit=1&indent=True')
    .subscribe((data:any)=>
    {this.name = data.itemListElement[0].result.name;
      this.describe = data.itemListElement[0].result.description;
      this.body = data.itemListElement[0].result.detailedDescription.articleBody;
      this.url = data.itemListElement[0].result.detailedDescription.url;
      this.url1 = data.itemListElement[0].result.url;
    });
}
}
