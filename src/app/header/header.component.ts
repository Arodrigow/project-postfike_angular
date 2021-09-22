import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  searchForm = this.formBuilder.group({
    q: ['']
  })

  constructor(private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router,
  ) {}

  ngOnInit(): void {
  }

  onSubmit() {
    const { q } = this.searchForm.value;
    this.router.navigate([`/posts/search`], { queryParams: { page: 1, q } }).then(() => {
      window.location.reload();
    });;
  }

  isLoggedIn() {
    return this.authService.isLoggedIn();
  }

  isLoggedOut() {
    return this.authService.isLoggedOut();
  }

  logout() {
    this.authService.logout();
  }
}
