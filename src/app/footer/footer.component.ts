import { ChangeDetectorRef, Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  @Input() parentForm!: FormGroup;
  @Input() originalItems: any;
  @Input() itemsTodoschild!: any;
  @Output() itemsTodoschildChange = new EventEmitter<any>();
  constructor(private cd: ChangeDetectorRef) {
  }

  completed() {
    const completedItems = this.originalItems.filter((item: any) => item.isComplete === true);
    this.itemsTodoschild = completedItems;
    this.itemsTodoschildChange.emit(this.itemsTodoschild);
    this.cd.detectChanges();
  }

  active() {
    const activeItem = this.originalItems.filter((item: any) => item.isComplete === false);
    this.itemsTodoschild = activeItem;
    this.itemsTodoschildChange.emit(this.itemsTodoschild);
    this.cd.detectChanges();
  }

  all() {
    this.itemsTodoschild = this.originalItems;
    this.itemsTodoschildChange.emit(this.itemsTodoschild);
    this.cd.detectChanges();
  }

  clearCompleted() {
    this.clearItems(this.itemsTodoschild);
    this.clearItems(this.originalItems);
    this.cd.detectChanges();
  }

  clearItems(listItems: any) {
    for (let i = listItems.length - 1; i >= 0; i--) {
      const item = listItems.at(i);
      if (item.isComplete) {
        listItems.splice(i, 1); ;
      }
    }
  }
}
