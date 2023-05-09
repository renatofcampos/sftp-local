Execução do SFTP local + App de manutenção de usuários.

Compilação:
1. Primeiro deve-se compilar a imagem do app
`make build`

2. Testar localmente a aplicação com o docker run. A imagem gerada será feita apartir do VERSION + Commit (Em caso de branch diferente da MASTER)

3. Subir a imagem para o repositorio docker.totvs.io (Harbour)
`make push`

  IMPORTANTE:
  Exportar as variaveis HARBOUR_USER e HARBOUR_PASS para conseguir fazer o push da imagem. (Usuario e senha de rede da TOTVS)

Implantação:
A solução foi escrita para executar em um cluster kubernetes e para auxiliar na instalação, iremos utilizar o HELM.

Passo 1. Compilar as dependencias do chart
`helm dependencies build charts`

Passo 2. Ajustar os valores do arquivo values.yaml

Passo 3. Realizar a implantação do namespace com o helm

`helm upgrade sftp-local chart/ --namespace=sftp-local --install --debug --timeout 30000s`

Passo 4. Testar a aplicação. 
O SFTP estará escutando a porta 22 (sftp-local-service) e o aplicativo de manutenção de usuários estará escutando na porta 3000 (sftp-users-app)