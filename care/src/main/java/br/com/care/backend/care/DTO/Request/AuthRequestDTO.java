package br.com.care.backend.care.DTO.Request;

public record AuthRequestDTO(
        String email,
        String password
) {
}
