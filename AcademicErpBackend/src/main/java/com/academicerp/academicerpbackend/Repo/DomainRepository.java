package com.academicerp.academicerpbackend.Repo;

import com.academicerp.academicerpbackend.Model.Domains;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DomainRepository extends JpaRepository<Domains, Long> {
    // Additional custom queries can be added here if needed
}