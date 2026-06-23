package br.com.care.backend.care.domain.enums;

import lombok.Getter;

@Getter
public enum TaskType {
    MEDICATION,
    HYGIENE,
    FEEDING,
    MEDICAL_APPOINTMENT,
    EXERCISE,
    OTHER
}
