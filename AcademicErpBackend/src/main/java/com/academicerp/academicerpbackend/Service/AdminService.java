package com.academicerp.academicerpbackend.Service;

import com.academicerp.academicerpbackend.Model.Domains;
import com.academicerp.academicerpbackend.Model.Student;
import com.academicerp.academicerpbackend.Repo.DomainRepository;
import com.academicerp.academicerpbackend.Repo.StudentRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AdminService {
    @Autowired
    private StudentRepo studentRepo;
    @Autowired
    private DomainRepository domainRepo;
    public List<Student> getAllStudents() {
        return studentRepo.findAll();
    }
    public List<Domains> getAllDomains() {
        return domainRepo.findAll();
    }

    public List<Student> getStudentsByDomain(Long domainId) {
        return studentRepo.findAllByDomainId(domainId);
    }

    public String findDomainNameById(Long domainId) {
        return domainRepo.findById(domainId)
                .map(Domains::getProgram)
                .orElse(null);
    }
    public Domains findDomainById(Long domainId) {
        return domainRepo.findById(domainId)
                .orElse(null);
    }
    public Domains getDomainById(Long domainId){
        Optional<Domains> domainOptional = domainRepo.findById(domainId);
        return domainOptional.orElse(null);
    }
     public void saveDomain(Domains domains){
            domainRepo.save(domains);
     }
}
