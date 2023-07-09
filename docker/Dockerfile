# Use a imagem base do Nginx
FROM nginx

# Remova o arquivo de configuração padrão do Nginx
RUN rm /etc/nginx/conf.d/default.conf

# Copie os arquivos estáticos do Angular para o diretório de publicação do Nginx
COPY dist/ /usr/share/nginx/html

# Defina as permissões corretas para os arquivos estáticos
RUN chmod -R 755 /usr/share/nginx/html

# Copie o arquivo de configuração personalizado para o Nginx
COPY nginx.conf /etc/nginx/conf.d/

# Exponha a porta 8080 para o tráfego HTTP
EXPOSE 8080

# Inicie o servidor Nginx quando o contêiner for iniciado
CMD ["nginx", "-g", "daemon off;"]
