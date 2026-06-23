package br.com.care.backend.care.service.impl;

import br.com.care.backend.care.DTO.Request.RegisterActivityRequestDTO;
import br.com.care.backend.care.domain.enums.AlertLevel;
import br.com.care.backend.care.domain.enums.TaskStatus;
import br.com.care.backend.care.domain.model.*;
import br.com.care.backend.care.domain.repositories.*;
import br.com.care.backend.care.service.ActivityLogService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;


@Service
@RequiredArgsConstructor
public class ActivityLogServiceImpl implements ActivityLogService {

    private final ActivityLogRepository activityRepository;
    private final CareTaskRepository taskRepository;
    private final AlertRepository alertRepository;
    private final PatientRepository patientRepository;
    private final UserRepository userRepository;

    @Override
    public void registerActivity(RegisterActivityRequestDTO data, String authenticatedEmail) {
        Patient patient = patientRepository.findById(data.patientId())
                .orElseThrow(() -> new IllegalArgumentException("Paciente não encontrado"));

        User loggedUser = (User) userRepository.findByEmail(authenticatedEmail);

        // 1. Constrói o log da atividade
        ActivityLog log = ActivityLog.builder()
                .description(data.description())
                .occurredAt(data.occurredAt())
                .isCritical(data.isCritical())
                .patient(patient)
                .loggedBy(loggedUser)
                .build();

        // 2. Se a atividade for a conclusão de uma tarefa da agenda, atualiza o status
        if (data.relatedTaskId() != null) {
            CareTask task = taskRepository.findById(data.relatedTaskId())
                    .orElseThrow(() -> new IllegalArgumentException("Tarefa não encontrada"));

            task.setStatus(TaskStatus.COMPLETED);
            taskRepository.save(task);

            log.setRelatedTask(task);
        }

        activityRepository.save(log);

        // 3. Se a atividade for crítica, gera um alerta automático
        if (Boolean.TRUE.equals(data.isCritical())) {
            generateCriticalAlert(patient, data.description());
        }
    }

    private void generateCriticalAlert(Patient patient, String activityDescription) {
        Alert alert = Alert.builder()
                .message("Atenção Crítica: " + activityDescription)
                .level(AlertLevel.CRITICAL)
                .createdAt(LocalDateTime.now())
                .patient(patient)
                .build();

        alertRepository.save(alert);
    }
}
