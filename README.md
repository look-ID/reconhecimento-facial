# Reconhecimento_Facial
Criando sistema de Biometria Facial
Front-End

## Modelo de configuração do Nginx 

Caminho: /etc/nginx/sites-available/default

server {
    listen 443 ssl;
    server_name lookid.com.br;

    ssl_certificate /etc/letsencrypt/live/lookid.com.br/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/lookid.com.br/privkey.pem;

    location / {
        proxy_pass http://localhost:8080;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}

server {
    listen 80;
    server_name lookid.com.br;
    return 301 https://$host$request_uri;
}