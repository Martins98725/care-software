package br.com.care.backend.care.controllers;

import br.com.care.backend.care.DTO.Request.AuthRequestDTO;
import br.com.care.backend.care.DTO.Request.CaregiverRequestDTO;
import br.com.care.backend.care.DTO.Request.RegisterResponsibleDTO;
import br.com.care.backend.care.DTO.response.AuthResponse;
import br.com.care.backend.care.service.AuthService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
@Tag(name = "Login dos usuários", description = "Operações relacionadas ao login e registros dos usuários")
public class AuthController {
    private final AuthService authService;

    @PostMapping("/login")
    @Operation(summary = "Fazer login", description = "Cria um novo login no sistema")
    public ResponseEntity<AuthResponse> login(@RequestBody @Valid AuthRequestDTO data) {
        String token = authService.login(data);
        return ResponseEntity.ok(new AuthResponse(token));
    }

    @PostMapping("/register/responsible")
    @Operation(summary = "Cria um responsável", description = "Cria um novo responsável no sistema")
    public ResponseEntity<?> registerResponsible(@RequestBody @Valid RegisterResponsibleDTO data) {
        authService.registerResponsible(data);
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }

    @PostMapping("/register/caregiver")
    @Operation(summary = "Cria um Cuidador", description = "Cria um novo cuidador no sistema")
    public ResponseEntity<?> registerCaregiver(@RequestBody @Valid CaregiverRequestDTO data) {
        authService.registerCaregiver(data);
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }
}
