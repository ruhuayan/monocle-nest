import { Title } from '@angular/platform-browser';
import { Response } from 'express';
import { Component, Inject, Optional, PLATFORM_ID, OnInit } from '@angular/core';
import { isPlatformServer } from '@angular/common';
import { RESPONSE } from '@nguniversal/express-engine/tokens';

@Component({
  selector: 'app-not-found',
  template: `
  <h1 style="text-align: center; font-size: 72px">404</h1>
  <p> OOPS! Something went wrong here</p>
  `
})
export class NotFoundComponent implements OnInit {

  constructor(private titleServer: Title,
    ) {
    this.titleServer.setTitle('Page Not Found - Monocle');
  }

  ngOnInit() {
  }

}