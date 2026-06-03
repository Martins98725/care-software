package br.com.care.backend.care.domain.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;
import java.util.UUID;


@Data
@Entity
@Table(name = "patient")
@NoArgsConstructor
@AllArgsConstructor
public class Patient {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;
    private String name;
    private String cpf;

    @ManyToOne(fetch = FetchType.LAZY)
    private Responsible responsible;

    //private List<Caregiver> caregivers;
}
