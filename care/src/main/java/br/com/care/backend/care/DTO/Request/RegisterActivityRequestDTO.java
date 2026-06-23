package br.com.care.backend.care.DTO.Request;

import java.time.LocalDateTime;
import java.util.UUID;

public record RegisterActivityRequestDTO(String description,
                                         LocalDateTime occurredAt,
                                         Boolean isCritical,
                                         UUID patientId,
                                         UUID relatedTaskId) {
}
