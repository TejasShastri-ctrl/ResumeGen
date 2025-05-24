package com.resume.resumeback;

import java.io.IOException;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.resume.resumeback.services.RService;

@SpringBootTest
class ResumebackApplicationTests {

	@Autowired
	private RService rService;
	
	@Test
	void contextLoads() throws IOException {
		rService.generateResumeResponse("I am Tejas Shastri with 2 years of experience");
	}
}