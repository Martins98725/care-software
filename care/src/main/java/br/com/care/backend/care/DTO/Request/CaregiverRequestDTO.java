package br.com.care.backend.care.DTO.Request;

import br.com.care.backend.care.domain.enums.Role;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;

public record CaregiverRequestDTO(
        @NotBlank String name,
        @NotBlank String cpf,
        @NotBlank @Email String email,
        @NotBlank String password,
        @NotBlank String phone,
        String address,
        Boolean isNurse,
        Role role,
        String coren) implements AuthRegistrationData {
}
