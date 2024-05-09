# Usa una imagen de servidor web como base (por ejemplo, Nginx)
FROM nginx:alpine

# Elimina el archivo de configuración predeterminado de Nginx
RUN rm -rf /usr/share/nginx/html/*

# Copia los archivos de tu aplicación al directorio de trabajo del servidor web
COPY index.html /usr/share/nginx/html/
COPY index.js /usr/share/nginx/html/
COPY style.css /usr/share/nginx/html/


# Expone el puerto 80 para acceder a la aplicación
EXPOSE 80

# Inicia Nginx en primer plano cuando se ejecute el contenedor
CMD ["nginx", "-g", "daemon off;"]