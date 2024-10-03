import { ChangeDetectorRef, Component, Input, OnChanges, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule, FormArray, FormBuilder, FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ListItemComponent } from "./list-item/list-item.component";
import { FooterComponent } from "./footer/footer.component";
import { TodoListComponent } from "./todo-list/todo-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, RouterOutlet, CommonModule, ReactiveFormsModule, ListItemComponent, FooterComponent, TodoListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent{

}
