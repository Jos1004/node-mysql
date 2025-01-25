/*Para criar o Database crud, usei a opção Create a new schema in the
connect server, para quem não conhece é so clicar no simbolo cilindrico*/
/*Em seguida abra o crud, botão direito em Tables e crie uma tabela chamada clientes*/
/* E insira esse comandos após apertar Apply 
id int auto_increment not null primary key,
nome varchar(150) not null,
idade int not null,
uf varchar(2) not null*/ 

use crud;
describe clientes;
select * from clientes;

insert into clientes (nome, idade, uf) values ('Hanna', 27, 'SP');
insert into clientes (nome, idade, uf) values ('Carol', 28, 'BH');
insert into clientes (nome, idade, uf) values ('Maria Clara', 18, 'MG');
insert into clientes (nome, idade, uf) values ('Mariano', 34, 'SC');
insert into clientes (nome, idade, uf) values ('Fellip', 22, 'PR');
insert into clientes (nome, idade, uf) values ('Diego', 36, 'RJ');

select*from clientes; 
