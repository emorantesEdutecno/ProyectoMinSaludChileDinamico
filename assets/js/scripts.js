let generarPagina = ()=>{
    //CREAMOS EL HEADER DINAMICAMENTE
    let elHeader = document.createElement('header');
    elHeader.setAttribute('class','text-danger text-center fondoHeader');
    // creamos un párrafo dinámicamente
    let parrafoHeader = document.createElement('p');
    parrafoHeader.innerHTML = 'Soy la barra de navegación';

    // asociamos/anidamos/añadimos/anexamos el párrafo al header
    elHeader.appendChild(parrafoHeader);
    // asociamos/anidamos/añadimos/anexamos el header al contenedor vacio del html
    let contenedorVacioHtml = document.getElementById('contenedorVacio');
    contenedorVacioHtml.appendChild(elHeader);

    // CREAMOS EL MAIN DINAMICAMENTE CON DOS COLUMNAS
    let elMain = document.createElement('main');
    // agregamos las clases de bootstrap que necesitemos
    elMain.classList.add('container');
    elMain.classList.add('bg-warning');
    elMain.classList.add('text-primary');


    //creamos el elemento fila que contendrá las columnas
    let laFilaMain = document.createElement('div');
    laFilaMain.setAttribute('class', 'row bg-info p-1');

    //creamos la columna izquierda del main
    let izquierdaMain = document.createElement('section');
    izquierdaMain.classList.add('col-md-8');
    izquierdaMain.classList.add('bg-success');
    izquierdaMain.classList.add('text-warning');

    // parrafo para la columna izquierda
    let parrafoIzquierda = document.createElement('p');
    parrafoIzquierda.innerHTML = 'datos de la izquierda';

    // asociamos/anidamos/añadimos/anexamos el párrafo de la izquierda con la columna de la izquierda
    izquierdaMain.appendChild(parrafoIzquierda);



    //creamos la columna derecha del main
    let derechaMain = document.createElement('article');
    derechaMain.setAttribute('class','col-md-4 bg-primary text-warning');

    //parrafo para la columna derecha
    let parrafoDerecha = document.createElement('p');
    parrafoDerecha.innerHTML = 'datos de la derecha';

    // asociamos/anidamos/añadimos/anexamos el párrafo de la derecha con la columna de la derecha
    derechaMain.appendChild(parrafoDerecha);


    // asociamos/anidamos/añadimos/anexamos la columna de la izquierda con la fila main
    laFilaMain.appendChild(izquierdaMain);
    // asociamos/anidamos/añadimos/anexamos la columna de la derecha con la fila main
    laFilaMain.appendChild(derechaMain);

    // asociamos/anidamos/añadimos/anexamos laFilaMain con el contenedor padre de la clase container
    elMain.appendChild(laFilaMain);
    // asociamos/anidamos/añadimos/anexamos elMain al contenedor vacio del HTML
    contenedorVacioHtml.appendChild(elMain);


    // creamos la primer fila izquierda de contenido
    let primerFilaIzqContenido = document.createElement('div');
    primerFilaIzqContenido.setAttribute('class', 'row');

    // creamos la columna de la primera fila izquierda de contenido
    let columnaPrimeraFilaIzqContenido = document.createElement('div');
    columnaPrimeraFilaIzqContenido.setAttribute('class', 'col-md-12');

    // creamos la etiqueta img del contenido de la primera izquierda de contenido
    let imagenPrimeraFilaIzqContenido = document.createElement('img');
    imagenPrimeraFilaIzqContenido.setAttribute('src','assets/img/BANNER-VACUNATE-HOY-CON.png');
    imagenPrimeraFilaIzqContenido.setAttribute('alt','imagen banner');

    // asociamos/anidamos/añadimos/anexamos la imagen a la columna de contenido
    columnaPrimeraFilaIzqContenido.appendChild(imagenPrimeraFilaIzqContenido);
    // asociamos/anidamos/añadimos/anexamos la columna a la respectiva fila
    primerFilaIzqContenido.appendChild(columnaPrimeraFilaIzqContenido);

    // asociamos/anidamos/añadimos/anexamos esa primera a su contenedor padre que es izquierdaMain
    izquierdaMain.append(primerFilaIzqContenido);


    // creamos la segunda fila de izquierda main
    let segundaFilaIzqContenido = document.createElement('div');
    segundaFilaIzqContenido.setAttribute('class', 'row');

    // creamos el contenedor para la segunda fila 
    let contenedorSegundaFilaIzq = document.createElement('div');
    contenedorSegundaFilaIzq.setAttribute('class','container');

    //creamos la fila superior del contenedor
    let filaSuperiorContenedorSegundaFilaIzq = document.createElement('div');
    filaSuperiorContenedorSegundaFilaIzq.setAttribute('class', 'row');
    //creamos la columna de la fila superior que tendra la imagen
    let columnaFilaSuperiorContenedorSegundaFilaIzq = document.createElement('div');
    columnaFilaSuperiorContenedorSegundaFilaIzq.setAttribute('class', 'col-md-12');

    // creamos el parrafo ultimas noticias  que va primero que la imagen
    let parrafoColumnaFilaSuperiorContenedorSegundaFilaIzq = document.createElement('p');
    parrafoColumnaFilaSuperiorContenedorSegundaFilaIzq.innerHTML = 'Últimas Noticias';


    // creamos la etiqueta imagen que contendrá la imagen de la noticia
    let imagenColumnaFilaSuperiorContenedorSegundaFilaIzq = document.createElement('img');
    imagenColumnaFilaSuperiorContenedorSegundaFilaIzq.setAttribute('src', 'assets/img/Portada.png');
    imagenColumnaFilaSuperiorContenedorSegundaFilaIzq.setAttribute('alt', 'imagen portada');

    // asociamos/anidamos/añadimos/anexamos el párrafo con  la columna correspondiente
    columnaFilaSuperiorContenedorSegundaFilaIzq.appendChild(parrafoColumnaFilaSuperiorContenedorSegundaFilaIzq);
    // asociamos/anidamos/añadimos/anexamos la imagen con  la columna correspondiente
    columnaFilaSuperiorContenedorSegundaFilaIzq.appendChild(imagenColumnaFilaSuperiorContenedorSegundaFilaIzq);
    // asociamos/anidamos/añadimos/anexamos la columna a la fila correspondiente
    filaSuperiorContenedorSegundaFilaIzq.appendChild(columnaFilaSuperiorContenedorSegundaFilaIzq);
    // asociamos/anidamos/añadimos/anexamos la fila al contenedor correspondiente
    contenedorSegundaFilaIzq.appendChild(filaSuperiorContenedorSegundaFilaIzq);
   
    //creamos la fila inferior del contenedor
    let filaInferiorContenedorSegundaFilaIzq = document.createElement('div');
    filaInferiorContenedorSegundaFilaIzq .setAttribute('class', 'row');

    //creamos la columna izquierda de la fila inferior que tendra los titulos
    let columnaIzqFilaInferiorContenedorSegundaFilaIzq = document.createElement('div');
    columnaIzqFilaInferiorContenedorSegundaFilaIzq.setAttribute('class', 'col-md-6');
    // creamos el parrafo con los titulo
    let parrafoColumnaIzqFilaInferiorContenedorSegundaFilaIzq = document.createElement('p');
    parrafoColumnaIzqFilaInferiorContenedorSegundaFilaIzq.innerHTML = 'Ministra de Salud llama a seguir cuidándose contra el COVID-19 y a completar el esquema de vacunación';
    // asociamos/anidamos/añadimos/anexamos el parrafo a la columna izquierda de la fila inferior del contenedor
    columnaIzqFilaInferiorContenedorSegundaFilaIzq.appendChild(parrafoColumnaIzqFilaInferiorContenedorSegundaFilaIzq);
    // asociamos/anidamos/añadimos/anexamos la columna izquierda con titulos a la fila inferior del contenedor
    filaInferiorContenedorSegundaFilaIzq.appendChild(columnaIzqFilaInferiorContenedorSegundaFilaIzq);


    //creamos la columna derecha de la fila inferior que tendra el contenido
    let columnaDerFilaInferiorContenedorSegundaFilaIzq = document.createElement('div');
    columnaDerFilaInferiorContenedorSegundaFilaIzq.setAttribute('class', 'col-md-6');
    // creamos el parrafo con los contenidos
    let parrafoColumnaDerFilaInferiorContenedorSegundaFilaIzq = document.createElement('p');
    parrafoColumnaDerFilaInferiorContenedorSegundaFilaIzq.innerHTML = '-La autoridad se refirió al anuncio de la Organización Mundial del Salud (OMS), que declaró esta mañana el término de la emergencia sanitaria mundial por Covid-19. La Ministra Aguilera fue enfática en señalar que esta no es una enfermedad que haya desaparecido, sino más bien, que el virus ya vive entre nosotros.';
    // asociamos/anidamos/añadimos/anexamos el parrafo a la columna derecha de la fila inferior del contenedor
    columnaDerFilaInferiorContenedorSegundaFilaIzq.appendChild(parrafoColumnaDerFilaInferiorContenedorSegundaFilaIzq);
    // asociamos/anidamos/añadimos/anexamos la columna derecha con contenidos a la fila inferior del contenedor
    filaInferiorContenedorSegundaFilaIzq.appendChild(columnaDerFilaInferiorContenedorSegundaFilaIzq);

    // asociamos/anidamos/añadimos/anexamos la segunda fila al contenedor correspondiente
    contenedorSegundaFilaIzq.appendChild(filaInferiorContenedorSegundaFilaIzq);


    // asociamos/anidamos/añadimos/anexamos el container a la segunda principal fila de la izquierda
    segundaFilaIzqContenido.appendChild(contenedorSegundaFilaIzq);
    // asociamos/anidamos/añadimos/anexamos la segunda fila principal izquierda al elemento principal de la izquierda
    izquierdaMain.appendChild(segundaFilaIzqContenido);
}
