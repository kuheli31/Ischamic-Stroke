package com.kuheli.backend.dto;

public class UploadResponse {

    private String prediction;
    private double confidence;

    public UploadResponse(String prediction, double confidence) {
        this.prediction = prediction;
        this.confidence = confidence;
    }

    public String getPrediction() { return prediction; }
    public double getConfidence() { return confidence; }
}