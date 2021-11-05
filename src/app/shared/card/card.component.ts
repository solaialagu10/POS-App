import { NgModule ,Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'card-template',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent{
  @Input('title')  titleValue = '';
  @Input('content')  contentValue= '';
  @Input('color')  colorName= '';
}
