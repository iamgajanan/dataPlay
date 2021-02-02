import { CompileTemplateMetadata, ElementSchemaRegistry } from '@angular/compiler';
import { Component } from '@angular/core';
import { element } from 'protractor';
import { APIService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dataPlay';
  arr
  innerArr
  constructor(private API:APIService){
    this.API.getData().subscribe(res=>{
      this.arr=res
      // this.arr.forEach(element => {
      //   if(element.userId==1)
      //   {
      //     console.log(element.completed)
      //     this.innerArr=element
      //     this.innerArr.filter((e)=>{
      //       console.log(e.completed)})
          
        
      //   }
      // })
      this.innerArr= this.arr.filter((v,i,a)=>a.findIndex(t=>(t.userId === v.userId))===i)


      // this.innerArr= this.arr.filter((v,i,a)=>a.findIndex(t=>(t.userId === v.userId))===i)

        // this.arr.filter((a,i)=>{console.log(a.userId)})
         

      
    })
  
    
  }
  index
  abc
  chk
  onIndex(event){
    console.log(event.target.value)
    this.index=event.target.value
    console.log(this.index)
    this.abc= this.arr.filter(e=>
    e.userId==event.target.value
    )

    console.log(this.abc)
      this.chk=this.abc.completed

      
  }
}

