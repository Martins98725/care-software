package br.com.care.backend.care.domain.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.UUID;


@Data
@Builder
@Entity
@Table(name = "tb_activity_log")
@NoArgsConstructor
@AllArgsConstructor
public class ActivityLog {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @Column(nullable = false, columnDefinition = "TEXT")
    private String description;

    @Column(nullable = false)
    private LocalDateTime occurredAt;

    private Boolean isCritical; // Se true, vai gerar um alerta!

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "patient_id", nullable = false)
    private Patient patient;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "logged_by_user_id", nullable = false)
    private User loggedBy; // Quem realizou a ação

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "care_task_id")
    private CareTask relatedTask; // A atividade pode estar completando uma tarefa agendada
}
