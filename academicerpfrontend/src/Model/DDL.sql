create table admin
(
    admin_id int auto_increment
        primary key,
    username varchar(255) not null,
    password varchar(255) not null
);

create table domains
(
    domain_id     int auto_increment
        primary key,
    program       varchar(255) not null,
    batch         year         not null,
    capacity      int          not null,
    qualification varchar(255) null
);

create table student
(
    student_id      bigint auto_increment
        primary key,
    roll_number     varchar(50)  not null,
    first_name      varchar(255) not null,
    last_name       varchar(255) not null,
    email           varchar(255) not null,
    photograph_path varchar(255) null,
    cgpa            float        null,
    total_credits   int          not null,
    graduation_year int          null,
    domain_id       int          null,
    constraint email
        unique (email),
    constraint roll_number
        unique (roll_number),
    constraint student_ibfk_1
        foreign key (domain_id) references domains (domain_id)
);