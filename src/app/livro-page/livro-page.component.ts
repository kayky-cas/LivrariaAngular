import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-livro-page',
  templateUrl: './livro-page.component.html',
  styleUrls: ['./livro-page.component.css']
})
export class LivroPageComponent implements OnInit {

  livro$: any;

  constructor(private firestore: AngularFirestore, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.livro$ = this.route.paramMap.pipe(
      switchMap(params => {
        const id = params.get('id');
        return this.firestore.doc('livros/' + id).valueChanges();
      })
    );

  }


}
