package br.com.care.backend.care.service;

import br.com.care.backend.care.DTO.Request.CreateTaskRequestDTO;

public interface CareTaskService {
   void scheduleTask(CreateTaskRequestDTO dto, String authenticatedEmail);
}
