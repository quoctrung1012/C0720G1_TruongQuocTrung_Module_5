import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  logoImage = 'https://lh3.googleusercontent.com/proxy/v6rvfcjo1Tx8tVWUJlqTbdqHcdD0IJHTc5kx4wgj_9T4fzC3hMUIBjHhnU5x2GjRUU6OlQsw6ZRTk6HUxvZCY-o083z19TNuzO9Wpn9QTJQ7OjXU-jvK9_L58x0';
  constructor() { }

  ngOnInit(): void {
  }

}
