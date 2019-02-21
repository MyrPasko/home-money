import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {NgForm} from '@angular/forms';
import {CategoriesService} from '../../shared/services/categories.service';
// import {Category} from '../../shared/models/category.model';


export class Category {
  constructor(
    public name: string,
    public capacity: number,
    public id?: number
  ) {}
}

@Component({
  selector: 'pmr-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent implements OnInit {
  @Output() categoryAdd = new EventEmitter<Category>();

  constructor(private categoriesService: CategoriesService) {
  }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    let {name, capacity} = form.value;
    if (capacity < 0) {
      capacity *= -1;
    }

    const category = new Category(name, capacity);

    this.categoriesService.addCategory(category)
      .subscribe((cat: Category) => {
        form.reset();
        form.form.patchValue({capacity: 1});
        console.log(form);
        console.log(cat);
        this.categoryAdd.emit(category);
      });
  }

}
