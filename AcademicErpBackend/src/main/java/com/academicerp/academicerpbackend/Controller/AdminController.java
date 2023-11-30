package com.academicerp.academicerpbackend.Controller;

import com.academicerp.academicerpbackend.Model.Domains;
import com.academicerp.academicerpbackend.Model.Student;
import com.academicerp.academicerpbackend.Service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/")
public class AdminController {
    private static final Logger logger = LoggerFactory.getLogger(AdminService.class);

    @Autowired
    private AdminService adminService;

    @GetMapping("/all/students")
    public List<Student> getStudents(){
        logger.info("Fetching all students from the database");
        return adminService.getAllStudents();
    }
    @GetMapping("/all/students/{id}")
    public List<Student> getStudentsOfDomain(@PathVariable Long id){
        logger.info("Fetching all students from the database");
        return adminService.getStudentsByDomain(id);
    }
    //Get Domain name by Id
    @GetMapping("/name/{domainId}")
    public String getDomainNameById(@PathVariable Long domainId) {
        return adminService.findDomainNameById(domainId);
    }
    @GetMapping("/domain/{domainId}")
    public Domains getDomainById(@PathVariable Long domainId) {
        return adminService.findDomainById(domainId);
    }
    //Get Domain All Domain names
    @GetMapping("/all/domain")
    public List<Domains> getDomains() {
        return adminService.getAllDomains();
    }
    //Update Domain details
    @PutMapping("/update/domain/{id}")
    public ResponseEntity<String> updateDomainDetails(@RequestBody Domains updatedDomain ,@PathVariable Long id){
        Domains oldDomain = adminService.getDomainById(id);

        if (oldDomain != null) {
            // Update the fields of oldDomain with the values from updatedDomain
            oldDomain.setProgram(updatedDomain.getProgram());
            oldDomain.setBatch(updatedDomain.getBatch());
            oldDomain.setCapacity(updatedDomain.getCapacity());
            oldDomain.setQualification(updatedDomain.getQualification());

            // Save the updated domain
            adminService.saveDomain(oldDomain);

            return ResponseEntity.ok("Domain updated successfully");
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Domain not found for ID: " + id);
        }
    }
    //Add New Domain
    @PostMapping("/add/domain")
    public ResponseEntity<String> addNewDomain(@RequestBody Domains newDomain) {
        try {
            adminService.saveDomain(newDomain);
            return ResponseEntity.status(HttpStatus.CREATED).body("Domain added successfully");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error adding domain");
        }
    }
}
