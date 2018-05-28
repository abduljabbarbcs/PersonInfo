import { Component, OnInit } from '@angular/core';
import {PersonService} from "../../services/person.service";
import {Person} from  "../../_models/person";
@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
  private personInfo:Array<Person> = []
  constructor(private personService:PersonService) { }

  ngOnInit() {
    this.fetchPersonInfo()
  }

  private fetchPersonInfo(){
     this.personService.get().subscribe(
                  data => {
                    this.personInfo = data;
                    console.log(this.personInfo)
                  },
                  error => {

                  });

  }
  private remove(index){
    this.personInfo.splice(index,1)
  }
}
