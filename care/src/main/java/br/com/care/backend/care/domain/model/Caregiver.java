package br.com.care.backend.care.domain.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;
import java.util.UUID;

@Entity
@Table(name = "tb_caregiver")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Caregiver {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @Column(name = "name", nullable = false, length = 70)
    private String name;

    @Column(name = "cpf", nullable = false, length = 11, unique = true)
    private String cpf;

    @Column(name = "email", nullable = false, length = 70)
    private String email;

    @Column(name = "phone", nullable = false, length = 15)
    private String phone;

    //aqui eu posso refatorar para virar uma entidade so e usar o @Embleeded
    @Column(name = "address", nullable = false, length = 70)
    private String address;

    @Column(name = "is_nurse", nullable = false)
    private Boolean isNurse;

    @Column(name = "coren", nullable = false, length = 70, unique = true)
    private String coren;

    private String specialization;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "user_id", referencedColumnName = "id")
    private User user;

    @ManyToMany
    @JoinTable(
            name = "tb_caregiver_patient",
            joinColumns = @JoinColumn(name = "caregiver_id"),
            inverseJoinColumns = @JoinColumn(name = "patient_id")
    )
    private List<Patient> patients;
}
