package br.com.care.backend.care.domain.repositories;

import br.com.care.backend.care.domain.model.Caregiver;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface PatientRepository extends JpaRepository<Caregiver, UUID> {
}
