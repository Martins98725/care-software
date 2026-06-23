package br.com.care.backend.care.service.impl;

import br.com.care.backend.care.DTO.Request.CreateTaskRequestDTO;
import br.com.care.backend.care.domain.model.CareTask;
import br.com.care.backend.care.domain.model.Patient;
import br.com.care.backend.care.domain.model.User;
import br.com.care.backend.care.domain.repositories.CareTaskRepository;
import br.com.care.backend.care.domain.repositories.PatientRepository;
import br.com.care.backend.care.domain.repositories.UserRepository;
import br.com.care.backend.care.service.CareTaskService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class CareTaskServiceImpl implements CareTaskService {

    private final CareTaskRepository taskRepository;
    private final PatientRepository patientRepository;
    private final UserRepository userRepository;

    @Override
    public void scheduleTask(CreateTaskRequestDTO dto, String authenticatedEmail) {
        Patient patient = patientRepository.findById(dto.patientId())
                .orElseThrow(() -> new IllegalArgumentException("Paciente não encontrado"));

        User user = (User) userRepository.findByEmail(authenticatedEmail);

        CareTask task = CareTask.builder()
                .title(dto.title())
                .description(dto.description())
                .scheduledTime(dto.scheduledTime())
                .type(dto.type())
                .patient(patient)
                .createdBy(user)
                .build();

        taskRepository.save(task);
    }
}
