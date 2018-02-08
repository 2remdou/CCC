CREATE EXTENSION IF NOT EXISTS "uuid-ossp"; 

create table groupeUsers(
    id uuid DEFAULT uuid_generate_v4() primary key,
    libelle varchar(200)
);

create table users(
    id uuid DEFAULT uuid_generate_v4() primary key,
    nom varchar(100),
    prenom varchar(200),
    email varchar(200),
    telephone varchar(200),
    password varchar(200),
    idGroupeUser uuid constraint fk_user_groupeUser  references groupeUsers(id)

);

