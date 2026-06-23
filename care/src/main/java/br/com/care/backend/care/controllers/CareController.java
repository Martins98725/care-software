package br.com.care.backend.care.controllers;


import br.com.care.backend.care.DTO.Request.CreateTaskRequestDTO;
import br.com.care.backend.care.DTO.Request.RegisterActivityRequestDTO;
import br.com.care.backend.care.domain.model.User;
import br.com.care.backend.care.service.ActivityLogService;
import br.com.care.backend.care.service.CareTaskService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/care")
@RequiredArgsConstructor
@Tag(name = "Gerenciamento de cuidados", description = "Operações relacionadas ao gerenciamento de cuidados do paciente")
public class CareController {
    private final CareTaskService taskService;
    private final ActivityLogService activityService;


    @PostMapping("/tasks")
    @Operation(summary = "Agenda de cuidados", description = "Cria uma agenda de cuidados para o paciente")
    public ResponseEntity<Void> scheduleTask(@RequestBody @Valid CreateTaskRequestDTO data, @AuthenticationPrincipal User user) {
        taskService.scheduleTask(data, user.getEmail());
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }


    @PostMapping("/activities")
    @Operation(summary = "Registro de atividadses", description = "Cria uma atividade dentro da agenda de cuidados do paciente")
    public ResponseEntity<Void> logActivity(@RequestBody @Valid RegisterActivityRequestDTO data, @AuthenticationPrincipal User user) {
        activityService.registerActivity(data, user.getEmail());
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }
}
