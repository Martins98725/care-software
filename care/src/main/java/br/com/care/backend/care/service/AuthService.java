package br.com.care.backend.care.service;

import br.com.care.backend.care.DTO.Request.AuthRequestDTO;
import br.com.care.backend.care.DTO.Request.CaregiverRequestDTO;
import br.com.care.backend.care.DTO.Request.RegisterResponsibleDTO;

public interface AuthService {
    void registerResponsible(RegisterResponsibleDTO registerResponsibleDTO);

    void registerCaregiver(CaregiverRequestDTO caregiverRequestDTO);

    String login(AuthRequestDTO authRequestDTO);
}
