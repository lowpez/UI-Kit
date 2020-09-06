## Tabla de contenidos
* [Info general ](#info-general)
* [Tecnologias](#tecnologias)
* [Setup](#setup)

## Introduccion
Mi Front-end elemental para embellecer el CSS de tus proyectos fácilmente con un estilo minimalista.
Prototipos mas rápidos desatando el poder nativo de HTML y CSS Grid/Flexbox sin librerias externas.

Seguro ya hay muchos por ahí, pero este es mi favorito.

### Objetivo del proyecto = Porque Usar.
* Filosofía CSS Grid para estructurar y Flexbox para posicionar ()
* Markup HTML mas limpio
* Mantenimiento y flexibilidad de diseño

Actualmente el proyecto está dividido y enfocado a tres aspectos escenciales, pudiendo funcionar independientemente. Usa solo lo que necesitas. Mantente ligero.

![alt text](https://raw.githubusercontent.com/lowpez/UI/master/graficos/inputs.png?raw=true)

![alt text](https://github.com/lowpez/UI/blob/master/graficos/w-2-cols-6.png?raw=true)

# Tecnologias
* HTML5
* CSS+
* CSS Flexbox
* CSS Grid

# Setup

Tan simple como poner esta línea antes del < /head>

```
<link rel="stylesheet" href="css/blob.css">
```
# Resumen de Uso

### Blob.css
Entrega estructura, una paleta de colores y estilos a elementos generales como:
**Header, Nav, Main, Section, Footer, Body, p, a y clases utiles** (rotación de textos y otras)

### inputs.css 
Estilos para elementos de formulario como: **text, textarea, Form, label y Botones**

### Grid.css
La funcion primaria del proyecto es entregar ligereza y libertad de diagramacion.
Estilos para: -, - Y - . Se definirá en el desarrollo.

# Blob.css
## Clases .css-grid y .css-flexbox 

Son los nombres de dos modelos de posicionamiento CSS de lo mas populares (ademas de nativos) y los tenemos presentes. Cada uno otorgará caracteristicas propias a los elementos que contengan. Ampliamente compatibles. Puedes anidar uno dentro de otro sin problemas.
```
<div class="css-grid">
<!-- TU CONTENIDO -->
</div>
```
## Paleta y colores seleccionados
Siempre es mas facil recordar colores con palabras que con numeros.

### Formatos de Uso : --[color]-[brillo]-[sufijo]

```
--[color]
--[color]-[brillo]
--[color]-[sufijo]
--[color]-[brillo]-[sufijo]
```
Ejemplo: green-lite-pop 

```
--[color]: blue, red, white etc
-[brillo]: lite, pale, deep o dark.
-[sufijo]: Cualquiera.
```
```
<!-- TU CLASE -->
.my-class{
	background: var(--yellow-pastel);
	color: var(--black-lite);
}
```
```
<div class="my-class">
<!-- TU CONTENIDO -->
</div>
```

## Posicionando
Solo unas clases preparadas.
Si eres nuevo seguro te ayudaran a entender su uso.

### Vertical

![alt text](https://github.com/lowpez/UI/blob/master/graficos/pos-vertical.jpg?raw=true)
```
.top{
  align-self: start;
}
.bottom{
  align-self: end;
}
.center-v{
  align-self: center;
}
.stretch{
  align-self: stretch;
  justify-self: stretch;
}
```
### Horizontal 

![alt text](https://github.com/lowpez/UI/blob/master/graficos/pos-horizontal.jpg)
```
.left{
  justify-self: start;
}
.center{
  justify-self: center;
}
.right{
  justify-self: end;
}
```
En prepración.
Aún así hay demos disponibles en formato html. 
Solo añade un poco de creatividad.


## En Inplementación y lo que hacer
* Progresiva integracion de Sass (Simple)
* CSS+ (nuevos Selectores utiles)
* CSS+HTML (Nuevos demos)
* Mejorar Prácticas
* ...


