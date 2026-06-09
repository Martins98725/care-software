package br.com.care.backend.care.service.impl;

import br.com.care.backend.care.DTO.Request.AuthRegistrationData;
import br.com.care.backend.care.DTO.Request.AuthRequestDTO;
import br.com.care.backend.care.DTO.Request.CaregiverRequestDTO;
import br.com.care.backend.care.DTO.Request.RegisterResponsibleDTO;
import br.com.care.backend.care.domain.model.Caregiver;
import br.com.care.backend.care.domain.model.Responsible;
import br.com.care.backend.care.domain.model.User;
import br.com.care.backend.care.domain.repositories.CaregiverRepository;
import br.com.care.backend.care.domain.repositories.ResponsibleRepository;
import br.com.care.backend.care.domain.repositories.UserRepository;
import br.com.care.backend.care.infra.TokenService;
import br.com.care.backend.care.service.AuthService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthServiceImpl implements AuthService {

    private final AuthenticationManager authenticationManager;
    private final UserRepository userRepository;
    private final ResponsibleRepository responsibleRepository;
    private final CaregiverRepository caregiverRepository;
    private final PasswordEncoder passwordEncoder;
    private final TokenService tokenService;

    @Override
    public void registerResponsible(RegisterResponsibleDTO registerResponsibleDTO) {
        buildResponsible(registerResponsibleDTO);
    }

    @Override
    public void registerCaregiver(CaregiverRequestDTO caregiverRequestDTO) {
        buildCaregiver(caregiverRequestDTO);
    }

    @Override
    public String login(AuthRequestDTO authRequestDTO) {
        var userNamePassword = new UsernamePasswordAuthenticationToken(authRequestDTO.email(), authRequestDTO.password());

        var authentication = authenticationManager.authenticate(userNamePassword);

        User user = (User) authentication.getPrincipal();

        return tokenService.generateToken(user);
    }

    private void buildResponsible(RegisterResponsibleDTO registerResponsibleDTO) {
        if (registerResponsibleDTO == null) {
            return;
        }
        Responsible responsible = Responsible.builder()
                .name(registerResponsibleDTO.name())
                .cpf(registerResponsibleDTO.cpf())
                .phoneNumber(registerResponsibleDTO.phoneNumber())
                .degreeOfKinship(registerResponsibleDTO.degreeOfKinship())
                .address(registerResponsibleDTO.address())
                .user(buildUser(registerResponsibleDTO))
                .build();

        responsibleRepository.save(responsible);
    }

    private void buildCaregiver(CaregiverRequestDTO registerCaregiverDTO) {
        if (registerCaregiverDTO == null) {
            return;
        }

        Caregiver caregiver = Caregiver.builder()
                .name(registerCaregiverDTO.name())
                .cpf(registerCaregiverDTO.cpf())
                .phone(registerCaregiverDTO.phone())
                .address(registerCaregiverDTO.address())
                .isNurse(registerCaregiverDTO.isNurse())
                .coren(registerCaregiverDTO.coren())
                .email(registerCaregiverDTO.email())
                .user(buildUser(registerCaregiverDTO))
                .build();

        caregiverRepository.save(caregiver);
    }

    private User buildUser(AuthRegistrationData authRegistrationData) {
        return User.builder()
                .email(authRegistrationData.email())
                .password(passwordEncoder.encode(authRegistrationData.password()))
                .role(authRegistrationData.role())
                .isActive(true)
                .build();
    }
}
