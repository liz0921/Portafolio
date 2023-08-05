import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  descargarPDF() {
    fetch('assets/CV-Lizbeth-Montero.pdf')
      .then((response) => response.blob())
      .then((blob) => {
        const url = URL.createObjectURL(blob);

        // Crear un enlace temporal
        const link: HTMLAnchorElement = document.createElement('a');
        link.href = url;
        link.download = 'CV-Lizbeth-Montero.pdf'; // Nombre del archivo al descargarlo

        // Simular un clic en el enlace para descargar el archivo
        link.click();

        // Eliminar el enlace temporal
        URL.revokeObjectURL(url);
      });
  }
}










  
