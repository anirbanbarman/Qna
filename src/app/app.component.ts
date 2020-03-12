import { Component } from '@angular/core';
interface Question{
  questionId:number;
  questionText:string;
  options: Array<Options>;
}
interface Options{
  optionId:number;
  optionText:string;
 

}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  questionList:Question[]=[
    
    {questionId:1,questionText:'Question 1',options:[{optionId:1,optionText:'Yes'},{optionId:2,optionText:'No'}]},
    {questionId:2,questionText:'Question 2',options:[{optionId:1,optionText:'Yes'},{optionId:2,optionText:'No'},{optionId:3,optionText:'May be'}]},
    {questionId:3,questionText:'Question 3',options:[{optionId:1,optionText:'Yes'},{optionId:2,optionText:'No'}]},
    {questionId:4,questionText:'Question 4',options:[{optionId:1,optionText:'Yes'},{optionId:2,optionText:'No'},{optionId:3,optionText:'May be'}]},
    {questionId:5,questionText:'Question 5',options:[{optionId:1,optionText:'Yes'},{optionId:2,optionText:'No'}]}

  
  
  ]
  filteredQuestionList: Question[];
  filteredOption=[];
  addRule:boolean=false;
  OnRule(question){
    console.log(question);
 
    let filtered=this.questionList.filter(_=>_.questionId!==question.questionId);
    this.filteredQuestionList=filtered.filter(_=>_.questionId<question.questionId);
    this.addRule=false;
  }

  OnSelect(questionId){
   
   let filt:Question[]=this.filteredQuestionList.filter(_=>_.questionId==questionId)

  this.filteredOption=filt[0].options;


  }
  OnCheck(OnCheck,v){
    console.log(OnCheck,v.value)
    this.addRule=true;


  }
  RuleSave(Q1,O1){
console.log(Q1,O1)
  }
}
