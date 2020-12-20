import { LivrosPageComponent } from './livros-page/livros-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LivroPageComponent } from './livro-page/livro-page.component';
import { SobrePageComponent } from './sobre-page/sobre-page.component';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'livros', component: LivrosPageComponent},
  {path: 'livros/:id', component: LivroPageComponent},
  {path: 'sobre', component: SobrePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
