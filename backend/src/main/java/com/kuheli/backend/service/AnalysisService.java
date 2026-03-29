package com.kuheli.backend.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.kuheli.backend.dto.UploadResponse;
import com.kuheli.backend.model.*;
import com.kuheli.backend.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import com.fasterxml.jackson.databind.JsonNode;

@Service
public class AnalysisService {

    @Autowired
    private ScanRepository scanRepo;

    @Autowired
    private ResultRepository resultRepo;

    @Autowired
    private MLService mlService;

    public UploadResponse processScan(MultipartFile file) throws Exception {

        // Save scan record
        Scan scan = new Scan();
        scan.setImagePath(file.getOriginalFilename());
        scanRepo.save(scan);

        // Placeholder ML response (replace this once ML is ready)
        String response = "{\"prediction\":\"Stroke\",\"confidence\":0.85}";

        // If you want to test the real ML service, later replace this with:
        // String response = mlService.callML(file);

        // Parse the response (this is still a JSON structure)
        ObjectMapper mapper = new ObjectMapper();
        JsonNode node = mapper.readTree(response);

        String prediction = node.get("prediction").asText();
        double confidence = node.get("confidence").asDouble();

        // Save result record
        Result result = new Result();
        result.setScanId(scan.getId());
        result.setPrediction(prediction);
        result.setConfidence(confidence);

        resultRepo.save(result);

        return new UploadResponse(prediction, confidence);
    }
}