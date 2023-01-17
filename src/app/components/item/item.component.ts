import { Component, Input, OnInit } from '@angular/core';
import { Item } from './item';
import { IMAGES_SIZES } from '../../constants/images-sizes';

@Component({
  selector: 'item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit {
  @Input() itemData: Item | null = null;
  constructor() {}
  imagesSizes = IMAGES_SIZES;
  ngOnInit(): void {}
}
