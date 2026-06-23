package br.com.care.backend.care.DTO.Request;

import br.com.care.backend.care.domain.enums.TaskType;

import java.time.LocalDateTime;
import java.util.UUID;

public record CreateTaskRequestDTO(String title,
                                   String description,
                                   LocalDateTime
                                   scheduledTime, TaskType type,
                                   UUID patientId) {
}
