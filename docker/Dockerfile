# Use a imagem base do Nginx
FROM nginx

# Remova o arquivo de configuração padrão do Nginx
RUN rm /etc/nginx/conf.d/default.conf

# Copie os arquivos estáticos do Angular para o diretório de publicação do Nginx
COPY dist/ /usr/share/nginx/html

# Copie o arquivo de configuração personalizado para o Nginx
COPY nginx.conf /etc/nginx/conf.d/

# Exponha a porta 80 para o tráfego HTTP
EXPOSE 80

# Inicie o servidor Nginx quando o contêiner for iniciado
CMD ["nginx", "-g", "daemon off;"]
