import { ChangeDetectorRef, Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormArray, FormBuilder, FormGroup, FormControl, ReactiveFormsModule, } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-list-item',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule, CommonModule, ListItemComponent],
  templateUrl: './list-item.component.html',
  styleUrl: './list-item.component.css',

})

export class ListItemComponent {
  @Input() parentForm!: FormGroup;
  @Input() itemsTodoschild!: any;
  @Input() originalItemschild: any;

  constructor(private formBuilder: FormBuilder, private cd: ChangeDetectorRef) { }

  
  onCheckChange(target: any, index: any, item: any) {

    this.parentForm.get(`isComplete${index}`)?.setValue(target.checked);
    item.isComplete = target.checked;
    this.cd.detectChanges();

  }

  removeItem(index: any, item: any) {
    this.itemsTodoschild.splice(index, 1)
    const itemIndex = this.originalItemschild.findIndex((Object: any) => Object.taskTitle == item.taskTitle);

    if (itemIndex !== -1) {
      this.originalItemschild.splice(itemIndex, 1)
    }

    this.cd.detectChanges();
  }

}



