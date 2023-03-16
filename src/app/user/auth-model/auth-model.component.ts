import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-auth-model',
  templateUrl: './auth-model.component.html',
  styleUrls: ['./auth-model.component.css']
})
export class AuthModelComponent implements OnInit{

  constructor(public modal: ModalService) {}

  ngOnInit(): void {
    this.modal.register('auth')
  }

}
