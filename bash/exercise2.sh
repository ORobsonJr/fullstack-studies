#2. Listar Diretórios: Escreva um script que liste todos os arquivos e 
#diretórios em um diretório específico.


if [ -z "$1" ]; then
    echo "Please provide a directory to list"

else
    ls -a "$1"

fi