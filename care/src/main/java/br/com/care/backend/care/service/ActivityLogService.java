package br.com.care.backend.care.service;

import br.com.care.backend.care.DTO.Request.RegisterActivityRequestDTO;

public interface ActivityLogService {
   void registerActivity(RegisterActivityRequestDTO data, String authenticatedEmail);
}
