import { ChangeDetectorRef, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule, FormArray, FormBuilder, FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../footer/footer.component';
import { ListItemComponent } from "../list-item/list-item.component";

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [FormsModule, RouterOutlet, CommonModule, ReactiveFormsModule, FooterComponent, ListItemComponent],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {
  
  inputValue: string = '';
  checkToggleAll = false;
  profileForm: FormGroup;
  itemsTodos: any = [];
  originalItems: any = [];

  constructor(private formBuilder: FormBuilder, private cd: ChangeDetectorRef) {
    this.profileForm = this.formBuilder.group({
      taskTitle: [""],
      isComplete: [""],
    });
  }
 
  filterTodos($event: any) {
    this.itemsTodos = $event;
    this.cd.detectChanges();
  }

  onKeyEnter() {
    if(this.inputValue!=""){
      this.addNewTitle(this.inputValue);
      this.inputValue = "";
    }
  }

  addNewTitle(title: any) {
    this.profileForm.controls['taskTitle'].patchValue(title);
    this.profileForm.controls['isComplete'].patchValue(false);
    this.itemsTodos.push(this.profileForm.value);
    this.originalItems = this.itemsTodos;
  }

  toggleAll() {
   
    this.checkToggleAll = !this.checkToggleAll;
    this.patchValue(this.itemsTodos);
    this.patchValue(this.originalItems);
    this.cd.detectChanges();

  }
  patchValue(listItems: any) {
    listItems.forEach((item: any) => {
      item.isComplete = this.checkToggleAll;

    });
  }
 
}
