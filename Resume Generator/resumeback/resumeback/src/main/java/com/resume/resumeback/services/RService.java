package com.resume.resumeback.services;

import java.io.IOException;
import java.util.Map;

public interface RService {
    Map<String, Object> generateResumeResponse(String userDescription) throws IOException;
}
