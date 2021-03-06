import {Component, OnInit} from '@angular/core';
import {RecipeService} from '../../recipe-book/recipe.service';
import {AuthService} from '../../auth/auth.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    constructor(private recipeService: RecipeService,
                public authService: AuthService) {
    }

    ngOnInit() {
    }

    onFetchData() {
        this.recipeService.fetchRecipes();
    }

    onSaveData() {
        this.recipeService.saveRecipes();
    }
}
