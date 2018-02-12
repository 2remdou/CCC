CREATE EXTENSION IF NOT EXISTS "uuid-ossp"; 

create table groupeUsers(
    id uuid DEFAULT uuid_generate_v4() primary key,
    libelle varchar(200) NOT NULL
);

create table users(
    id uuid DEFAULT uuid_generate_v4() primary key,
    nom varchar(100) NOT NULL,
    prenom varchar(200),
    email varchar(200) UNIQUE,
    telephone varchar(200) NOT NULL UNIQUE,
    password varchar(200) NOT NULL,
    idGroupeUser uuid NOT NULL constraint fk_user_groupeUser  references groupeUsers(id)

);

