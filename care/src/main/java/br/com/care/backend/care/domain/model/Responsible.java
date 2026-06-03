package br.com.care.backend.care.domain.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;
import java.util.UUID;

@Data
@Entity
@Table(name = "responsibles")
@NoArgsConstructor
@AllArgsConstructor
public class Responsible {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;
    private String name;
    private String cpf;
    private String degreeOfKinship;
    private String phoneNumber;
    private String address;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "responsible")
    private List<Patient> patients;
}
