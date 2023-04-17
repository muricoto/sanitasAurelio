Al principio (rama 0001) decidí crear un servicio para mostrar las imágenes, pero después (rama 0003) me di cuenta de que no era necesario.

He decidido crear una paginación para poder ir viendo las imágenes escalonadas (en páginas de 50 imágenes). Esto se debe a que al realizar las 4000 consultas de una se ralentizaba mucho el arranque de la página; y porque tampoco tenía mucho sentido realizar las 4000 llamadas de una si no se ven todas en la pantalla en ese momento. 

Estuve mirando y probando librerías de angular para ello, pero decidí implementar esta solución. 

Lo que sí que ocurre así, es que al usar el filtro solo encuentra las imágenes de entre esas 50.

Para las tareas, he ido particionando cada enunciado en una rama, y subiendo los cambios a develop una vez concluídos. 
Partiendo de develop para realizar la siguiente tarea. Por encima está la rama master, a la cuál he realizado un PR al final del ejercicio. 

En cuanto a los estilos, he implementado flex para organizar un poco mejor la experiencia de usuario. 