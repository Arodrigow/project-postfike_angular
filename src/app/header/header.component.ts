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

  isOnlyLogo: boolean = false;

  searchForm = this.formBuilder.group({
    q: ['']
  })

  constructor(private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.routeTypeTest();
  }

  onSubmit() {
    const { q } = this.searchForm.value;
    this.router.navigate([`/posts/search`], { queryParams: { page: 1, q } }).then(() => {
      window.location.reload();
    });;
  }
  ngAfterContentChecked() {
    this.routeTypeTest()
  }

  routeTypeTest() {
    const currentUrl = this.router.url;
    if (currentUrl == '/login') {
      this.isOnlyLogo = true;
    }
    else {
      this.isOnlyLogo = false;
    }
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
