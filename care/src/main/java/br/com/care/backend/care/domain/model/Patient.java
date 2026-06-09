package br.com.care.backend.care.domain.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;
import java.util.UUID;


@Data
@Entity
@Table(name = "tb_patient")
@NoArgsConstructor
@AllArgsConstructor
public class Patient {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @Column(name = "name",  nullable = false, length = 70)
    private String name;

    @Column(name = "cpf", nullable = false, length = 11, unique = true)
    private String cpf;

    @Column(name = "allergies",  nullable = false, length = 70)
    private String allergies;

    @Column(name = "medicalHistory",  nullable = false, length = 300)
    private String medicalHistory;

    @Column(name = "medicalConditions",  nullable = false, length = 300)
    private String medicalConditions;

    @Column(name = "bloodType",  nullable = false, length = 2)
    private String bloodType;

    @Column(name = "weight",  nullable = false)
    private Double weight;

    @Column(name = "height",  nullable = false)
    private Double height;

    @ManyToOne(fetch = FetchType.LAZY)
    private Responsible responsible;

    @ManyToMany(fetch = FetchType.LAZY)
    private List<Caregiver> caregivers;
}
