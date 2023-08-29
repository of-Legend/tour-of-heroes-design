import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tour-of-heroes';
  heroes = [
    { nombre: 'SpiderMan', descripcion: 'Spider-Man: No Way Home es una película de superhéroes estadounidense de 2021...', imagenUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.5T36xJN5j7JsC4nLdel78gHaEK%26pid%3DApi&f=1&ipt=cf1f0bca0ac3759e10bc98f1052c71ca17dec753de27c051d771aed27ae75650&ipo=images' },
    { nombre: 'Chapulin Colorado', descripcion: 'El Chapulín Colorado es una serie de comedia de televisión mexicana que se transmitió de 1973 a 1979 y parodiaba programas de superhéroes. Fue creada por Roberto Gómez Bolaños, quien también interpretó al personaje principal.', imagenUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.jvZOlsuwE2pZMY3523k5mwHaEK%26pid%3DApi&f=1&ipt=806701956c6965f6e7109aa0cd653d5996c6e0cf0589901e18347c05eba37a02&ipo=images' },
    { nombre: 'Barbilla Roja', descripcion: 'harles Hampton Indigo, más conocido como Barbilla Carmesí en España y Barbilla Roja en Latinoamérica, era un antiguo reportero con su propio show parecido al de Jimmy Fallonq, que trabajaba para el periódico El Chisme Diario (una parodia a el Clarín, el periódico donde trabaja el Hombre Araña y al Diario el Planeta, donde trabaja Superman, teniendo más parecido a este último) y después de un accidente en una entrevista con un actor radiactivo, su barbilla crece a un gran tamaño debido a la mordida dada por el actor, lo que lo convierte en este personaje, un héroe de su propio cómic y también de la vida real, gracias a los deseos de Timmy Turner.', imagenUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.tmFrfkCoKzgYtxToGAUQpwHaFu%26pid%3DApi&f=1&ipt=b1771068b55b77ce568ddedbaedc1c242be19e3f370147c71440efb0123d0292&ipo=images' },
    // Agrega más héroes aquí...
  ];
    
  agregarHeroe() {
    console.log('Método agregarHeroe ejecutado');
  }

  onClick() {
    console.log('Click en el botón');
  }

  onMouseDown() {
    console.log('Mouse Down');
  }

  onMouseMove() {
    console.log('Mouse Move');
  }

  onMouseOut() {
    console.log('Mouse Out');
  }

  onMouseOver() {
    console.log('Mouse Over');
  }

  onMouseUp() {
    console.log('Mouse Up');
  }
}
