import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from 'src/app/tasks.service';
import { Task } from 'src/app/task';



@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.css']
})
export class TaskEditComponent implements OnInit {
  id!: number;
  public taskForm!: FormGroup;
  //public tasks!:(new () => object) ;
  public tasks!: Task[] ;
 public task!:Task;
  public errMsg!: string;
  //public task=new Task();///declarer la listes des task
  //task.ID=12;
  //task.name="React native"
 // private route!: ActivatedRoute;
 //public taskss:Task[]=[{ ID: 11, name: 'Dr Nice',startingDtae:new Date(10,10,2020),endingDtae:new Date (20,12,2022),starting:true,done:false }];

  constructor(private fb:FormBuilder,private route: ActivatedRoute,private service:TaskService) { }

  ngOnInit(): void {
    this.taskForm = this.fb.group({
      taskName:['',Validators.required],
      startingDate:['',Validators.required],
      endingDate:['',Validators.required],
      starting:['',Validators.required],
      done:['',Validators .required]
    })

   // this.id = this.route.snapshot.paramMap.get('id')
   // const id= this.route.snapshot.paramMap.get('id');
   this.route.params.subscribe(params => {
     this.id=+params['id'];
     //console.log(params)
    console.log(+params['id'])
   })
   
    
   //this.tasks=this.service.getTasks();///Refiare video 24
  
   ////API BACK
    /*this.service.getBackingData().subscribe((response) =>{
      next :() => this.tasks;
      console.log(response);
      //this.tasks.push(response);
      //return response;
     // console.log(this.tasks)
    })*/
    this.service.getBackingData().subscribe( {
      next :tasks =>{this.tasks=tasks; console.log(this.tasks)},
      error:err=>this.errMsg=err   
         
     })
    this.createTask()
    this.getTask()
    this.update()
    this.service.removeTask(13).subscribe((response)=>{
      console.log(response);
      return response
    })

    /*this.service.update(4,"angular").subscribe((response)=>{
      console.log(response);
      return response;
    })*/
   /* this.service.find(4).subscribe((response)=>{
      console.log(response);
      return response;
    })*/
   // console.log(this.tasks)
    
    }
    public createTask(){
      this.task=new Task;
      this.task.ID=4;
      this.task.name='reasctjs';
      this.task.endingDtae= new Date(12/12/2022);
      this.task.startingDtae= new Date(12/12/2022);
      this.service.create(this.task).subscribe((response)=>{
        console.log(response);
        return response;
      })}
 

  public saveTask():void{
    console.log(this.taskForm.value)
  }
  
  
  }
