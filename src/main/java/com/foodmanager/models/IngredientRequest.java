package com.foodmanager.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class IngredientRequest {
    private String name;

    //TODO introduce UOMs here?
    //TODO introduce marcos here?
}
