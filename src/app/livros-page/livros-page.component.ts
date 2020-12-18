import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-livros-page',
  templateUrl: './livros-page.component.html',
  styleUrls: ['./livros-page.component.css']
})
export class LivrosPageComponent implements OnInit {

  livros$: Observable<any[]>;

  constructor(private firestore: AngularFirestore) {
    this.livros$ = this.firestore.collection('livros').valueChanges();

  }

  ngOnInit() {

  }

}
