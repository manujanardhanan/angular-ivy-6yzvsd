import { Component, VERSION,OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'my-server',
  templateUrl: './server.component.html',
  styleUrls: [ ]
})
export class ServerComponent implements OnInit  {

constructor(){

}
ngOnInit(){

  
}

  onClickHere(event:Event){
    console.log(event);
  }
  name : string ="test";
  
  disflag :string = 'disabled';

  
}
