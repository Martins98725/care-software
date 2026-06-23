package br.com.care.backend.care.domain.enums;

import lombok.Getter;

@Getter
public enum TaskStatus {
    PENDING,
    COMPLETED,
    CANCELLED,
    MISSED
}
