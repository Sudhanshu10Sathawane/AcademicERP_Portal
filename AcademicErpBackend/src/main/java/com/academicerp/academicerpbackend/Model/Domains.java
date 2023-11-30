package com.academicerp.academicerpbackend.Model;

import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "domains")
@Data
public class Domains {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long domainId;

    private String program;
    @Column(name = "batch")
    private int batch;

    private int capacity;
    private String qualification;
}
