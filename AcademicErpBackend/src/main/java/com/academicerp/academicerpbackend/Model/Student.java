package com.academicerp.academicerpbackend.Model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "student")
@Data
public class Student {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "student_id")
    private Integer studentId;

    @Column(name = "roll_number", unique = true, nullable = false)
    private String rollNumber;

    @Column(name = "first_name", nullable = false)
    private String firstName;

    @Column(name = "last_name", nullable = false)
    private String lastName;

    @Column(name = "email", unique = true, nullable = false)
    private String email;

    @Column(name = "photograph_path")
    private String photographPath;

    @Column(name = "cgpa")
    private Double cgpa;

    @Column(name = "total_credits", nullable = false)
    private Integer totalCredits;

    @Column(name = "graduation_year")
    private Integer graduationYear;

    @Column(name = "domain_id")
    private Long domainId;
}