# WorkplaceStation Dashboard

Aplicación SPA creada para funcionar como dashboard de monitoreo del sitio [WorkplaceStation](https://github.com/sebastianRellihan/grupo_8_workplaceStation).

Proyecto autogenerado con [Create React App](https://github.com/facebook/create-react-app).

## Scripts

### `npm start`

Ejecuta la aplicación en modo de desarrollo. Este proceso correrá en el puerto especificado en la variable **PORT** del archivo **.env**
ó en el puerto **3000** en caso de que no se haya especificado, y será accesible por un navegador a través de **localhost:PORT**.

En tiempo de ejecución, se recargará automáticamente la página al editar algún archivo.

### `npm run build`

Transpila, interpreta y minifica los archivos del proyecto, dejando una versión accesible en la carpeta **build** en la raíz del proyecto.
Los archivos generados pueden servirse de forma estática si se ponen a disposición en la carpeta **pública** de un servidor funcional.

## Integración con WorkplaceStation

Si bien es posible (y recomendable) correr el servicio en un proceso aparte, bajo necesidad también se puede integrar con el servidor de
**WorkplaceStation**, contando además con las ventajas de autorización y facilitando el consumo de la **API HTTP** que provée éste.
Para esto, se deben seguir los siguientes pasos:

- Toda la carpeta **build** (y no sólo su contenido) deben guardarse dentro de la carpeta [site/public](https://github.com/sebastianRellihan/grupo_8_workplaceStation/tree/master/site/public).
- El archivo **index.html** generado debe encontrarse dentro de la carpeta [site/src/views/main](https://github.com/sebastianRellihan/grupo_8_workplaceStation/tree/master/site/src/views/main) bajo el nombre **dashboard.ejs**, haciendo algunas modificaciones para las que se puede tomar como ejemplo el propio archivo
[dashboard.ejs](https://github.com/sebastianRellihan/grupo_8_workplaceStation/blob/master/site/src/views/main/dashboard.ejs) que ya se encuentra integrado.

Al correr el servidor de **WorkplaceStation**, se debería poder acceder a la nueva versión del dashboard a través de la URL **/dashboard**, sólo disponible
para usuarios con nivel de permisos de **ADMIN**.
