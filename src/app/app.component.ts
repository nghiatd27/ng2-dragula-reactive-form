import { Component, OnInit } from '@angular/core';
import { DragulaService } from 'ng2-dragula';
import { FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit{
  // these are some basics to get you started -- modify as you see fit.

  form;

  ngOnInit() {
    this.form = this.fb.group({
      rows: this.fb.array([this.buildRow()])
    })
  }

  get rows() {
    return this.form.get('rows') as FormArray;
  }

  constructor(private dragulaService: DragulaService, private fb: FormBuilder) {
    // use these if you want

    this.dragulaService.createGroup("VAMPIRES", {
      // ...
    });

    this.dragulaService.dropModel("VAMPIRES").subscribe(args => {
      console.log(args);
      // for (let i = 0; i < this.rows.length; i++) {
      //   this.rows.setControl(i, args.sourceModel[i]);
      // }
      const group = this.rows.at(args.sourceIndex);
      this.rows.removeAt(args.sourceIndex);
      this.rows.insert(args.targetIndex, group);
      
    });
  }

  private buildRow(data?) {
    return this.fb.group({
      data: this.fb.control(data || 1)
    })
  }

  addRow() {
    this.rows.push(this.buildRow(this.rows.length + 1));
  }
}
