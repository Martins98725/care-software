package br.com.care.backend.care.DTO.Request;

import br.com.care.backend.care.domain.enums.Role;

public interface AuthRegistrationData {
    String email();
    String password();
    Role role();
}
